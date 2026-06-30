import { useRef, useState } from "react";
import {
  FaCalendarAlt,
  FaUpload,
  FaEye,
  FaTrash,
} from "react-icons/fa";

export default function AssignmentCard({ assignment }) {
  const inputRef = useRef(null);

  const storageKey = `assignment-${assignment.id}`;

  // Load saved file from localStorage
  const [file, setFile] = useState(() => {
    const saved = localStorage.getItem(storageKey);
    return saved ? JSON.parse(saved) : null;
  });

  const handleUpload = (e) => {
    const selectedFile = e.target.files[0];

    if (!selectedFile) return;

    const reader = new FileReader();

    reader.onload = () => {
      const uploadedFile = {
        name: selectedFile.name,
        type: selectedFile.type,
        data: reader.result,
      };

      setFile(uploadedFile);

      localStorage.setItem(
        storageKey,
        JSON.stringify(uploadedFile)
      );
    };

    reader.readAsDataURL(selectedFile);
  };

  const handleView = () => {
    if (!file) return;

    window.open(file.data, "_blank");
  };

  const handleDelete = () => {
    localStorage.removeItem(storageKey);
    setFile(null);

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <div className="bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-purple-500/20 transition">

      <h2 className="text-xl font-bold text-white">
        {assignment.title}
      </h2>

      <p className="text-gray-400 mt-2">
        Course : {assignment.course}
      </p>

      <p className="flex items-center gap-2 mt-3 text-gray-300">
        <FaCalendarAlt />
        {assignment.dueDate}
      </p>

      <div className="mt-4">
        <span
          className={`px-3 py-1 rounded-full text-white text-sm ${
            file
              ? "bg-green-600"
              : "bg-yellow-500"
          }`}
        >
          {file ? "Submitted" : "Pending"}
        </span>
      </div>

      {file && (
        <div className="mt-4">
          <p className="text-green-400 text-sm break-all">
            📄 {file.name}
          </p>
        </div>
      )}

      <input
        ref={inputRef}
        type="file"
        className="hidden"
        onChange={handleUpload}
      />

      <div className="grid grid-cols-3 gap-3 mt-6">

        <button
          onClick={() => inputRef.current.click()}
          className="bg-purple-600 hover:bg-purple-700 py-2 rounded-lg text-white flex items-center justify-center gap-2 transition"
        >
          <FaUpload />
          Upload
        </button>

        <button
          onClick={handleView}
          disabled={!file}
          className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 py-2 rounded-lg text-white flex items-center justify-center gap-2 transition"
        >
          <FaEye />
          View
        </button>

        <button
          onClick={handleDelete}
          disabled={!file}
          className="bg-red-600 hover:bg-red-700 disabled:bg-gray-600 py-2 rounded-lg text-white flex items-center justify-center gap-2 transition"
        >
          <FaTrash />
          Delete
        </button>

      </div>

    </div>
  );
}