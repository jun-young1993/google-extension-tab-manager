// chrome.tabs.onUpdated.addListener(function (_, changeInfo) {
//   if (changeInfo.status === 'complete') {
  
//   }
// });
chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
    if (message.action === "getTabs") {
      chrome.tabs.query({}, (tabs) => {
        sendResponse(tabs);
      });
      return true; // 메시지 대기 상태 유지
    }
  
    if (message.action === "closeTab") {
      chrome.tabs.remove(message.tabId, () => {
        sendResponse({ success: true });
      });
      return true; // 메시지 대기 상태 유지
    }
});

chrome.runtime.onInstalled.addListener(() => {
  chrome.scripting
    .registerContentScripts([
      {
        id: "session-script",
        js: ["content.js"],
        css: ["tailwind.css"],
        persistAcrossSessions: false,
        matches: ["<all_urls>"], // 모든 URL에 적용
        runAt: "document_idle", // 돔 완전히 실행후를 보장
        // runAt: "document_start",
      },
    ])
    .then(() => console.log("Content Script registered successfully"))
    .catch((err) => console.error("Error registering content script", err));
});


