jargon.js
=========

Based on ShinyToyLabs'  [Jargon Generator](http://shinytoylabs.com/jargon/).

And... extended a bit. Instead of being purpose-built for one set of texts, it's more generic.<br/>
Which should be demonstated in the two sample files.

The core engine should work in both node.js and the browser.<br>
Extended elements are hard-wired to node, as they use `require`.

Templates to match original output are found in `jargon.original.js`.

Templates and code to match the output of [TRANS.MISSION \[A.DIALOGUE\]](http://luckysoap.com/generations/transmission.html) are found in `jargon.transmissions.js`.

Tests using [vows](http://vowsjs.org/) are found in `/tests`.

## see also
This [nlp-language](http://www.playchilla.com/a-programming-language-for-natural-language-generation) includes a sample that works something like what jargon is doing. More programatically. And in Java. And requiring a large back-end database of words. Which is a standard DB, and isn't such a bad thing.
