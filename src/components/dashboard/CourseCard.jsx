import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function CourseCard({ course }) {
  return (
    <div className="bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition">

      <img
        src={course.image}
        alt={course.title}
        className="w-full h-48 object-cover"
      />

      <div className="p-5">

        <h2 className="text-xl font-bold text-white">
          {course.title}
        </h2>

        <p className="text-gray-400 mt-2">
          Instructor: {course.instructor}
        </p>

        <div className="flex items-center gap-2 mt-2 text-yellow-400">
          <FaStar />
          <span>{course.rating}</span>
        </div>

        <p className="text-gray-400 mt-2">
          Lessons: {course.lessons}
        </p>

        <div className="mt-4">

          <div className="w-full bg-slate-700 rounded-full h-3">
            <div
              className="bg-purple-500 h-3 rounded-full"
              style={{ width: `${course.progress}%` }}
            ></div>
          </div>

          <div className="flex justify-between mt-2">

            <p className="text-white">
              {course.progress}% Completed
            </p>

            <p className="text-gray-400">
              {course.lessons} Lessons
            </p>

          </div>

        </div>

        <Link to={`/course-details/${course.id}`}>
          <button className="mt-5 w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg">
            Continue Learning
          </button>
        </Link>

      </div>

    </div>
  );
}