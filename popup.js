
function getCurrentTabUrl(callback) {
  console.log("getCurrentTabUrl");
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

function changeBackgroundColor(color) {
  console.log("changeBackgroundColor");
  var script = 'document.body.style.backgroundColor="' + color + '";';
  chrome.tabs.executeScript({
    code: script
  });
}

function getSavedBackgroundColor(url, callback) {
  console.log("getSavedBackgroundColor");
  chrome.storage.sync.get(url, (items) => {
    callback(chrome.runtime.lastError ? null : items[url]);
  });
}

function saveBackgroundColor(url, isOn) {
  console.log("saveBackgroundColor");
  var items = {};
  items[url] = isOn;
  chrome.storage.sync.set(items);
}
$(document).ready(function() {
    $('#texasCheckID').bootstrapSwitch();
});

document.addEventListener('DOMContentLoaded', () => {
  console.log("addEventListener");
  getCurrentTabUrl((url) => {
    var switchElem = document.getElementById('texasCheckID');

    console.log("getCurrentTabUrl, url = " + url);

    switchElem.addEventListener('change', () => {
      //changeBackgroundColor(switchElem.);
      //saveBackgroundColor(url, drop);
    });
  });
});
