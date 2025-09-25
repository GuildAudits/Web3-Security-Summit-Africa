import React, { useMemo, useState } from "react";

type Video = {
  id: string;
  title: string;
  year: number;
  speaker?: string;
  url: string; // external watch url
};

const sample: Video[] = [];

export const Archive: React.FC = () => {
  const [q, setQ] = useState("");
  const years = useMemo(() => Array.from(new Set(sample.map(s => s.year))).sort((a,b)=>b-a), []);
  const [year, setYear] = useState<number | "all">("all");

  const results = sample.filter(v => {
    const matchesText = !q || v.title.toLowerCase().includes(q.toLowerCase()) || (v.speaker||"").toLowerCase().includes(q.toLowerCase());
    const matchesYear = year === "all" || v.year === year;
    return matchesText && matchesYear;
  });

  return (
    <section className="w-full py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Archive</h2>
        <p className="mt-1 text-sm text-gray-600">Search past sessions and rewatch recordings.</p>

        <div className="mt-4 flex flex-col sm:flex-row gap-3">
          <input
            value={q}
            onChange={e=>setQ(e.target.value)}
            placeholder="Search by title or speaker"
            className="w-full sm:w-2/3 rounded-md border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <select
            value={year as any}
            onChange={e=> setYear(e.target.value === 'all' ? 'all' : Number(e.target.value))}
            className="w-full sm:w-1/3 rounded-md border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="all">All years</option>
            {years.map(y => <option key={y} value={y}>{y}</option>)}
          </select>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map(v => (
            <a key={v.id} href={v.url} target="_blank" rel="noopener noreferrer" className="group rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-md transition overflow-hidden">
              <div className="aspect-video bg-gray-100 flex items-center justify-center text-gray-400 text-sm">Thumbnail</div>
              <div className="p-4">
                <div className="font-semibold text-gray-900 group-hover:text-green-700">{v.title}</div>
                <div className="text-xs text-gray-500 mt-1">{v.year}{v.speaker ? ` • ${v.speaker}` : ''}</div>
              </div>
            </a>
          ))}
          {results.length === 0 && (
            <div className="col-span-full text-center text-sm text-gray-500">Past videos will show here.</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Archive;
