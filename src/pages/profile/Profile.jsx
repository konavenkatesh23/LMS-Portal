import { useState } from "react";

import Sidebar from "../../components/layout/Sidebar";
import Navbar from "../../components/layout/Navbar";
import ProfileCard from "../../components/profile/ProfileCard";

import profileData from "../../data/profile";

export default function Profile() {
  const [profile, setProfile] = useState(profileData);

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    alert("Profile Updated Successfully!");
  };

  return (
    <div className="flex bg-slate-900 min-h-screen">

      <Sidebar />

      <div className="flex-1">

        <Navbar />

        <div className="p-8">

          <h1 className="text-4xl font-bold text-white mb-8">
            My Profile
          </h1>

          <div className="grid lg:grid-cols-3 gap-8">

            {/* Left */}

            <div>
              <ProfileCard profile={profile} />
            </div>

            {/* Right */}

            <div className="lg:col-span-2">

              <div className="bg-slate-800 rounded-xl p-8 shadow-lg">

                <h2 className="text-2xl font-bold text-white mb-6">
                  Edit Profile
                </h2>

                <div className="grid md:grid-cols-2 gap-6">

                  <div>
                    <label className="text-gray-300">
                      Full Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={profile.name}
                      onChange={handleChange}
                      className="w-full mt-2 p-3 rounded-lg bg-slate-700 text-white outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-gray-300">
                      Student ID
                    </label>

                    <input
                      type="text"
                      value={profile.studentId}
                      disabled
                      className="w-full mt-2 p-3 rounded-lg bg-slate-700 text-gray-400"
                    />
                  </div>

                  <div>
                    <label className="text-gray-300">
                      Email
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={profile.email}
                      onChange={handleChange}
                      className="w-full mt-2 p-3 rounded-lg bg-slate-700 text-white outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-gray-300">
                      Phone
                    </label>

                    <input
                      type="text"
                      name="phone"
                      value={profile.phone}
                      onChange={handleChange}
                      className="w-full mt-2 p-3 rounded-lg bg-slate-700 text-white outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-gray-300">
                      University
                    </label>

                    <input
                      type="text"
                      name="university"
                      value={profile.university}
                      onChange={handleChange}
                      className="w-full mt-2 p-3 rounded-lg bg-slate-700 text-white outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-gray-300">
                      Department
                    </label>

                    <input
                      type="text"
                      name="department"
                      value={profile.department}
                      onChange={handleChange}
                      className="w-full mt-2 p-3 rounded-lg bg-slate-700 text-white outline-none"
                    />
                  </div>

                </div>

                <button
                  onClick={handleSave}
                  className="mt-8 bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-lg text-white"
                >
                  Save Changes
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}