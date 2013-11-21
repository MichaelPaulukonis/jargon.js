jargon.js
=========

Based on ShinyToyLabs'  [Jargon Generator](http://shinytoylabs.com/jargon/).

And... extended a bit. Instead of being purpose-built for one set of texts, it's more generic.<br/>
Which should be demonstated in the two sample files.

The core engine was originally planned to work in both node.js and the browser.<br>
Extended elements are hard-wired to node, as they use `require`.

The mixed-mode approach led to some funky-code, and since the core has it's own `require` for `seed-random`, I'm going to look into a jake-build task with browserify.

## Testing
Tests using [vows](http://vowsjs.org/) are found in `/tests`.


## Examples and usage
Templates to match original output are found in `jargon.original.js`.

Templates and code to match the output of [TRANS.MISSION \[A.DIALOGUE\]](http://luckysoap.com/generations/transmission.html) are found in `jargon.transmissions.js`.


## see also
This [nlp-language](http://www.playchilla.com/a-programming-language-for-natural-language-generation) includes a sample that works something like what jargon is doing. More programatically. And in Java. And requiring a large back-end database of words. Which is a standard DB, and isn't such a bad thing.

* https://github.com/MichaelPaulukonis/NaNoGenMo.yawp
* http://www.xradiograph.com/WordSalad/WritingMachines


## text templating
* http://stackoverflow.com/questions/4049129/creating-a-simple-scripting-language-in-c-sharp
* http://stackoverflow.com/questions/3215010/howto-c-sharp-string-to-sql-full-text-catalog-search/3215216#3215216

* http://www.schneertz.com/rmutt/
* http://herbert.the-little-red-haired-girl.org/en/dada/index.html
* http://dev.null.org/dadaengine/

