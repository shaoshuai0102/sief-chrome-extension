//var popupViewUrl = chrome.extension.getURL('popup.html');
//
//var views = chrome.extension.getViews();
//var popUpView;
//for (var i = 0; i < views.length; i++) {
//  var view = views[i];
//
//  // If this view has the right URL and hasn't been used yet...
//  if (view.location.href == popupViewUrl) {
//
//    console.log('view found ', view);
//    popUpView = view;
//    break;
//  }
//}

var logs = [];

var socket = io('ws://192.168.1.107:3000');
socket.on('connect', function(){
  console.log('connection established');
  socket.on('log', function(data){
    console.log('log', data);
    logs.push(data);
    data.index = logs.length - 1;
    chrome.runtime.sendMessage(null, data);

  });
  socket.on('disconnect', function(){});
});

function getLogs () {
  return logs;
}