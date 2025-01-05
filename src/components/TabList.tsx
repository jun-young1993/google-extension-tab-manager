import React from 'react';

interface TabListProps {
    tabs: chrome.tabs.Tab[];
}

const TabList: React.FC<TabListProps> = ({ tabs }) => {
    return (
        <ul className="space-y-2">
            {tabs.map((tab) => (
                <li
                    key={tab.id}
                    className="p-2 bg-white shadow rounded flex justify-between items-center"
                >
                    <span className="truncate">{tab.title || tab.url}</span>
                    <button
                        className="text-red-500"
                        onClick={() => tab.id && chrome.tabs.remove(tab.id)}
                    >
                        Close
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default TabList;