// Saves options to chrome.storage
function saveOptions() {
  var color = document.getElementById('color').value;
  chrome.storage.local.set({
    backgroundColor: color
  }, function() {
    // Update status to let user know options were saved.
    alert('Options saved.');
  });
}

// Restores select box and checkbox state using the preferences stored in chrome.storage.
function restoreOptions() {
  chrome.storage.local.get({
    backgroundColor: 'red'
  }, function(items) {
    document.getElementById('color').value = items.backgroundColor;
  });
}

document.addEventListener('DOMContentLoaded', function() {
  restoreOptions();
  document.getElementById('saveButton').addEventListener('click', saveOptions);
});
