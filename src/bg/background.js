

// List of settings
// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });


// example of using a message handler from the inject scripts
chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
  	chrome.pageAction.show(sender.tab.id);
    sendResponse();
  });

chrome.browserAction.onClicked.addListener(
  function(activeTab) {
    // Initial page
    var startingPage = 'src/index.html';
    chrome.tabs.create({'url': chrome.extension.getURL(startingPage)}, function(tab) {
      console.log("App opened");
    });
});