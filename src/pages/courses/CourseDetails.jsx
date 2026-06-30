import Sidebar from "../../components/layout/Sidebar";
import Navbar from "../../components/layout/Navbar";

import {
  FaStar,
  FaPlayCircle,
  FaClock,
  FaUserGraduate,
} from "react-icons/fa";

import { Link, useParams } from "react-router-dom";

import courses from "../../data/courses";

export default function CourseDetails() {
  const { id } = useParams();

  const course = courses.find(
    (item) => item.id === Number(id)
  );

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white text-3xl">
        Course Not Found
      </div>
    );
  }

  const lessons = [
    "Introduction",
    "React Basics",
    "Components",
    "Props",
    "State",
    "Hooks",
    "React Router",
    "Mini Project",
    "Final Project",
  ];

  return (
    <div className="flex bg-slate-900 min-h-screen">

      <Sidebar />

      <div className="flex-1">

        <Navbar />

        <div className="p-8">

          {/* Banner */}

          <img
            src={course.image}
            alt={course.title}
            className="w-full h-72 rounded-xl object-cover shadow-lg"
          />

          {/* Title */}

          <h1 className="text-4xl font-bold text-white mt-6">
            {course.title}
          </h1>

          <p className="text-gray-400 mt-3 text-lg">
            Learn this course with practical examples and real-world projects.
          </p>

          {/* Course Info */}

          <div className="flex flex-wrap gap-8 mt-6 text-white">

            <div className="flex items-center gap-2">
              <FaUserGraduate className="text-purple-400" />
              <span>{course.instructor}</span>
            </div>

            <div className="flex items-center gap-2">
              <FaStar className="text-yellow-400" />
              <span>{course.rating}</span>
            </div>

            <div className="flex items-center gap-2">
              <FaClock className="text-green-400" />
              <span>{course.lessons} Lessons</span>
            </div>

          </div>

          {/* Progress */}

          <div className="mt-10">

            <h2 className="text-xl text-white mb-3">
              Course Progress
            </h2>

            <div className="w-full bg-slate-700 rounded-full h-4">

              <div
                className="bg-purple-600 h-4 rounded-full transition-all duration-500"
                style={{
                  width: `${course.progress}%`,
                }}
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

          {/* Lessons */}

          <div className="mt-10">

            <h2 className="text-2xl text-white mb-6">
              Course Lessons
            </h2>

            <div className="space-y-4">

              {lessons.map((lesson, index) => (

                <div
                  key={index}
                  className="bg-slate-800 p-5 rounded-xl flex justify-between items-center hover:bg-slate-700 transition"
                >

                  <div className="flex gap-3 items-center">

                    <FaPlayCircle className="text-purple-500 text-xl" />

                    <span className="text-white">

                      {index + 1}. {lesson}

                    </span>

                  </div>

                  <Link to={`/video-learning/${course.id}`}>

                    <button className="bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded-lg text-white">

                      Watch

                    </button>

                  </Link>

                </div>

              ))}

            </div>

          </div>

          {/* Buttons */}

<div className="flex gap-4 mt-10">

  <Link to="/courses">

    <button className="bg-slate-700 hover:bg-slate-600 px-8 py-4 rounded-lg text-white">

      Back to Courses

    </button>

  </Link>

  <Link to={`/video-learning/${course.id}`}>

    <button className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-lg text-white">

      Continue Learning

    </button>

  </Link>

</div>

        </div>

      </div>

    </div>
  );
}