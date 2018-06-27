$(document).ready(function() {
  console.log("herere");
  $('#texasCheckID').bootstrapSwitch();
  $('#texasCheckID').on('switchChange.bootstrapSwitch', function(event, state) {
    console.log("callback1 -- " + state);
    saveOption(state);
  });
  $('#texasCheckID').on('switchChange.bootstrapSwitch', function(event, state) {
    console.log("callback2 -- " + state);
    runScript(state);
  });

  getOption(loadOption);
});
function loadOption(state) {
	if (state)
    $("#texasCheckID").bootstrapSwitch('state', true);
  else
    $("#texasCheckID").bootstrapSwitch('state', false);
}

function saveOption(state) {
  console.log("saveOption -- " + state);
  chrome.storage.sync.set({'isOn': state}, function() {
  });
}
