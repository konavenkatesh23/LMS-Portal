export default function SettingsCard({
  settings,
  handleToggle,
  handleLanguage,
  handleSave,
}) {
  return (
    <div className="bg-slate-800 rounded-xl p-8 shadow-lg">

      <h2 className="text-3xl font-bold text-white mb-8">
        Settings
      </h2>

      {/* Dark Mode */}

      <div className="flex justify-between items-center mb-6">

        <span className="text-white text-lg">
          Dark Mode
        </span>

        <input
          type="checkbox"
          checked={settings.darkMode}
          onChange={() => handleToggle("darkMode")}
          className="w-5 h-5"
        />

      </div>

      {/* Email */}

      <div className="flex justify-between items-center mb-6">

        <span className="text-white text-lg">
          Email Notifications
        </span>

        <input
          type="checkbox"
          checked={settings.emailNotifications}
          onChange={() =>
            handleToggle("emailNotifications")
          }
          className="w-5 h-5"
        />

      </div>

      {/* Push */}

      <div className="flex justify-between items-center mb-6">

        <span className="text-white text-lg">
          Push Notifications
        </span>

        <input
          type="checkbox"
          checked={settings.pushNotifications}
          onChange={() =>
            handleToggle("pushNotifications")
          }
          className="w-5 h-5"
        />

      </div>

      {/* Language */}

      <div className="mb-8">

        <label className="text-white text-lg">
          Language
        </label>

        <select
          value={settings.language}
          onChange={handleLanguage}
          className="w-full mt-3 bg-slate-700 text-white p-3 rounded-lg"
        >

          <option>English</option>
          <option>Telugu</option>
          <option>Hindi</option>

        </select>

      </div>

      <button
        onClick={handleSave}
        className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-lg text-white w-full"
      >
        Save Settings
      </button>

    </div>
  );
}