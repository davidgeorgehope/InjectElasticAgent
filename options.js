// Saves options to chrome.storage
function saveOptions() {
  var elasticUrl = document.getElementById('elasticUrl').value;
  chrome.storage.local.set({
    elasticUrl: elasticUrl
  }, function() {
    // Update status to let user know options were saved.
    alert('Options saved.');
  });
}

// Restores select box and checkbox state using the preferences stored in chrome.storage.
function restoreOptions() {
  chrome.storage.local.get({
    elasticUrl: 'http://localhost:8200'
  }, function(items) {
    document.getElementById('elasticUrl').value = items.elasticUrl;
  });
}

document.addEventListener('DOMContentLoaded', function() {
  restoreOptions();
  document.getElementById('saveButton').addEventListener('click', saveOptions);
});
