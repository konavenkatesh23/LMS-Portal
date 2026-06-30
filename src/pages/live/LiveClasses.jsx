import { useState } from "react";

import Sidebar from "../../components/layout/Sidebar";
import Navbar from "../../components/layout/Navbar";

import LiveClassCard from "../../components/live/LiveClassCard";

import liveClasses from "../../data/liveClasses";

export default function LiveClasses() {

  const [search, setSearch] = useState("");

  const filtered = liveClasses.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex bg-slate-900 min-h-screen">

      <Sidebar />

      <div className="flex-1">

        <Navbar />

        <div className="p-8">

          <h1 className="text-3xl font-bold text-white">
            Live Classes
          </h1>

          <input
            type="text"
            placeholder="Search Live Classes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full mt-6 mb-8 bg-slate-800 text-white p-4 rounded-lg outline-none"
          />

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">

            {filtered.map((item) => (
              <LiveClassCard
                key={item.id}
                liveClass={item}
              />
            ))}

          </div>

        </div>

      </div>

    </div>
  );
}