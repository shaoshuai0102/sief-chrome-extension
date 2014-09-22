var logs = [];
var socket;

chrome.storage.sync.get({
  server: 'ws://127.0.0.1:3000/'
}, function (items) {
  openConnection(items.server);
});

function openConnection (server) {
  socket = io(server, {'force new connection':true});
  socket.on('connect', function(){
    console.log('connection established');
    socket.on('log', function(data){
      console.log('log', data);
      logs.push(data);
      data.index = logs.length - 1;
      chrome.runtime.sendMessage(null, data);

    });
    socket.on('disconnect', function(){
      console.log('disconnectted');
    });
  });
}

function closeConnection() {
  socket.disconnect();
}

chrome.storage.onChanged.addListener(function(changes, namespace) {
  var serverObj = changes['server'];
  if (serverObj) {
    console.log('server changed: from ' + serverObj.oldValue + ' to ' + serverObj.newValue);
    closeConnection();
    openConnection(serverObj.newValue);
  }
});

function getLogs () {
  return logs;
}