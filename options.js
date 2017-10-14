$(document).ready(function() {
  $('#texasCheckID').bootstrapSwitch();
  $('#texasCheckID').on('switchChange.bootstrapSwitch', function () {
      loadOption();
  });
  getOption(loadOption);
});

var defaultState = "True";

function getOption(callback) {
	var state;

  chrome.storage.sync.get('isOn', function (obj) {
        console.log(obj.isOn);
        state = obj.isOn;
        callback(state);
    });

}
function loadOption(state) {
  console.log("here1 -- " + state);
	if (state == undefined ) {
		state = defaultState;
	}
  console.log("here2 -- " + state);
	if (state === "True") {
    $("#texasCheckName").bootstrapSwitch('state', true);
  }
  else {
    $("#texasCheckName").bootstrapSwitch('state', false);
  }
}

function saveOptions(state) {
  chrome.storage.sync.set({'isOn': state}, function() {
          // Notify that we saved.
          message('Settings saved');
  });

}
function eraseOptions() {
}
