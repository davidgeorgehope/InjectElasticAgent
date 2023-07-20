chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  // Get the color from storage
  chrome.storage.local.get({
    backgroundColor: 'red'
  }, function(items) {
    // Inject code into current tab
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      function: function(params) {
        // Change background color
        elasticApm.init({
          serviceName: 'TEST',
          serverUrl: params.backgroundColor,
        })
      },
      args: [items]
    });
  });
});
