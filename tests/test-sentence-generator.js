// see http://vowsjs.org/
var vows = require('vows'),
assert = require('assert'),
sentence = require('../jargon.js').create();

// redefine words and templates for our tests
// NOTE: unless we can seed randomness, we can't test for random replacements
// in a meaningful way beyond breakage
// I guess "non-null" string or something....
sentence.words = {
    noun: ["noun"]
};

sentence.templates = [
    "this will be capitalized",
    "A {noun} is a {noun} is a {noun}."
];


vows.describe('Test the sentence generator').addBatch({

    'When tag-count > word-count, words will repeat': {
        // original implementation of code had infinite loop if tag-count > word-count
        topic: function() { return sentence.generate(1); },

        'we get a valid sentence': function(topic) {
            assert.equal(topic, 'A noun is a noun is a noun.');
        }
    },
    'First letter of sentence is capitalized': {
        // we could check that the first-letter is equal to the first-letter toUpperCase
        // but that might be arbitrarily true for the other sentence templates.
        topic: function() { return sentence.generate(0); },
        'Capitalized': function(topic) {
            assert.equal(topic, 'This will be capitalized');
        }
    },
    'Contant templates generate as constants': {
        // No errors for a template with no tags
        // and it returns itself (capitalized)
        topic: function() { return sentence.generate(0); },
        'This is a constant template': function(topic) {
            assert.equal(topic, 'This will be capitalized');
        }
    },
    'The first [0th] template can be explicitly referenced': {
        // An early implementation had a poor truthiness check that failed when template-index := 0
        topic: function() { return sentence.generate(0); },
        'First template used': function(topic) {
            assert.equal(topic, 'This will be capitalized');
        }
    }
}).run(); // run it
