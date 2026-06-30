import { Routes, Route } from "react-router-dom";

// Authentication
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ForgotPassword from "../pages/auth/ForgotPassword";

// Dashboard
import Dashboard from "../pages/dashboard/Dashboard";

// Courses
import MyCourses from "../pages/courses/MyCourses";
import CourseDetails from "../pages/courses/CourseDetails";
import VideoLearning from "../pages/courses/VideoLearning";

// Live Classes
import LiveClasses from "../pages/live/LiveClasses";

// Assignments
import Assignments from "../pages/assignment/Assignments";

// Certificates
import Certificates from "../pages/certificate/Certificates";
import Certificate from "../pages/certificate/Certificate";

// Profile
import Profile from "../pages/profile/Profile";

// Settings
import Settings from "../pages/settings/Settings";

export default function AppRoutes() {
  return (
    <Routes>

      {/* Authentication */}
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      {/* Dashboard */}
      <Route path="/dashboard" element={<Dashboard />} />

      {/* Courses */}
      <Route path="/courses" element={<MyCourses />} />
      <Route
        path="/course-details/:id"
        element={<CourseDetails />}
      />
      <Route
        path="/video-learning/:id"
        element={<VideoLearning />}
      />

      {/* Live Classes */}
      <Route
        path="/live-classes"
        element={<LiveClasses />}
      />

      {/* Assignments */}
      <Route
        path="/assignments"
        element={<Assignments />}
      />

      {/* Certificates */}
      <Route
        path="/certificate"
        element={<Certificates />}
      />

      <Route
        path="/certificate/:id"
        element={<Certificate />}
      />

      {/* Profile */}
      <Route
        path="/profile"
        element={<Profile />}
      />

      {/* Settings */}
      <Route
        path="/settings"
        element={<Settings />}
      />

    </Routes>
  );
}