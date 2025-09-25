import React, { useState } from "react";

type SpeakerForm = {
  name: string;
  email: string;
  phone: string;
  telegram: string;
  xhandle: string;
  topic: string;
  abstract: string;
  bio: string;
  links: string;
};

const initialSpeaker: SpeakerForm = {
  name: "",
  email: "",
  phone: "",
  telegram: "",
  xhandle: "",
  topic: "",
  abstract: "",
  bio: "",
  links: "",
};

export const RegisterSpeaker: React.FC = () => {
  const [form, setForm] = useState<SpeakerForm>(initialSpeaker);
  const [submitting, setSubmitting] = useState(false);

  const update = (k: keyof SpeakerForm) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [k]: e.target.value });
  };

  const clear = () => setForm(initialSpeaker);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Placeholder submit – wire to backend later
    setTimeout(() => {
      alert("Registration submitted! (speaker)");
      setSubmitting(false);
      clear();
    }, 800);
  };

  return (
    <section className="w-full py-10">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-black">Speaker Registration</h2>
          <div className="mt-1  font-semibold text-green-500">Submit your talk</div>
          <div className="text-xs text-gray-500">Tell us about your session</div>
        </div>

        <div className="mt-6 rounded-xl border border-gray-200 bg-white shadow-sm max-w-3xl mx-auto p-6">
          <h3 className="font-semibold ">Speaker Details</h3>
          <form onSubmit={onSubmit} className="mt-4 space-y-4">
            <div>
              <label className="block text-xs text-gray-600 mb-1">Name</label>
              <input value={form.name} onChange={update('name')} required placeholder="Your full name" className="w-full rounded-md border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500" />
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1">Email Address</label>
              <input type="email" value={form.email} onChange={update('email')} required placeholder="Your email" className="w-full rounded-md border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-gray-600 mb-1">Phone Number</label>
                <input value={form.phone} onChange={update('phone')} placeholder="Phone number" className="w-full rounded-md border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500" />
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-1">Telegram Username</label>
                <input value={form.telegram} onChange={update('telegram')} placeholder="Telegram ID" className="w-full rounded-md border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500" />
              </div>
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1">X Handle</label>
              <input value={form.xhandle} onChange={update('xhandle')} placeholder="@yourhandle" className="w-full rounded-md border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500" />
            </div>

            <h3 className="pt-2 font-semibold text-gray-900">Session Proposal</h3>
            <div>
              <label className="block text-xs text-gray-600 mb-1">Talk Title / Topic</label>
              <input value={form.topic} onChange={update('topic')} required placeholder="Proposed talk title" className="w-full rounded-md border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500" />
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1">Abstract</label>
              <textarea value={form.abstract} onChange={update('abstract')} rows={4} placeholder="Describe your session" className="w-full rounded-md border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500" />
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1">Speaker Bio</label>
              <textarea value={form.bio} onChange={update('bio')} rows={3} placeholder="Short bio" className="w-full rounded-md border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500" />
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1">Links (slides, repo, portfolio)</label>
              <input value={form.links} onChange={update('links')} placeholder="https://..." className="w-full rounded-md border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500" />
            </div>

            <div className="flex items-center justify-between pt-2">
              <button type="button" onClick={clear} className="text-sm text-gray-600 inline-flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full border border-gray-400" />
                Clear Form
              </button>
              <button type="submit" disabled={submitting} className="px-4 py-2 rounded-md bg-green-500 text-white text-sm disabled:opacity-60">
                {submitting ? 'Submitting…' : 'Submit'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegisterSpeaker;
