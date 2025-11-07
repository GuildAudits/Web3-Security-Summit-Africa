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
      { time: "10:00 - 10:05", stage: "Main Stage", title: "Welcome Address" },
      { time: "10:05 - 10:15", stage: "Main Stage", title: "Blocksploit Presentation: AI-based static analyzer for offensive security", speaker: "Guild Academy students" },
      { time: "10:15 - 10:25", stage: "Main Stage", title: "Solvra: Formal verification tool that runs on the cloud", speaker: "Guild Academy students" },
      { time: "10:25 - 10:45", stage: "Main Stage", title: "Security Research Is for Everyone", speaker: "Nonse Ifebhor" },
      { time: "10:45 - 10:55", stage: "Main Stage", title: "QA" },
      { time: "10:55 - 11:15", stage: "Main Stage", title: "Security Considerations of DeFAI (DeFi + AI)", speaker: "Victor Okafor" },
      { time: "11:15 - 11:20", stage: "Main Stage", title: "QA" },
      { time: "11:30 - 11:50", stage: "Main Stage", title: "Follow the Money: Investigating On-Chain Attacks", speaker: "Gracious Igwe" },
      { time: "11:50 - 12:00", stage: "Main Stage", title: "QA" },
      { time: "12:10 - 12:50", stage: "Main Stage", title: "Calldata Verification", speaker: "Patrick Collins", sub: "Remote" },
      { time: "12:50 - 01:10", stage: "Main Stage", title: "QA" },
      { time: "01:10 - 02:10", stage: "Main Stage", title: "Games" },
      { time: "01:20 - 01:50", stage: "Main Stage", title: "Finding Your Footing: Breaking Into Competitive Smart Contract Auditing", speaker: "Olanrewaju Bayode" },
      { time: "01:50 - 02:30", stage: "Main Stage", title: "Trust But Validate: Hardening DeFi Security with AI and FV", speaker: "Mooly Sagiv (CEO, Certora)", sub: "Remote" },
      { time: "02:30 - 03:00", stage: "Main Stage", title: "Panel Session - The Future of DeFi Security", speaker: "Damilola Edwards, Victor Okafor, Olanrewaju Bayode, Nonse Ifebhor, Gracious Igwe" },
      { time: "03:00 - 03:25", stage: "Main Stage", title: "Finding Vulnerabilities at Scale: A Deep Dive into Glider & Remedy’s Glider Contest", speaker: "Jason Tanner", sub: "Remote" },
      { time: "03:25 - 03:35", stage: "Main Stage", title: "QA" },
      { time: "03:40 - 04:00", stage: "Main Stage", title: "The Art of Auditing (Becoming a code detective)", speaker: "Damilola Edwards" },
      { time: "04:00 - 04:30", stage: "Main Stage", title: "Careers in Web3 Cybersecurity", speaker: "Mani Anwer", sub: "Remote" },
      { time: "04:30 - 04:40", stage: "Main Stage", title: "QA" },
    ],
  },
];

const Pill: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <span className={`inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-xs text-gray-700 ${className}`}>
    {children}
  </span>
);

export const ConferenceSchedule: React.FC<{ days?: DaySchedule[]; streamUrl?: string }> = ({ days, streamUrl }) => {
  const data = days ?? sampleDays;
  const [active, setActive] = useState(data[0]?.id ?? "day1");
  const activeDay = useMemo(() => data.find((d) => d.id === active) ?? data[0], [data, active]);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => calculateTimeLeft());
  const streamLink = streamUrl ?? '#/live';

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
            <a
              href={streamLink}
              className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              View Stream
            </a>
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
