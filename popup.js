function getCurrentTabUrl(callback) {
  var queryInfo = {
    active: true,
    currentWindow: true
  };
  chrome.tabs.query(queryInfo, (tabs) => {
    var tab = tabs[0];
    var url = tab.url;
    console.assert(typeof url == 'string', 'tab.url should be a string');
    callback(url);
  });
}

function clicked() {
  console.log("2");
  chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript({
      code: 'console.log("3");var optionArray = document.getElementsByTagName("option");console.log(optionArray);'
    });
  });
}


$(document).ready(function() {
  $('#texasCheckID').bootstrapSwitch();

  $('#texasCheckID').on('switchChange.bootstrapSwitch', function(event, state) {
    console.log("1");
    clicked();
  });
});
