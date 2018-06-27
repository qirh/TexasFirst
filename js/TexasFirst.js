getOption(runScript);

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

function runScript(state) {
  console.log("runScript -- " + state);
	if (state) {
    //get all selects in the page
    var select_elems = document.getElementsByTagName("select");

    if(select_elems.length > 30) {
      //do nothing if there are more than 30 selects, safeguard so it doesn't loop infinitely
    }
    else {
      //loop over selects
      for (var i = 0; i < select_elems.length; i++) {

        //options per select
        var option_array = Array.from(select_elems[i].options);

        if(option_array.length > 300) {
          //do nothing if there are more than 300 options, safeguard so it doesn't loop infinitely
        }
        else {
          //loop over options
          for (var j = 0; j < option_array.length; j++) {

            //if there exists a mention of Tejas
            if(option_array[j].text.toUpperCase() === "TX" || option_array[j].text.toUpperCase() === "TEXAS"){

              //remove it
              var text_removed = option_array[j].text;
              var value_removed = option_array[j].value;
              select_elems[i].options[j].remove();

              //create new option
              var option_elem = document.createElement("option"); //Thanks f9ooly <3
              option_elem.text = text_removed;
              option_elem.value = value_removed;

              //add it to the top
              select_elems[i].insertBefore(option_elem, select_elems[i].options[0])
              select_elems[i].selectedIndex = 0;
            }
          }
        }
      }
    }
  }
}
