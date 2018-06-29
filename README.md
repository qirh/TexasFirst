# ¡Texas First!
Texas First! Chrome extension [![MIT license](https://img.shields.io/badge/license-MIT-lightgrey.svg)](https://raw.githubusercontent.com/qirh/TexasFirst/master/LICENSE) <a href="https://chrome.google.com/webstore/detail/texas-first/cflpfjhdephkbknjgidjkcfhohbddlnh">
<img border="0" alt="Chrome Button" src="https://github.com/qirh/TexasFirst/blob/master/icons/Chrome-32.png?raw=true" width="24" height="24" target="_blank" rel="noopener noreferrer">
</a>



## Summary
  This is a simple Chrome extension that loops over all the option elements (dropdowns) in html pages and if it finds **TX** or **Texas**, it will append it to the top of the list.
  
  **How it works:** 
  * **Page Load:** the extension will look in storage for whether the user has set the extension to run or not. The default state is yes. 
  * **Popup/Options page:** 
    * Both pages are the same. The popup page can be accessed by pressing on the Texas flag and the options menu can be accessed either by right clicking or from the extensions page. 
    * When the user turns on or off the extension, it  will save that preference in storage and will query storage for the information everytime the page comes up.
    * The main JavaScript file listens for the changes in storage and will on the page whenever the user turns on the extension.
  
  Find the extension in the [Chrome store](https://chrome.google.com/webstore/detail/texas-first/cflpfjhdephkbknjgidjkcfhohbddlnh).
  
  
## Notes
  Please give it a try and let me know what you think, espically if you don't like it, I need feedback ha!

## Copyright info
  * Project forked from [here](https://developer.chrome.com/extensions/getstarted)
  * Texas flag icon from [here](http://www.iconarchive.com/show/american-states-icons-by-custom-icon-design/Texas-Flag-icon.html)
  * Inspiration came from [here](https://github.com/vpicone/SorryTennesee)
  * Uses [JQuery](https://jquery.com) to manipulate the DOM.
  * Also uses [Bootstrap](https://getbootstrap.com), [Bootstrap-Switch](http://bootstrapswitch.com), [Bulma](http://bulma.io) and [Font Awesome](http://fontawesome.io) for the pop-up html page.


