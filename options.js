console.log("2");

$(document).ready(function() {
  console.log("4");
  $('#texasCheckID').bootstrapSwitch();
  $('#texasCheckID').on('switchChange.bootstrapSwitch', function(event, state) {
    console.log("Event Handler");
    saveOption(state);
  });
  getOption(loadOption);
});
console.log("3");

function getOption(callback) {
  var defaultState = "true";
	var state;
  chrome.storage.sync.get('isOn', function (obj) {
        if(obj.isOn === undefined)
          state = defaultState
        else
          state = obj.isOn;
        callback(state);
  });
}
function loadOption(state) {
	if (state)
    $("#texasCheckID").bootstrapSwitch('state', true);
  else
    $("#texasCheckID").bootstrapSwitch('state', false);
}

function saveOption(state) {
  chrome.storage.sync.set({'isOn': state}, function() {
  });
}
