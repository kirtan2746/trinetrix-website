
import { Resend } from "resend";

const recipient = "kirtan.gohel@vilartech.com.au";

// Use the exact domain verified in your Resend account.
// Change this if you verified vilartech.com.au instead.
const sender = "Vilartech Enquiries <notifications@mail.vilartech.com.au>";

const escapeHtml = (value) =>
  String(value).replace(/[&<>"']/g, (char) => {
    const map = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return map[char];
  });

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({
      error: "Method not allowed.",
    });
  }

  try {
    const { name, email, company, service, budget, message, website } =
      req.body || {};

    // Honeypot: hidden field used to catch simple spam bots.
    if (website) {
      return res.status(200).json({ success: true });
    }

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string" ||
      !name.trim() ||
      !email.trim() ||
      !message.trim()
    ) {
      return res.status(400).json({
        error: "Please complete all required fields.",
      });
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
      !emailPattern.test(email.trim()) ||
      name.length > 100 ||
      email.length > 254 ||
      message.length > 5000
    ) {
      return res.status(400).json({
        error: "Please check your enquiry details.",
      });
    }

    const optionalFields = [company, service, budget];

    if (
      optionalFields.some(
        (field) =>
          (field !== undefined && typeof field !== "string") ||
          (typeof field === "string" && field.length > 150)
      )
    ) {
      return res.status(400).json({
        error: "Invalid enquiry details.",
      });
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is missing.");
      return res.status(500).json({
        error: "Email service is not configured.",
      });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const fields = [
      ["Name", name],
      ["Email", email],
      ["Business", company || "Not provided"],
      ["Service", service || "Not selected"],
      ["Budget", budget || "Not specified"],
      ["Project Details", message],
    ];

    const html = `
      <div style="font-family:Arial,sans-serif;max-width:650px;margin:auto;color:#172B29;">
        <div style="background:#172B29;color:#fff;padding:28px;border-radius:16px 16px 0 0;">
          <h1 style="margin:0;font-size:25px;">New Vilartech Enquiry</h1>
          <p style="color:#9ED9B8;">Powered by Trinetrix</p>
        </div>
        <div style="padding:28px;border:1px solid #DDEAE2;">
          ${fields
            .map(
              ([label, value]) => `
                <div style="margin-bottom:20px;">
                  <strong>${label}</strong>
                  <p style="white-space:pre-wrap;overflow-wrap:anywhere;">
                    ${escapeHtml(value)}
                  </p>
                </div>
              `
            )
            .join("")}
        </div>
      </div>
    `;

    const { data, error } = await resend.emails.send({
      from: sender,
      to: [recipient],
      replyTo: email.trim(),
      subject: `Vilartech Enquiry: ${service || "General Project"}`,
      html,
    });

    if (error) {
      console.error("Resend delivery error:", error);
      return res.status(502).json({
        error: "Unable to submit your enquiry right now.",
      });
    }

    return res.status(200).json({
      success: true,
      id: data?.id,
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return res.status(500).json({
      error: "Something went wrong. Please try again.",
    });
  }
}
