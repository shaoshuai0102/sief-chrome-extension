// Saves options to chrome.storage
function save_options() {
  var server = document.getElementById('server').value;
  chrome.storage.sync.set({
    server: server
  }, function () {
    $('#saved-notice').fadeIn(200, function() {
      var that = this;
      setTimeout(function() {
        $(that).fadeOut(1000);
      }, 300);
    });
  });
}

function restore_options() {
  chrome.storage.sync.get({
    server: 'ws://127.0.0.1:3000/'
  }, function (items) {
    document.getElementById('server').value = items.server;
  });
}
document.addEventListener('DOMContentLoaded', function() {
  restore_options();
  document.getElementById('save-btn').addEventListener('click', save_options);
  document.getElementById('cancel-btn').addEventListener('click', restore_options);
});
