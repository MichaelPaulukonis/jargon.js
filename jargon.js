// adapted from code @ http://shinytoylabs.com/jargon/
/*global exports console require*/
/*eslint plusplus: true */

// implements node-or-browser js pattern from http://caolanmcmahon.com/posts/writing_for_node_and_the_browser/
// also referenced @ http://stackoverflow.com/questions/7327164/common-module-in-node-js-and-browser-javascript
(function(exports) {
  "use strict";

  // from http://stackoverflow.com/questions/5075395/alternative-to-jquery-inarray
  // added to remove a jQuery dependency
  // while node.js has array.prototype.indexOf
  // this file is also setup to run in browsers that may not have it....
  var inArray = function (elem, array) {
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

    generate: function (cindex) {

      // will no longer work in browser, unless browserify [or suchlike] is used....
      // https://npmjs.org/package/seed-random
      var seeder = require("seed-random");
      if (this.seed) {
        seeder(this.seed, {global: true});
      }

      // local scope (won't be exposed for debugging)
      var template, caches = {};

      // if cindex is provided AND a valid construct index, use it;
      if (cindex >= 0 && this.templates[cindex]) {
        template = this.templates[cindex];
      } else {
        // TODO: optionally seed random per
        //  http://davidbau.com/archives/2010/01/30/random_seeds_coded_hints_and_quintillions.html#more
        template = this.templates[Math.floor(Math.random() * this.templates.length)];
      }

      var tag, re = /\{(\w*?)\}/g, sentence = template;
      while((tag = re.exec(template)) !== null) {
        var words, type = tag[0].replace(/\{|\}/g, "");
        if (this.words[type]) {
          words = this.words[type];
        } else {
          continue; // ignore the tag and proceed to the next...
        }

        var wordindex = Math.floor(Math.random() * words.length);
        if (!caches[type]) {
          // initialize on first encounter
          caches[type] = [];
        }
        var cache = caches[type];

        // don't repeat a word
        // unless we've exhausted the cache; then clear the slate
        while (inArray(wordindex, cache) !== -1) {
          wordindex++;
          if (wordindex >= words.length) {
            wordindex = 0;
            cache = [];
            break;
          }
        }
        cache.push(wordindex);
        var word = words[wordindex];
        sentence = sentence.replace("{" + type + "}", word);

      };

      // capitalize first letter of sentence.
      // do we ALWAYS want to do this?
      // well, so far. so leave it alone.....
      sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);

      return sentence;
    }

  };

  var create = function() {
    var sentence = Object.create(sentenceProto);

    // default words and templates
    // To override in your new object, just set them again
    sentence.words = {
      adjective: ["blue", "large", "wholesome", "obscure"],
      noun: ["noun", "code", "node", "byte"],
      verb: ["run", "execute", "randomize"],
      gerund: ["running", "executing", "randomizing"]
    };

    sentence.templates = [
      "This is the {adjective} {noun} that the {adjective} {verb} is {gerund} for to {verb} the {noun}.",
      "The {adjective} {noun} is {gerund} on the {noun}."
    ];

    sentence.seed = null; // populate to seed the random-generator

    return sentence;
  };

  exports.create = create;

})(typeof exports === "undefined" ? this.jargon = {} : exports);
