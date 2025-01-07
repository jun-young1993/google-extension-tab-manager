// src/components/TabManager.tsx
import { useEffect, useState } from "react";

const TabManager = () => {
  const [tabs, setTabs] = useState<chrome.tabs.Tab[]>([]); // 크롬의 Tab 타입 사용
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      chrome.runtime.sendMessage({ action: "getTabs" }, (response: chrome.tabs.Tab[]) => {
        setTabs(response);
      });
    }
  }, [isOpen]);

  const handleCloseTab = (tabId: number) => {
    chrome.runtime.sendMessage({ action: "closeTab", tabId });
    setTabs((prevTabs) => prevTabs.filter((tab) => tab.id !== tabId));
  };

  return (
    <div>
      {/* 버튼 */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-2 left-2 z-[9999] bg-blue-500 text-white rounded px-2 py-1 shadow-lg hover:bg-blue-600"
      >
        📂
      </button>

      {/* 탭 리스트 */}
      {isOpen && (
        <div className="fixed top-12 left-2 w-80 max-h-96 overflow-y-auto bg-white border border-gray-200 shadow-lg rounded p-4">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className="p-2 border-b border-gray-100 flex justify-between items-center"
            >
              <span className="truncate">{tab.title || tab.url}</span>
              <button
                onClick={() => handleCloseTab(tab.id!)}
                className="text-red-500 text-sm hover:text-red-700"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TabManager;
