import { useState } from "react";
import Sidebar from "../../components/layout/Sidebar";
import Navbar from "../../components/layout/Navbar";
import CourseCard from "../../components/dashboard/CourseCard";
import courses from "../../data/courses";

export default function MyCourses() {

  const [search, setSearch] = useState("");

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex bg-slate-900 min-h-screen">

      <Sidebar />

      <div className="flex-1">

        <Navbar />

        <div className="p-8">

          <h1 className="text-3xl text-white font-bold mb-6">
            My Courses
          </h1>

          <input
            type="text"
            placeholder="Search Courses..."
            className="w-full p-3 rounded-lg bg-slate-800 text-white mb-8 outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">

            {filteredCourses.map(course => (
              <CourseCard
                key={course.id}
                course={course}
              />
            ))}

          </div>

        </div>

      </div>

    </div>
  );
}