import { useState } from "react";

import Sidebar from "../../components/layout/Sidebar";
import Navbar from "../../components/layout/Navbar";

import CertificateCard from "../../components/certificate/CertificateCard";

import certificates from "../../data/certificates";

export default function Certificates() {

  const [search, setSearch] = useState("");

  const filteredCertificates = certificates.filter((certificate) =>
    certificate.course
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="flex bg-slate-900 min-h-screen">

      <Sidebar />

      <div className="flex-1">

        <Navbar />

        <div className="p-8">

          <h1 className="text-5xl font-bold text-white mb-8">

            Certificates

          </h1>

          <input
            type="text"
            placeholder="Search Certificate..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-slate-800 text-white p-4 rounded-xl mb-8 outline-none"
          />

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">

            {filteredCertificates.map((certificate) => (

              <CertificateCard
                key={certificate.id}
                certificate={certificate}
              />

            ))}

          </div>

        </div>

      </div>

    </div>
  );
}