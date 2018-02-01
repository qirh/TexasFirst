# ¡Texas First!
Texas First! Chrome extension [![MIT license](https://img.shields.io/badge/license-MIT-lightgrey.svg)](https://raw.githubusercontent.com/qirh/TexasFirst/master/LICENSE) [![Google Chrome](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Google_Chrome_icon_%28September_2014%29.svg/32px-Google_Chrome_icon_%28September_2014%29.svg.png)](https://chrome.google.com/webstore/detail/texas-first/cflpfjhdephkbknjgidjkcfhohbddlnh)

## Summary
  In picker menus: **Texas** & **TX** will load, in the place that only she deserves, at very top, #1  Nice for proud Texans and those of us ehm who are applying for jobs and hate scrolling down so much.

## How it works
  This is a pretty simple Chrome extension. Basically, it loops over all the option tags in the html page and if it detects any mention of "TX" or "Texas" it will first remove it from the list, then append it to the top. You can download it from the [chrome store](https://chrome.google.com/webstore/detail/texas-first/cflpfjhdephkbknjgidjkcfhohbddlnh)
  Uses [JQuery](https://jquery.com) to manipulate the DOM. And also uses [Bootstrap](https://getbootstrap.com), [Bootstrap-Switch](http://bootstrapswitch.com), [Bulma](http://bulma.io) and [Font Awesome](http://fontawesome.io) for the pop-up menu.

## Copyright info
  * Project forked from [here](https://developer.chrome.com/extensions/getstarted)
  * Texas flag icon from [here](http://www.iconarchive.com/show/american-states-icons-by-custom-icon-design/Texas-Flag-icon.html)
  * Inspiration came from [here](https://github.com/vpicone/SorryTennesee)

## Notes
### Things that do not work properly
  * Once I tried the Bulma (yes/no) button offline and it did not work. Need to re-produce!!

### Features to implement
  * Popup page
  * Options page:
    * Some text would be nice

### Before launching on the Chrome store
  * Ask someone to peer review the code
  * Have my test subjects (ehm) I mean friends try it on their computers.
