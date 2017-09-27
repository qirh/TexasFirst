
//get all selects in the page
var select_elems = document.getElementsByTagName("select");

if(select_elems.length > 30) {
  //do nothing if there are more than 30 selects, safeguard so it doesn't loop 4evah
} else {
  //loop over selects
  for (var i = 0; i < select_elems.length; i++) {

    //options per select
    var option_array = Array.from(select_elems[i].options);

    if(option_array.length > 300) {
      //do nothing if there are more than 300 options, safeguard so it doesn't loop 4evah
    } else {
      //loop over options
      for (var j = 0; j < option_array.length; j++) {

        //if there exists a mention of Tejas
        if(option_array[j].text.toUpperCase() === "TX" || option_array[j].text.toUpperCase() === "TEXAS"){

          //remove it
          var text_removed = option_array[j].text;
          select_elems[i].options[j].remove();

          //create new option
          var option_elem = document.createElement("option"); //not sure if text and value should be the same
          option_elem.text = text_removed;
          option_elem.value = text_removed;

          //add it to the top
          select_elems[i].insertBefore(option_elem, select_elems[i].options[0])
          select_elems[i].selectedIndex = 0;
        }
      }
    }
  }
}
