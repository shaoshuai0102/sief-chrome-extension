//chrome.cookies.getAll({
//  domain: '.renren.com'
//}, function(cookies) {
//  console.log('cookies: ', cookies);
//});


var tbody;

function addRow(data) {
  if (!tbody) {
    tbody = $('table tbody');
  }

  var html = Handlebars.templates.row(data);
  tbody.append(html);
}

$(function() {
  chrome.runtime.getBackgroundPage(function(bgPage) {
    bgPage.getLogs().forEach(function (log) {
      addRow(log);
    });
  });
});


chrome.runtime.onMessage.addListener(function (log, sender) {
  console.log('new log recieved: ', log);
  if (log.categoryName && log.level) {
    addRow(log);
  }
});

$(function () {
  $("table").delegate(".login-btn", "click", function() {
    var index = $(this).parents('tr').attr('data-index');
    chrome.runtime.getBackgroundPage(function(bgPage) {
      var logs = bgPage.getLogs();
      var log = logs[index];
      var data = log.data[0];

      //data.referer = 'http://weibo.com/shaoshuai0102/home?wvr=5';

      Object.keys(data.cookiesData).forEach(function (name) {
        chrome.cookies.remove({
          url: data.referer,
          name: name
        }, function() {
          chrome.cookies.set({
            url: data.referer,
            name: name,
            value: data.cookiesData[name],
            domain: data.domain,
            path: '/',
            expirationDate: (new Date).getTime() + 60000 * 60 * 24
          });
        });

      });

      console.log('referer', data.referer);
      setTimeout(function() {
        chrome.tabs.create({
          url: data.referer
        }, function (tab) {
          console.log('tab: ', tab);
        });
      }, 100);


      console.log('click log: ', data.cookiesData, data.domain, data.referer);
    });
  });
});