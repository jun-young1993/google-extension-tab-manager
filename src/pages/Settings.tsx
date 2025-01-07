import { useState, useEffect } from "react";

const Settings = () => {
  const [autoCloseTime, setAutoCloseTime] = useState<string>("");
  const [theme, setTheme] = useState<string>("light");

  // 설정 저장
  const saveSettings = () => {
    chrome.storage.sync.set({ autoCloseTime, theme }, () => {
      alert("Settings saved!");
    });
  };

  // 설정 불러오기
  useEffect(() => {
    chrome.storage.sync.get(["autoCloseTime", "theme"], (settings) => {
      if (settings.autoCloseTime) setAutoCloseTime(settings.autoCloseTime);
      if (settings.theme) setTheme(settings.theme);
    });
  }, []);

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
      <h1 className="text-xl font-bold text-blue-500 mb-4">Extension Settings</h1>

      {/* Auto Close Time */}
      <div>
        <label htmlFor="auto-close-time" className="block text-sm font-medium text-gray-700">
          Auto Close Time (minutes)
        </label>
        <input
          type="number"
          id="auto-close-time"
          value={autoCloseTime}
          onChange={(e) => setAutoCloseTime(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter time in minutes"
        />
      </div>

      {/* Theme */}
      <div className="mt-4">
        <label htmlFor="theme" className="block text-sm font-medium text-gray-700">
          Theme
        </label>
        <select
          id="theme"
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>

      {/* Save Button */}
      <div className="mt-6">
        <button
          onClick={saveSettings}
          className="w-full bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
        >
          Save Settings
        </button>
      </div>
    </div>
  );
};

export default Settings;
