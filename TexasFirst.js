console.log("1");
var optionElems = document.getElementsByTagName("option");
var optionArray = Array.from(optionElems);
/*
var count = 0;
for (let i = 0; i < optionArray.length; i++) {
  if (optionArray[i].text.toUpperCase() === "TX" || optionArray[i].text.toUpperCase() === "TEXAS") {
    var text = optionArray[i-count].text;
    optionElems[i-count].remove();
    optionElems.prepend('<option value="i-came-first">Hey!</option>');
    console.log((i-count) + " -- " + text);
    console.log(optionElems);
    count++;
    console.log(optionElems[0].innerHTML);
  }
}
*/

        var sel = document.getElementsByTagName("select");

        for (var x = 0; x < sel.length; x++) {

           var opt = document.createElement("option");
           opt.text = 'bla...';
           opt.value = 'Please Select';

           //prepend in select box
           sel[x].insertBefore(opt, sel[x].options[0])
           sel[x].selectedIndex = 0;

        }
