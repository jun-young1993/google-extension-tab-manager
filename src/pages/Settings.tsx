import React from "react";

const Settings: React.FC = () => {
    const openTabManager = () => {
        chrome.runtime.sendMessage({ action: "openTabManager" });
    };

    return (
        <div className="p-4">
            <h1 className="text-lg font-bold">Settings</h1>
            <button
                onClick={openTabManager}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
            >
                Open Tab Manager
            </button>
        </div>
    );
};

export default Settings;