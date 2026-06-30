import { useState } from "react";

import Sidebar from "../../components/layout/Sidebar";
import Navbar from "../../components/layout/Navbar";

import SettingsCard from "../../components/settings/SettingsCard";

import defaultSettings from "../../data/settings";

export default function Settings() {
  const [settings, setSettings] = useState(defaultSettings);

  const handleToggle = (key) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleLanguage = (e) => {
    setSettings((prev) => ({
      ...prev,
      language: e.target.value,
    }));
  };

  const handleSave = () => {
    alert("Settings Saved Successfully!");
  };

  return (
    <div className="flex bg-slate-900 min-h-screen">

      <Sidebar />

      <div className="flex-1">

        <Navbar />

        <div className="p-8">

          <h1 className="text-4xl font-bold text-white mb-8">
            Settings
          </h1>

          <SettingsCard
            settings={settings}
            handleToggle={handleToggle}
            handleLanguage={handleLanguage}
            handleSave={handleSave}
          />

        </div>

      </div>

    </div>
  );
}