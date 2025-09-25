import React, { useEffect, useMemo, useState } from "react";

export type Session = {
  time: string;
  stage: string;
  title: string;
  speaker?: string;
  sub?: string;
};

export type DaySchedule = {
  id: string;
  label: string;
  date: string;
  stage: string;
  sessions: Session[];
};

// Countdown helpers
const STREAM_START = new Date('2025-11-08T00:00:00');
const calculateTimeLeft = () => {
  const now = new Date();
  const difference = STREAM_START.getTime() - now.getTime();
  if (difference <= 0) return null; // Event has started
  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};

type TimeLeft = ReturnType<typeof calculateTimeLeft>;

const sampleDays: DaySchedule[] = [
  {
    id: "day1",
    label: "Day 1",
    date: "November 8, 2025",
    stage: "Main Stage",
    sessions: [
      { time: "09:00 AM", stage: "Main Stage", title: "Arrival & Registration" },
      { time: "09:30 AM", stage: "Main Stage", title: "Welcome address" },
      { time: "10:00 AM", stage: "Main Stage", title: "Introduction", speaker: "" },
      { time: "10:15 AM", stage: "Main Stage", title: "Introduction to Blockchain Technology", speaker: "" },
      { time: "11:00 AM", stage: "Main Stage", title: "Beginners guide to successful career in Web3", speaker: "" },
      { time: "11:45 AM", stage: "Main Stage", title: "From Web2 software to DevRel", speaker: "" },
      { time: "12:15 PM", stage: "Main Stage", title: "Monorepos on Context Dirs", speaker: "" },
      { time: "01:00 PM", stage: "Main Stage", title: "Lunch Break" },
      { time: "02:00 PM", stage: "Main Stage", title: "Building the Future of Web3 Together", speaker: "" },
      { time: "03:00 PM", stage: "Main Stage", title: "Designing Human-Centric Web3 Products", speaker: "" },
      { time: "04:00 PM", stage: "Main Stage", title: "AI and you need to know: Web3 Edition", speaker: "" },
      { time: "05:00 PM", stage: "Main Stage", title: "Africa’s onchain creative economy", speaker: "" },
    ],
  },
];

const Pill: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <span className={`inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-xs text-gray-700 ${className}`}>
    {children}
  </span>
);

export const ConferenceSchedule: React.FC<{ days?: DaySchedule[]; streamUrl?: string }> = ({ days }) => {
  const data = days ?? sampleDays;
  const [active, setActive] = useState(data[0]?.id ?? "day1");
  const activeDay = useMemo(() => data.find((d) => d.id === active) ?? data[0], [data, active]);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full py-12 mx-auto max-w-7xl">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-3">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Conference Schedule
          </h2>
          <p className="text-sm text-gray-600 max-w-2xl">
            Explore the exciting lineup of speakers, panels, and workshops packed into one day of blockchain security innovation and learning.
          </p>

          {timeLeft ? (
            <div className="text-sm text-gray-700 mt-1">
              <span className="font-medium">Starts in:</span>{' '}
              <span>
                {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
              </span>
            </div>
          ) : (
            <div className="text-sm text-green-600 font-semibold mt-1">We’re live!</div>
          )}

          {data.length > 1 && (
            <div className="mt-2 flex gap-2">
              {data.map((d) => (
                <button
                  key={d.id}
                  onClick={() => setActive(d.id)}
                  className={`px-4 py-2 text-sm rounded-md border transition ${
                    active === d.id
                      ? "bg-blue-600 text-white border-blue-600 shadow"
                      : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
                  }`}
                >
                  {d.label}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="mt-8 mb-8 pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-500">
              <span className="font-medium text-gray-700">{activeDay.label}</span> • {activeDay.date}
            </div>
            <Pill>{activeDay.stage}</Pill>
          </div>
        </div>

        <div className="mt-4 space-y-6">
          {activeDay.sessions.map((s, idx) => (
            <div
              key={idx}
              className="rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-md transition"
            >
              <div className="flex justify-between gap-4 p-4">
                <div className="w-24 shrink-0">
                  <div className="text-xs font-medium text-gray-500">{s.time}</div>
                  <div className="mt-2"><Pill className="text-[10px]">{s.stage}</Pill></div>
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-900">{s.title}</div>
                  {s.speaker && (
                    <div className="mt-1 text-sm text-gray-600">{s.speaker}{s.sub ? ` • ${s.sub}` : ""}</div>
                  )}
                </div>
                
              </div>
            </div>
          ))}
        </div>

       
        
      </div>
    </section>
  );
};

export default ConferenceSchedule;
