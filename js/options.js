$(document).ready(function() {
  $('#texasCheckID').bootstrapSwitch();
  $('#texasCheckID').on('switchChange.bootstrapSwitch', function(event, state) {
    saveOptionToStorage(state);
    });
  getOptionFromStorage(setSwitchOption);
});

function setSwitchOption(state) {
	if (state)
    $("#texasCheckID").bootstrapSwitch('state', true);
  else
    $("#texasCheckID").bootstrapSwitch('state', false);
}

function saveOptionToStorage(state) {
  chrome.storage.sync.set({'isOn': state}, function() {
  });
}
