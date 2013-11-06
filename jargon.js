// adapted from code @ http://shinytoylabs.com/jargon/

// implements node-or-browser js pattern from http://caolanmcmahon.com/posts/writing_for_node_and_the_browser/
(function(exports) {

    // more parts-of-speech? per http://www.ling.upenn.edu/courses/Fall_2003/ling001/penn_treebank_pos.html
    var wordlists = {
        abbreviations: ["TCP", "HTTP", "SDD", "RAM", "GB", "CSS", "SSL", "AGP", "SQL", "FTP", "PCI", "AI", "ADP", "RSS", "XML", "EXE", "COM", "HDD", "THX", "SMTP", "SMS", "USB", "PNG"],
        adjectives: ["auxiliary", "primary", "back-end", "digital", "open-source", "virtual", "cross-platform", "redundant", "online", "haptic", "multi-byte", "bluetooth", "wireless", "1080p", "neural", "optical", "solid state", "mobile"],
        nouns: ["driver", "protocol", "bandwidth", "panel", "microchip", "program", "port", "card", "array", "interface", "system", "sensor", "firewall", "hard drive", "pixel", "alarm", "feed", "monitor", "application", "transmitter", "bus", "circuit", "capacitor", "matrix"],
        verbs: ["back up", "bypass", "hack", "override", "compress", "copy", "navigate", "index", "connect", "generate", "quantify", "calculate", "synthesize", "input", "transmit", "program", "reboot", "parse"],
        ingverbs: ["backing up", "bypassing", "hacking", "overriding", "compressing", "copying", "navigating", "indexing", "connecting", "generating", "quantifying", "calculating", "synthesizing", "transmitting", "programming", "parsing"]
    };

    // I'd like to see these reduced to a single element, where the place-hose {n} is the type
    // eg "If we {verb} the {noun}, we can get to the {abbreviaation} {noun} through the {adjective} {abbreviation} {noun}"
    var constructs = [
        {
            types: ["verb", "noun", "abbreviation", "noun", "adjective", "abbreviation", "noun"],
            structure: "If we {0} the {1}, we can get to the {2} {3} through the {4} {5} {6}!"
        },
        {
            types: ["verb", "adjective", "abbreviation", "noun"],
            structure: "We need to {0} the {1} {2} {3}!"
        },
        {
            types: ["verb", "abbreviation", "noun", "verb", "adjective", "noun"],
            structure: "Try to {0} the {1} {2}, maybe it will {3} the {4} {5}!"
        },
        {
            types: ["verb", "noun", "ingverb", "adjective", "abbreviation", "noun"],
            structure: "You can't {0} the {1} without {2} the {3} {4} {5}!"
        },
        {
            types: ["adjective", "abbreviation", "noun", "verb", "adjective", "noun"],
            structure: "Use the {0} {1} {2}, then you can {3} the {4} {5}!"
        },
        {
            types: ["abbreviation", "noun", "verb", "adjective", "noun", "verb", "abbreviation", "noun"],
            structure: "The {0} {1} is down, {2} the {3} {4} so we can {5} the {6} {7}!"
        },
        {
            types: ["ingverb", "noun", "verb", "adjective", "abbreviation", "noun"],
            structure: "{0} the {1} won't do anything, we need to {2} the {3} {4} {5}!"
        },
        {
            types: ["verb", "adjective", "abbreviation", "noun", "verb", "abbreviation", "noun"],
            structure: "I'll {0} the {1} {2} {3}, that should {4} the {5} {6}!"
        },
        {
            types: ["noun", "verb", "adjective", "noun", "ingverb", "verb", "noun"],
            structure: "This is the {0} {1} that the {2} {3} is {4} for to {5} the {6}."
            }

    ];


    var caches = {
        abbreviation: {},
        adjective: {},
        noun: {},
        verb: {},
        ingverbcache: {}
    };
    
    var clearcache = function () {
        
        caches.abbreviation = new Array;
        caches.adjective = new Array;
        caches.noun = new Array;
        caches.verb = new Array;
        caches.ingverb = new Array;
    };

    var generate = function (cindex) {

        clearcache();

        var construct, sentence;
        
        // if cindex is provided AND a valid construct index, use it;
        if (cindex && constructs[cindex]) {
            construct = constructs[cindex];
        } else {
            construct = constructs[Math.floor(Math.random() * constructs.length)];
        }
        sentence = construct.structure;

        for (var index = 0; index < construct.types.length; index++) {

            var type = construct.types[index];
            var words = wordlists[type + "s"]; // yeah, about that ' + "s"'.... lose it.
            var wordindex = Math.floor(Math.random() * words.length);
            var cache = caches[type];
            // don't repeat a word
            // NOTE: potential infinite loop exists for small arrays and a large-number of words from that type
            // but no current structure exhibits this potential
            while (inArray(wordindex, cache) !== -1) {
                wordindex++;
                if (wordindex >= words.length) {
                    wordindex = 0;
                }
            }
            cache.push(wordindex);
            var word = words[wordindex];
            sentence = sentence.replace("{" + index + "}", word);
        };

        sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);

        return sentence;
    };
    
    // from http://stackoverflow.com/questions/5075395/alternative-to-jquery-inarray
    // added to remove a jQuery dependency
    var inArray = function(elem, array) {
        if ( array.indexOf ) {
            return array.indexOf( elem );
        }

        for ( var i = 0, length = array.length; i < length; i++ ) {
            if ( array[ i ] === elem ) {
                return i;
            }
        }

        return -1;
    };

    clearcache(); // auto-init

    exports.Generate = generate;
    exports.WordLists = wordlists;
    exports.Constructs = constructs;
    exports.Caches = caches;
    
})(typeof exports === 'undefined' ? this['jargon'] = {} : exports);