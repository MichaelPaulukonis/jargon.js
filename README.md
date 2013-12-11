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


## Inspiration - `transmissions` and other replacements
In addition to the single-sentence examples of [ShinyToyLabs' Jargon Generator](http://shinytoylabs.com/jargon/), I saw that the modified engine could work on the below.

[TRANSMISSIONS](http://luckysoap.com/generations/transmission.html), and its javascript-source [The Two](http://nickm.com/poems/the_two.html) (I know nothing of the Python antecedent, save that it was in Python, and anteceded), are pretty simple.

They have a set of sentences (templates) that contain place-holder callouts that select a random word from a specific set.

If anything, this is a cruder version of the code seen in the [Jargon Generator](http://shinytoylabs.com/jargon/) - save that jargon generates only one sentence at a time, randomly selected from a list of sentence-templates.

Not that ''crude'' should be taken negatively -- _TRANSMISSIONS_ and _The Two_ were written for specific purposes. Their notes indicate that the coding and recoding was part of their translation-transmission from use-to-use. I have a tendency to fetishize the code and better it, at the expense of spending more time thinking about the output. In both of these cases, the code serves the output exactly as the creators wanted it to - not the way ''I'' want it to, but I am not the creator. And the end-results certainly justify the means.

However, both _TRANSMISSIONS_ and _The Two_ could be re-written using my enhanced jargon-engine (which is inappropriately named. It's a sentence generator, with the default template and word-lists from the original use as a "Hollywood jargon generator").
Specific sentences would be rewritten as template calls, and new word-lists added.


## others
[GORGE](http://luckysoap.com/generations/gorge.html) based on [Taroko Gorge](http://nickm.com/poems/taroko_gorge.html)

Actually, looking at the flow of output, I could almost see something lasting for 50K+ words. With the right set up inputs and setup.....


## see also
This [nlp-language](http://www.playchilla.com/a-programming-language-for-natural-language-generation) includes a sample that works something like what jargon is doing. More programatically. And in Java. And requiring a large back-end database of words. Which is a standard DB, and isn't such a bad thing.

* https://github.com/MichaelPaulukonis/NaNoGenMo.yawp
* http://www.xradiograph.com/WordSalad/WritingMachines
* [The Two](http://nickm.com/poems/the_two.html)
 * [some notes](http://luckysoap.com/lapsuslinguae/2012/03/trans-mission-a-dialogue/)
* [TRANS.MISSION \[A.DIALOGUE\]](http://luckysoap.com/generations/transmission.html) adapted from code for The Two
 * [translations of TRANS.MISSION](http://luckysoap.com/lapsuslinguae/tag/transmediation/)


## text templating
* http://stackoverflow.com/questions/4049129/creating-a-simple-scripting-language-in-c-sharp
* http://stackoverflow.com/questions/3215010/howto-c-sharp-string-to-sql-full-text-catalog-search/3215216#3215216
* http://www.schneertz.com/rmutt/
* http://herbert.the-little-red-haired-girl.org/en/dada/index.html
* http://dev.null.org/dadaengine/

