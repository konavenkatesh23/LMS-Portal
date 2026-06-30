import {
  FaHome,
  FaBook,
  FaVideo,
  FaClipboardList,
  FaCertificate,
  FaUser,
  FaCog,
  FaBroadcastTower,
} from "react-icons/fa";

import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  const linkClass = (path) =>
    `flex items-center gap-3 px-4 py-3 rounded-lg transition ${
      location.pathname === path
        ? "bg-purple-600 text-white"
        : "hover:bg-slate-700 hover:text-purple-400"
    }`;

  return (
    <div className="w-64 bg-slate-800 min-h-screen text-white p-5 shadow-lg">

      {/* Logo */}
      <h1 className="text-3xl font-bold text-purple-400 mb-10">
        LMS
      </h1>

      {/* Navigation */}
      <nav className="space-y-2">

        <Link
          to="/dashboard"
          className={linkClass("/dashboard")}
        >
          <FaHome />
          Dashboard
        </Link>

        <Link
          to="/courses"
          className={linkClass("/courses")}
        >
          <FaBook />
          My Courses
        </Link>

        <Link
          to="/live-classes"
          className={linkClass("/live-classes")}
        >
          <FaBroadcastTower />
          Live Classes
        </Link>

        {/* Video Learning opens only from Course Details */}
        <div className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-500 cursor-not-allowed">
          <FaVideo />
          Video Learning
        </div>

        <Link
          to="/assignments"
          className={linkClass("/assignments")}
        >
          <FaClipboardList />
          Assignments
        </Link>

        <Link
          to="/certificate"
          className={linkClass("/certificate")}
        >
          <FaCertificate />
          Certificates
        </Link>

        <Link
          to="/profile"
          className={linkClass("/profile")}
        >
          <FaUser />
          Profile
        </Link>

        <Link
          to="/settings"
          className={linkClass("/settings")}
        >
          <FaCog />
          Settings
        </Link>

      </nav>

    </div>
  );
}