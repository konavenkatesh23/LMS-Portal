import { useParams, Link } from "react-router-dom";
import Sidebar from "../../components/layout/Sidebar";
import Navbar from "../../components/layout/Navbar";
import certificates from "../../data/certificates";

import {
  FaCertificate,
  FaDownload,
  FaArrowLeft,
} from "react-icons/fa";

import jsPDF from "jspdf";

export default function Certificate() {
  const { id } = useParams();

  const certificate = certificates.find(
    (item) => item.id === Number(id)
  );

  if (!certificate) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white text-3xl">
        Certificate Not Found
      </div>
    );
  }

  const downloadCertificate = () => {
    const pdf = new jsPDF({
      orientation: "landscape",
      unit: "mm",
      format: "a4",
    });

    // Border
    pdf.setDrawColor(90, 0, 180);
    pdf.setLineWidth(2);
    pdf.rect(10, 10, 277, 190);

    // Title
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(28);
    pdf.setTextColor(25, 25, 112);

    pdf.text(
      "CERTIFICATE OF COMPLETION",
      148,
      35,
      { align: "center" }
    );

    // Subtitle
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(18);
    pdf.setTextColor(80);

    pdf.text(
      "This Certificate is Proudly Presented To",
      148,
      55,
      { align: "center" }
    );

    // Student Name
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(30);
    pdf.setTextColor(120, 0, 255);

    pdf.text(
      certificate.student,
      148,
      78,
      { align: "center" }
    );

    // Description
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(18);
    pdf.setTextColor(40);

    pdf.text(
      "For Successfully Completing",
      148,
      98,
      { align: "center" }
    );

    // Course
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(24);
    pdf.setTextColor(0, 102, 255);

    pdf.text(
      certificate.course,
      148,
      118,
      { align: "center" }
    );

    // Details
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(14);
    pdf.setTextColor(0);

    pdf.text(
      `Certificate ID : ${certificate.certificateId}`,
      35,
      155
    );

    pdf.text(
      `Completion Date : ${certificate.completedOn}`,
      180,
      155
    );

    // Signature Lines
    pdf.line(35, 175, 90, 175);
    pdf.text("Instructor", 52, 183);

    pdf.line(200, 175, 255, 175);
    pdf.text("Director", 220, 183);

    // Save
    pdf.save(
      `${certificate.course.replace(/\s+/g, "_")}.pdf`
    );
  };

  return (
    <div className="flex bg-slate-900 min-h-screen">

      <Sidebar />

      <div className="flex-1">

        <Navbar />

        <div className="p-8">

          <Link
            to="/certificate"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 mb-6"
          >
            <FaArrowLeft />
            Back to Certificates
          </Link>

          <div className="bg-white rounded-2xl shadow-2xl p-12 text-center">

            <FaCertificate
              size={90}
              className="mx-auto text-yellow-500"
            />

            <h1 className="text-5xl font-bold mt-6 text-gray-800">
              CERTIFICATE OF COMPLETION
            </h1>

            <p className="mt-8 text-2xl text-gray-600">
              This Certificate is Proudly Presented To
            </p>

            <h2 className="text-5xl font-bold text-purple-700 mt-5">
              {certificate.student}
            </h2>

            <p className="mt-8 text-xl text-gray-600">
              For Successfully Completing
            </p>

            <h3 className="text-4xl font-bold text-blue-700 mt-4">
              {certificate.course}
            </h3>

            <div className="grid grid-cols-2 gap-10 mt-14">

              <div>

                <p className="text-gray-500">
                  Certificate ID
                </p>

                <h3 className="font-bold text-xl mt-2">
                  {certificate.certificateId}
                </h3>

              </div>

              <div>

                <p className="text-gray-500">
                  Completion Date
                </p>

                <h3 className="font-bold text-xl mt-2">
                  {certificate.completedOn}
                </h3>

              </div>

            </div>

            <div className="flex justify-between mt-20">

              <div>

                <div className="border-t-2 border-black w-56"></div>

                <p className="mt-2 font-semibold">
                  Instructor
                </p>

              </div>

              <div>

                <div className="border-t-2 border-black w-56"></div>

                <p className="mt-2 font-semibold">
                  LMS Director
                </p>

              </div>

            </div>

          </div>

          <div className="flex justify-center mt-8">

            <button
              onClick={downloadCertificate}
              className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-xl text-white flex items-center gap-3"
            >
              <FaDownload />
              Download Certificate
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}