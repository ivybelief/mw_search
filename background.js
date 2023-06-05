chrome.runtime.onInstalled.addListener(function() {
  chrome.contextMenus.create({
    "id": "search",
    "title": "Search in Merriam-Webster",
    "contexts": ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId == "search") {
    var highlightedText = info.selectionText;
    var searchUrl = 'https://www.merriam-webster.com/dictionary/' + encodeURIComponent(highlightedText);
    chrome.tabs.create({ url: searchUrl });
  }
});
