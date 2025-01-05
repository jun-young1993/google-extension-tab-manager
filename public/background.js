chrome.runtime.onInstalled.addListener(() => {
    console.log('Google Extension Tab Manager installed');
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "openTabManager") {
        chrome.windows.create({
            url: chrome.runtime.getURL("tab-manager.html"),
            type: "popup",
            width: 1000,
            height: 700
        });
    }
});