"use client";

import { useState } from "react";

export default function SendEmailPage() {
  const [subject, setSubject] = useState("");
  const [html, setHtml] = useState("");
  const [recipients, setRecipients] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  // Validate emails
  function validateEmails(emails: string) {
    const emailList = emails.split(",").map(e => e.trim());
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailList.every(email => emailRegex.test(email));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!subject || !html || !recipients) {
      setMessage({ type: "error", text: "Please fill in all fields." });
      return;
    }

    if (!validateEmails(recipients)) {
      setMessage({ type: "error", text: "Please enter valid email addresses separated by commas." });
      return;
    }

    setLoading(true);
    setMessage(null);

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subject,
          html,
          recipients: recipients.split(",").map(e => e.trim()),
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setMessage({ type: "success", text: "Emails sent successfully!" });
        setSubject("");
        setHtml("");
        setRecipients("");
      } else {
        setMessage({ type: "error", text: data.error || "Failed to send emails." });
      }
    } catch (error) {
      setMessage({ type: "error", text: "Network error. Please try again." });
    }

    setLoading(false);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FFF9E3] px-6 font-[Quicksand,sans-serif]">
      <form onSubmit={handleSubmit} className="max-w-lg w-full bg-white p-8 rounded-xl shadow border border-[#FFD851]">
        <h1 className="text-2xl font-bold mb-6 text-[#1B1B1B]">Send Email</h1>

        {message && (
          <p className={`mb-4 font-semibold ${message.type === "success" ? "text-green-600" : "text-red-600"}`}>
            {message.text}
          </p>
        )}

        <label className="block mb-2 font-semibold text-[#1B1B1B]">Recipient Emails (comma separated)</label>
        <input
          type="text"
          value={recipients}
          onChange={(e) => setRecipients(e.target.value)}
          className="mb-4 w-full p-3 border border-black/20 rounded"
          placeholder="example1@mail.com, example2@mail.com"
        />

        <label className="block mb-2 font-semibold text-[#1B1B1B]">Subject</label>
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="mb-4 w-full p-3 border border-black/20 rounded"
          placeholder="Email subject"
        />

        <label className="block mb-2 font-semibold text-[#1B1B1B]">Email HTML Content</label>
        <textarea
          value={html}
          onChange={(e) => setHtml(e.target.value)}
          className="mb-6 w-full p-3 h-32 border border-black/20 rounded resize-y"
          placeholder="<p>Your HTML content here</p>"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 rounded bg-[#FFD851] text-[#1B1B1B] font-bold shadow hover:bg-[#ffe17a] transition disabled:opacity-60"
        >
          {loading ? "Sending..." : "Send Email"}
        </button>
      </form>
    </div>
  );
}
