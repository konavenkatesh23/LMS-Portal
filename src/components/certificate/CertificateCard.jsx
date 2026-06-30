import {
  FaCertificate,
  FaEye,
  FaDownload,
} from "react-icons/fa";

import { Link } from "react-router-dom";

export default function CertificateCard({ certificate }) {
  return (
    <div className="bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-purple-500/30 transition duration-300">

      {/* Certificate Icon */}

      <div className="flex justify-center mb-5">
        <FaCertificate
          size={70}
          className="text-yellow-400"
        />
      </div>

      {/* Course Name */}

      <h2 className="text-2xl font-bold text-white text-center">
        {certificate.course}
      </h2>

      {/* Details */}

      <div className="mt-6 space-y-3">

        <p className="text-gray-300">
          <strong>Student:</strong> {certificate.student}
        </p>

        <p className="text-gray-300">
          <strong>Certificate ID:</strong>{" "}
          {certificate.certificateId}
        </p>

        <p className="text-gray-300">
          <strong>Completed:</strong>{" "}
          {certificate.completedOn}
        </p>

      </div>

      {/* Buttons */}

      <div className="grid grid-cols-2 gap-4 mt-8">

        {/* View */}

        <Link
          to={`/certificate/${certificate.id}`}
          className="bg-blue-600 hover:bg-blue-700 py-3 rounded-lg text-white flex justify-center items-center gap-2 transition"
        >
          <FaEye />
          View
        </Link>

        {/* Download */}

        <Link
          to={`/certificate/${certificate.id}`}
          className="bg-green-600 hover:bg-green-700 py-3 rounded-lg text-white flex justify-center items-center gap-2 transition"
        >
          <FaDownload />
          Download
        </Link>

      </div>

    </div>
  );
}