$(document).ready(function() {
  $('#texasCheckID').bootstrapSwitch();
  $('#texasCheckID').on('switchChange.bootstrapSwitch', function(event, state) {
    saveOption(state);
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
  chrome.storage.sync.set({'isOn': state}, function() {
  });
}
