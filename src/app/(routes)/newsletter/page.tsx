"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function NewsletterComposer() {
  const [subject, setSubject] = useState("");
  const [markdown, setMarkdown] = useState("");
  const [sending, setSending] = useState(false);
  const [message, setMessage] = useState<{ type: string; text: string } | null>(null);

  // Validate emails
  function validateEmails(emails: string[]) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emails.every(email => emailRegex.test(email));
  }

  async function handleSend() {
    if (!subject || !markdown) {
      setMessage({ type: "error", text: "Please fill in both the subject and content." });
      return;
    }

    // Example: get subscribers from somewhere (replace with real logic)
    const subscribers = ["example@example.com"]; // TODO: fetch from backend
    if (!validateEmails(subscribers)) {
      setMessage({ type: "error", text: "Invalid subscriber email(s)." });
      return;
    }

    setSending(true);
    setMessage(null);

    // For production, move markdown-to-HTML to backend
    const htmlContent = markdownToHtml(markdown);

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          subject,
          html: htmlContent,
          recipients: subscribers,
        }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setMessage({ type: "success", text: "🌟 Newsletter sent!" });
        setSubject("");
        setMarkdown("");
      } else {
        setMessage({ type: "error", text: data.error || "Sending failed." });
      }
    } catch (e) {
      setMessage({ type: "error", text: "Network error. Please try again." });
    }
    setSending(false);
  }

  function markdownToHtml(md: string) {
    return md
      .replace(/\n/g, "<br/>")
      .replace(/#{1,6} (.*)/g, "<h2>$1</h2>")
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.*?)\*/g, "<em>$1</em>");
  }

  return (
    <div className="min-h-screen flex flex-col px-6 py-10 items-center bg-[#FFF9E3] font-[Quicksand,sans-serif]">
      <div className="w-full max-w-6xl">
        <div className="flex flex-col md:flex-row gap-10">
          <section className="flex-1 bg-white rounded-3xl shadow-lg border border-[#FFDB5C] p-10">
            <h1 className="text-4xl font-extrabold mb-6 text-[#1B1B1B]">✍️ Compose Newsletter</h1>
            <p className="mb-6 text-[#555] text-lg font-medium">
              Write your newsletter with <span className="text-[#FFD851] font-semibold">Markdown</span> and preview your content.<br />
              Brighten inboxes with your InboxGalaxy style!
            </p>

            <label className="block mb-3 font-semibold text-[#2B2B2B] text-lg">Subject</label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Enter newsletter subject"
              className="mb-6 w-full p-4 rounded-xl border border-[#FFD851] bg-[#FFFDEB] font-medium placeholder:text-gray-400 focus:outline-4 focus:outline-yellow-400 transition"
              disabled={sending}
            />

            <label className="block mb-3 font-semibold text-[#2B2B2B] text-lg">Markdown Content</label>
            <textarea
              value={markdown}
              onChange={(e) => setMarkdown(e.target.value)}
              placeholder="Type your engaging newsletter content here..."
              className="w-full h-72 md:h-96 p-4 rounded-xl border border-[#FFD851] bg-[#FFFDEB] font-mono resize-y placeholder:text-gray-400 focus:outline-4 focus:outline-yellow-400 transition"
              disabled={sending}
            />

            <button
              onClick={handleSend}
              disabled={sending}
              className="mt-6 w-full py-4 rounded-xl bg-[#FFD851] text-[#1B1B1B] font-extrabold text-xl shadow-lg hover:bg-[#ffe17a] transition disabled:opacity-50"
            >
              {sending ? "Sending..." : "🚀 Send Newsletter"}
            </button>

            {message && (
              <p
                className={`mt-5 text-center font-semibold ${
                  message.type === "error" ? "text-red-600" : "text-green-700"
                }`}
              >
                {message.text}
              </p>
            )}
          </section>

          <section className="flex-1 bg-white rounded-3xl shadow-lg border border-[#FFDB5C] p-8 overflow-auto max-h-[42rem]">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-3xl font-bold text-[#1B1B1B] flex items-center gap-2">
                🔎 Preview
                <span className="bg-[#FFD851] px-3 py-1 rounded-lg text-sm font-bold text-[#1B1B1B] select-none">
                  Live
                </span>
              </h2>
            </div>

            <div className="prose max-w-none prose-headings:text-[#222] prose-p:text-[#444] prose-strong:text-[#FFD851] prose-em:text-[#B98900] prose-a:text-blue-700 prose-a:underline prose-blockquote:text-gray-600 prose-img:rounded-lg bg-[#FFFDFA] border border-[#FFE264] p-6 rounded-xl min-h-[20rem]">
              {markdown ? (
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
              ) : (
                <p className="italic text-gray-400 text-center mt-20 select-none">
                  Your live preview will appear here...
                </p>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
