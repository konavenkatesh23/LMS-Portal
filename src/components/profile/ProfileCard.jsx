import {
  FaUserGraduate,
  FaEnvelope,
  FaPhone,
  FaUniversity,
  FaBook,
  FaAward,
} from "react-icons/fa";

export default function ProfileCard({ profile }) {
  return (
    <div className="bg-slate-800 rounded-xl p-8 shadow-lg">

      <div className="flex flex-col items-center">

        <img
          src={profile.profileImage}
          alt={profile.name}
          className="w-40 h-40 rounded-full border-4 border-purple-500 object-cover"
        />

        <h2 className="text-3xl font-bold text-white mt-5">
          {profile.name}
        </h2>

        <p className="text-gray-400">
          {profile.studentId}
        </p>

      </div>

      <div className="mt-8 space-y-4">

        <div className="flex items-center gap-3 text-white">
          <FaEnvelope className="text-purple-400" />
          {profile.email}
        </div>

        <div className="flex items-center gap-3 text-white">
          <FaPhone className="text-purple-400" />
          {profile.phone}
        </div>

        <div className="flex items-center gap-3 text-white">
          <FaUniversity className="text-purple-400" />
          {profile.university}
        </div>

        <div className="flex items-center gap-3 text-white">
          <FaUserGraduate className="text-purple-400" />
          {profile.department}
        </div>

      </div>

      <div className="grid grid-cols-3 gap-4 mt-10">

        <div className="bg-slate-700 rounded-lg p-4 text-center">

          <FaBook
            className="mx-auto text-purple-400"
            size={25}
          />

          <h3 className="text-2xl font-bold text-white mt-2">
            {profile.enrolledCourses}
          </h3>

          <p className="text-gray-400 text-sm">
            Courses
          </p>

        </div>

        <div className="bg-slate-700 rounded-lg p-4 text-center">

          <FaAward
            className="mx-auto text-yellow-400"
            size={25}
          />

          <h3 className="text-2xl font-bold text-white mt-2">
            {profile.certificates}
          </h3>

          <p className="text-gray-400 text-sm">
            Certificates
          </p>

        </div>

        <div className="bg-slate-700 rounded-lg p-4 text-center">

          <h3 className="text-2xl font-bold text-green-400">
            {profile.progress}%
          </h3>

          <p className="text-gray-400 text-sm">
            Progress
          </p>

        </div>

      </div>

    </div>
  );
}