// set eslint options
/*global require exports */

/* An example of using the core jargon engine [poor name choice for the file]
 * with custom input
 */
(function(exports) {
  "use strict";

    // hey THIS RIGHT HERE means it will only work in node.js...
  var sentence = require("./jargon").create();

  // use the following if you plan on instantiation more than one sentence generator.
  // var jargon = require("./jargon");
  // var sentence = jargon.create();

  // more parts-of-speech? per http://www.ling.upenn.edu/courses/Fall_2003/ling001/penn_treebank_pos.html
  sentence.words = {
    abbreviation: ["TCP", "HTTP", "SDD", "RAM", "GB", "CSS", "SSL", "AGP", "SQL", "FTP", "PCI", "AI", "ADP", "RSS", "XML", "EXE", "COM", "HDD", "THX", "SMTP", "SMS", "USB", "PNG"],
    adjective: ["auxiliary", "primary", "back-end", "digital", "open-source", "virtual", "cross-platform", "redundant", "online", "haptic", "multi-byte", "bluetooth", "wireless", "1080p", "neural", "optical", "solid state", "mobile"],
    noun: ["driver", "protocol", "bandwidth", "panel", "microchip", "program", "port", "card", "array", "interface", "system", "sensor", "firewall", "hard drive", "pixel", "alarm", "feed", "monitor", "application", "transmitter", "bus", "circuit", "capacitor", "matrix"],
    verb: ["back up", "bypass", "hack", "override", "compress", "copy", "navigate", "index", "connect", "generate", "quantify", "calculate", "synthesize", "input", "transmit", "program", "reboot", "parse"],
    gerund: ["backing up", "bypassing", "hacking", "overriding", "compressing", "copying", "navigating", "indexing", "connecting", "generating", "quantifying", "calculating", "synthesizing", "transmitting", "programming", "parsing"]
  };

  // I'd like to see these reduced to a single element, where the place-hose {n} is the type
  // eg "If we {verb} the {noun}, we can get to the {abbreviaation} {noun} through the {adjective} {abbreviation} {noun}"
  sentence.templates = [
      "If we {verb} the {noun}, we can get to the {abbreviation} {noun} through the {adjective} {abbreviation} {noun}!",
      "We need to {noun} the {adjective} {abbreviation} {noun}!",
      "Try to {verb} the {abbreviation} {noun}, maybe it will {verb} the {adjective} {noun}!",
      "You can't {verb} the {noun} without {gerund} the {adjective} {abbreviation} {noun}!",
      "Use the {adjective} {abbreviation} {noun}, then you can {verb} the {adjective} {noun}!",
      "The {abbreviation} {noun} is down, {verb} the {adjective} {noun} so we can {verb} the {abbreviation} {noun}!",
      "{gerund} the {noun} won't do anything, we need to {verb} the {adjective} {abbreviation} {noun}!",
      "I'll {verb} the {adjective} {abbreviation} {noun}, that should {verb} the {abbreviation} {noun}!",
      "This is the {noun} {verb} that the {adjective} {noun} is {gerund} for to {verb} the {noun}."
  ];

  // this is the key component of exposure
  exports.generate = sentence.generate;

  // exposed so we can see what is going on
  exports.words = sentence.words;
  exports.templates = sentence.templates;


})(typeof exports === "undefined" ? this.orig = {} : exports);
