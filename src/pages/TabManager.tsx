import React, { useEffect, useState } from "react";

const TabManager: React.FC = () => {
    const [tabs, setTabs] = useState<chrome.tabs.Tab[]>([]);

    useEffect(() => {
        chrome.tabs.query({}, (result) => {
            setTabs(result);
        });
    }, []);

    const closeTab = (id: number | undefined) => {
        if (id) {
            chrome.tabs.remove(id);
            setTabs(tabs.filter((tab) => tab.id !== id));
        }
    };

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold">Tab Manager</h1>
            <ul className="mt-4 space-y-2">
                {tabs.map((tab) => (
                    <li
                        key={tab.id}
                        className="p-2 bg-gray-100 rounded shadow flex justify-between items-center"
                    >
                        <span className="truncate">{tab.title || tab.url}</span>
                        <button
                            onClick={() => closeTab(tab.id)}
                            className="px-2 py-1 bg-red-500 text-white rounded"
                        >
                            Close
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TabManager;