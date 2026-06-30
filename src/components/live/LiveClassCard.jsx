import {
  FaCalendarAlt,
  FaClock,
  FaUserGraduate,
} from "react-icons/fa";

export default function LiveClassCard({ liveClass }) {
  return (
    <div className="bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-purple-500/30 transition">

      <h2 className="text-2xl font-bold text-white">
        {liveClass.title}
      </h2>

      <div className="space-y-3 mt-5">

        <p className="flex items-center gap-2 text-gray-300">
          <FaUserGraduate className="text-purple-400" />
          {liveClass.instructor}
        </p>

        <p className="flex items-center gap-2 text-gray-300">
          <FaCalendarAlt className="text-green-400" />
          {liveClass.date}
        </p>

        <p className="flex items-center gap-2 text-gray-300">
          <FaClock className="text-yellow-400" />
          {liveClass.time}
        </p>

        <p className="text-gray-400">
          Duration : {liveClass.duration}
        </p>

      </div>

      <a
        href={liveClass.meetingLink}
        target="_blank"
        rel="noreferrer"
      >
        <button className="mt-6 w-full bg-purple-600 hover:bg-purple-700 py-3 rounded-lg text-white">
          Join Live Class
        </button>
      </a>

    </div>
  );
}