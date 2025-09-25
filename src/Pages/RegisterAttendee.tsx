import React, { useState } from "react";

type AttendeeForm = {
  name: string;
  email: string;
  phone: string;
  country: string;
  location: string;
  telegram: string;
  xhandle: string;
  gender: string;
  role: string;
};

const initialState: AttendeeForm = {
  name: "",
  email: "",
  phone: "",
  country: "",
  location: "",
  telegram: "",
  xhandle: "",
  gender: "",
  role: "",
};

export const RegisterAttendee: React.FC = () => {
  const [form, setForm] = useState<AttendeeForm>(initialState);
  const [submitting, setSubmitting] = useState(false);

  const update = (k: keyof AttendeeForm) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [k]: e.target.value });
  };

  const clear = () => setForm(initialState);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Placeholder submit – wire to backend/form tool later
    setTimeout(() => {
      alert("Registration submitted! (attendee)");
      setSubmitting(false);
      clear();
    }, 800);
  };

  return (
    <section className="w-full py-10">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl font-bold ">WEB3 SECURITY SUMMIT AFRICA
          </h2>
          <div className="mt-1 text-green-500 font-semibold">Register Now!</div>
          <div className="text-xs text-gray-500">Be a part of the event</div>
          <div className="mt-2 font-medium">Fill in the information carefully</div>
        </div>

        <div className="mt-6 rounded-xl border border-gray-200 bg-white shadow-sm max-w-3xl mx-auto p-6">
          <h3 className="font-semibold text-gray-900">Personal Details</h3>
          <form onSubmit={onSubmit} className="mt-4 space-y-4">
            <div>
              <label className="block text-xs text-gray-600 mb-1">Name</label>
              <input value={form.name} onChange={update('name')} required placeholder="put in your full name" className="w-full rounded-md border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500" />
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1">Email Address</label>
              <input type="email" value={form.email} onChange={update('email')} required placeholder="Put in your email." className="w-full rounded-md border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500" />
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1">Phone Number</label>
              <input value={form.phone} onChange={update('phone')} required placeholder="Put in your phone number." className="w-full rounded-md border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500" />
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1">Country</label>
              <input value={form.country} onChange={update('country')} placeholder="The country you're coming from e.g Nigeria" className="w-full rounded-md border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500" />
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1">Location</label>
              <input value={form.location} onChange={update('location')} placeholder="e.g Lagos" className="w-full rounded-md border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500" />
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1">Telegram Username</label>
              <input value={form.telegram} onChange={update('telegram')} placeholder="Put in your telegram ID" className="w-full rounded-md border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500" />
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1">X Handle</label>
              <input value={form.xhandle} onChange={update('xhandle')} placeholder="Put in your X handle" className="w-full rounded-md border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500" />
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1">Gender</label>
              <select value={form.gender} onChange={update('gender')} className="w-full rounded-md border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500">
                <option value="">Please Select an Option</option>
                <option>Male</option>
                <option>Female</option>
                <option>Prefer not to say</option>
              </select>
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1">What Best Describes Your Role In Web3</label>
              <select value={form.role} onChange={update('role')} className="w-full rounded-md border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500">
                <option value="">Please Select an Option</option>
                <option>Developer</option>
                <option>Researcher</option>
                <option>Designer</option>
                <option>Community</option>
                <option>Other</option>
              </select>
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

export default RegisterAttendee;
