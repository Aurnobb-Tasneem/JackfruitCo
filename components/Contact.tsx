"use client";

import { FormEvent, useState } from "react";
import { contactEmail } from "@/lib/content";
import { MagneticButton } from "./MagneticButton";
import { Reveal } from "./Reveal";

type FormDataState = {
  name: string;
  email: string;
  company: string;
  message: string;
};

const defaultForm: FormDataState = {
  name: "",
  email: "",
  company: "",
  message: "",
};

export function Contact() {
  const [form, setForm] = useState<FormDataState>(defaultForm);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      setError("Please complete name, email, and message.");
      return;
    }

    setStatus("loading");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const payload = (await response.json()) as { error?: string };
        throw new Error(payload.error || "Failed to send message.");
      }

      setStatus("success");
      setForm(defaultForm);
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Unexpected error occurred.");
    }
  };

  return (
    <section id="contact" className="border-t border-black/10 py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:px-10">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-black/60">Contact</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight lg:text-5xl">
            Let&apos;s develop your next production program.
          </h2>
          <p className="mt-5 max-w-xl text-black/75">
            Share your category focus, quality expectations, and target timeline. We will map sourcing,
            development, production, and shipment with transparent milestones from start to finish.
          </p>
          <p className="mt-4 text-sm font-medium text-black/70">Email: {contactEmail}</p>
        </Reveal>

        <Reveal delay={0.08}>
          <form onSubmit={onSubmit} className="grid gap-4 border border-black/10 bg-white p-6">
            <input
              className="w-full border border-black/15 px-4 py-3 text-sm outline-none focus:border-[#c72a09]"
              placeholder="Name *"
              value={form.name}
              onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
            />
            <input
              type="email"
              className="w-full border border-black/15 px-4 py-3 text-sm outline-none focus:border-[#c72a09]"
              placeholder="Email *"
              value={form.email}
              onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
            />
            <input
              className="w-full border border-black/15 px-4 py-3 text-sm outline-none focus:border-[#c72a09]"
              placeholder="Company"
              value={form.company}
              onChange={(event) => setForm((prev) => ({ ...prev, company: event.target.value }))}
            />
            <textarea
              rows={5}
              className="w-full resize-none border border-black/15 px-4 py-3 text-sm outline-none focus:border-[#c72a09]"
              placeholder="Message *"
              value={form.message}
              onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
            />
            <div className="mt-2 flex items-center justify-between gap-3">
              <MagneticButton
                type="submit"
                disabled={status === "loading"}
                className="rounded-full bg-black px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-white disabled:opacity-60"
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </MagneticButton>
              <p className="text-xs text-black/55">Response usually within 24 hours.</p>
            </div>

            {status === "success" && (
              <p className="text-sm font-medium text-green-700">Message sent successfully.</p>
            )}
            {status === "error" && <p className="text-sm font-medium text-red-700">{error}</p>}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
