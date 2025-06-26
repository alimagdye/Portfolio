"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Check, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus("Sending...");

    const form = formRef.current;
    if (!form) return;

    const formData = new FormData(form);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed to send");

      form.reset();
      setSubmissionStatus("Message sent successfully!");
      setTimeout(() => {
        setSubmissionStatus("");
        setIsSubmitting(false);
      }, 5000);
    } catch (err) {
      console.error("Submission failed:", err);
      setSubmissionStatus("Failed to send message.");
      setTimeout(() => {
        setSubmissionStatus("");
        setIsSubmitting(false);
      }, 5000);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="relative"
    >
      <div className="relative overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-6 transition-all duration-300 hover:border-purple-500/50">
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl blur opacity-25 hover:opacity-100 transition duration-1000 hover:duration-200"></div>

        <div className="relative">
          <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <Input
              name="name"
              type="text"
              placeholder="Your Name"
              required
              className="bg-zinc-900/50 border-zinc-700 focus:border-purple-500 focus:ring-purple-500/20"
            />
            <Input
              name="email"
              type="email"
              placeholder="Your Email"
              required
              className="bg-zinc-900/50 border-zinc-700 focus:border-purple-500 focus:ring-purple-500/20"
            />
            <Input
              name="subject"
              type="text"
              placeholder="Subject"
              required
              className="bg-zinc-900/50 border-zinc-700 focus:border-purple-500 focus:ring-purple-500/20"
            />
            <Textarea
              name="message"
              typeof=""
              placeholder="Your Message"
              rows={5}
              required
              className="bg-zinc-900/50 border-zinc-700 focus:border-purple-500 focus:ring-purple-500/20"
            />
            <Button
              type="submit"
              className={`w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 border-0 transition-opacity duration-300 ${
                submissionStatus === "Sending..."
                  ? "opacity-60 cursor-wait"
                  : "opacity-100"
              }`}
              onClick={(e) => {
                if (isSubmitting) e.preventDefault(); // block multiple clicks
              }}
            >
              {submissionStatus === "Sending..." ? (
                "Sending..."
              ) : submissionStatus === "Message sent successfully!" ? (
                <>
                  Message sent successfully! <Check className="ml-2 h-4 w-4" />
                </>
              ) : (
                <>
                  Send Message <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}
