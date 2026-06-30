import { useState } from "react";
import { useParams } from "react-router-dom";
import { FaPlayCircle } from "react-icons/fa";

import Sidebar from "../../components/layout/Sidebar";
import Navbar from "../../components/layout/Navbar";
import courses from "../../data/courses";

export default function VideoLearning() {
  // Get course id from URL
  const { id } = useParams();

  // Hooks must always be at the top
  const [currentLesson, setCurrentLesson] = useState(0);

  // Find selected course
  const course = courses.find(
    (item) => item.id === Number(id)
  );

  // If course doesn't exist
  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white text-3xl">
        Course Not Found
      </div>
    );
  }

  // Videos of selected course
  const lessons = course.videos;

  return (
    <div className="flex bg-slate-900 min-h-screen">

      <Sidebar />

      <div className="flex-1">

        <Navbar />

        <div className="p-8">

          <h1 className="text-3xl font-bold text-white">
            {course.title}
          </h1>

          <p className="text-gray-400 mt-2 mb-6">
            Instructor : {course.instructor}
          </p>

          <div className="grid lg:grid-cols-3 gap-8">

            {/* Video Player */}

            <div className="lg:col-span-2">

              <div className="aspect-video rounded-xl overflow-hidden">

                <iframe
                  className="w-full h-full"
                  src={lessons[currentLesson].url}
                  title={lessons[currentLesson].title}
                  allowFullScreen
                ></iframe>

              </div>

              <h2 className="text-2xl text-white mt-6">

                {lessons[currentLesson].title}

              </h2>

              {/* Progress */}

              <div className="mt-6">

                <div className="w-full bg-slate-700 rounded-full h-4">

                  <div
                    className="bg-purple-600 h-4 rounded-full transition-all duration-500"
                    style={{
                      width: `${((currentLesson + 1) / lessons.length) * 100}%`
                    }}
                  ></div>

                </div>

                <p className="text-white mt-2">

                  Lesson {currentLesson + 1} of {lessons.length}

                </p>

              </div>

              {/* Buttons */}

              <div className="flex gap-4 mt-8">

                <button
                  disabled={currentLesson === 0}
                  onClick={() => setCurrentLesson(currentLesson - 1)}
                  className="bg-slate-700 px-6 py-3 rounded-lg text-white disabled:opacity-40"
                >
                  Previous
                </button>

                <button
                  disabled={currentLesson === lessons.length - 1}
                  onClick={() => setCurrentLesson(currentLesson + 1)}
                  className="bg-purple-600 px-6 py-3 rounded-lg text-white disabled:opacity-40"
                >
                  Next Lesson
                </button>

              </div>

            </div>

            {/* Playlist */}

            <div>

              <h2 className="text-2xl text-white mb-5">
                Playlist
              </h2>

              <div className="space-y-3">

                {lessons.map((lesson, index) => (

                  <div
                    key={index}
                    onClick={() => setCurrentLesson(index)}
                    className={`cursor-pointer p-4 rounded-lg flex items-center gap-3 transition ${
                      currentLesson === index
                        ? "bg-purple-600"
                        : "bg-slate-800 hover:bg-slate-700"
                    }`}
                  >

                    <FaPlayCircle className="text-white" />

                    <span className="text-white">

                      {lesson.title}

                    </span>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}