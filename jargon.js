// adapted from code @ http://shinytoylabs.com/jargon/
/*global exports console*/
/*eslint plusplus: true */

// implements node-or-browser js pattern from http://caolanmcmahon.com/posts/writing_for_node_and_the_browser/
// also referenced @ http://stackoverflow.com/questions/7327164/common-module-in-node-js-and-browser-javascript
(function(exports) {
  "use strict";


  // from http://stackoverflow.com/questions/5075395/alternative-to-jquery-inarray
  // added to remove a jQuery dependency
  // while node.js has array.prototype.indexOf
  // this file is also setup to run in browsers that may not have it....
  var inArray = function inArray(elem, array) {
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

  var sentenceProto = {

    generate: function generate(cindex) {

      // local scope (won't be exposed for debugging)
      var caches = {};

      var construct, sentence;

      // if cindex is provided AND a valid construct index, use it;
      if (cindex && this.constructs[cindex]) {
        construct = this.constructs[cindex];
      } else {
        construct = this.constructs[Math.floor(Math.random() * this.constructs.length)];
      }
      sentence = construct.structure;

      for (var index = 0; index < construct.types.length; index++) {

        var type = construct.types[index];
        var words = this.wordlists[type];
        var wordindex = Math.floor(Math.random() * words.length);
          if (!caches[type]) {
              // initialize on first encounter
              caches[type] = [];
          }
        var cache = caches[type];

          // console.log('type: ' + type + ' cache: ' + cache);

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
    }

  };

  var create = function create() {
    var sentence = Object.create(sentenceProto);

    sentence.wordlists = {
      adjective: ["blue", "large", "wholesome", "obscure"],
      noun: ["noun", "code", "node", "byte"],
      verb: ["run", "execute", "randomize"],
      ingverb: ["running", "executing", "randomizing"]
    };

    sentence.constructs = [
      {
        types: ["adjective", "noun", "adjective", "noun", "ingverb", "verb", "noun"],
        structure: "This is the {0} {1} that the {2} {3} is {4} for to {5} the {6}."
      },
      {
        types: ["adjective", "noun", "ingverb", "noun"],
        structure: "The {0} {1} is {2} on the {3}."
      }
    ];

    return sentence;
  };

  exports.create = create;

  // exports.Generate = generate;
  // exports.WordLists = wordlists;
  // exports.Constructs = constructs;

})(typeof exports === "undefined" ? this.jargon = {} : exports);
