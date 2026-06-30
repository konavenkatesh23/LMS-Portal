import { useState } from "react";

import Sidebar from "../../components/layout/Sidebar";
import Navbar from "../../components/layout/Navbar";

import AssignmentCard from "../../components/assignment/AssignmentCard";

import assignments from "../../data/assignments";

export default function Assignments() {

  const [search, setSearch] = useState("");

  const filteredAssignments = assignments.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex bg-slate-900 min-h-screen">

      <Sidebar />

      <div className="flex-1">

        <Navbar />

        <div className="p-8">

          <h1 className="text-3xl text-white font-bold">
            Assignments
          </h1>

          <input
            type="text"
            placeholder="Search Assignment..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-slate-800 text-white p-4 rounded-lg mt-6 mb-8 outline-none"
          />

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">

            {filteredAssignments.map((assignment) => (
              <AssignmentCard
                key={assignment.id}
                assignment={assignment}
              />
            ))}

          </div>

        </div>

      </div>

    </div>
  );
}