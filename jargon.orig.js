// set eslint options
/*global require exports */

/* An example of using the core jargon engine [poor name choice for the file]
 * with custom input
 */
(function(exports) {
  "use strict";

  var jargon = require("./jargon");

  var sentence = jargon.create();

  // more parts-of-speech? per http://www.ling.upenn.edu/courses/Fall_2003/ling001/penn_treebank_pos.html
  sentence.wordlists = {
    abbreviations: ["TCP", "HTTP", "SDD", "RAM", "GB", "CSS", "SSL", "AGP", "SQL", "FTP", "PCI", "AI", "ADP", "RSS", "XML", "EXE", "COM", "HDD", "THX", "SMTP", "SMS", "USB", "PNG"],
    adjectives: ["auxiliary", "primary", "back-end", "digital", "open-source", "virtual", "cross-platform", "redundant", "online", "haptic", "multi-byte", "bluetooth", "wireless", "1080p", "neural", "optical", "solid state", "mobile"],
    nouns: ["driver", "protocol", "bandwidth", "panel", "microchip", "program", "port", "card", "array", "interface", "system", "sensor", "firewall", "hard drive", "pixel", "alarm", "feed", "monitor", "application", "transmitter", "bus", "circuit", "capacitor", "matrix"],
    verbs: ["back up", "bypass", "hack", "override", "compress", "copy", "navigate", "index", "connect", "generate", "quantify", "calculate", "synthesize", "input", "transmit", "program", "reboot", "parse"],
    ingverbs: ["backing up", "bypassing", "hacking", "overriding", "compressing", "copying", "navigating", "indexing", "connecting", "generating", "quantifying", "calculating", "synthesizing", "transmitting", "programming", "parsing"]
  };

  // I'd like to see these reduced to a single element, where the place-hose {n} is the type
  // eg "If we {verb} the {noun}, we can get to the {abbreviaation} {noun} through the {adjective} {abbreviation} {noun}"
  sentence.constructs = [
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

  // this is the key component of exposure
  exports.generate = sentence.generate;

  // exposed so we can see what is going on
  exports.wordlists = sentence.wordlists;
  exports.constructs = sentence.constructs;


})(typeof exports === "undefined" ? this.orig = {} : exports);
