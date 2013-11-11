// set eslint options
/*global require exports */

/* An example of using the core jargon engine [poor name choice for the file]
 * with custom input
 */
(function(exports) {
    "use strict";


    // aaargh, trapped in a closure world
    // sentence is not defined when called. BLARG
    var newStory = function newStory() {


        var sentence = require("./jargon").create();

        // use the following if you plan on instantiation more than one sentence generator.
        // var jargon = require("./jargon");
        // var sentence = jargon.create();

        // original code from http://luckysoap.com/generations/transmission.html
        // which in turn was based on code from http://nickm.com/poems/the_two.html
        // which was original written in Python.


        // more parts-of-speech? per http://www.ling.upenn.edu/courses/Fall_2003/ling001/penn_treebank_pos.html
        sentence.wordlists = {

            always: ['already', 'always', 'forever', 'frequently', 'never', 'often', 'occasionally', 'rarely', 'regularly', 'repeatedly', 'sometimes', 'typically', 'usually'],
            amount: ['a couple', 'a few', 'a number of', 'certain', 'generations of', 'groups of', 'lots of', 'many', 'most', 'particular', 'select', 'some', 'waves of'],
            are: ['are', 'are not', 'appear to be', 'appear to have been', 'have been', 'will be'],
            but: ['actually', 'be that as it may', 'but', 'but wait', 'come to think of it', 'except', 'furthermore', 'hang on a minute', 'hold on', 'however', 'in that case', 'listen', 'think about it', 'wait'],
            beckon: ['beckon', 'convince', 'distract', 'entrance', 'entreat', 'haunt', 'invite', 'implore', 'lure',
                     'seduce', 'scare', 'sway', 'tantalize', 'taunt', 'tempt', 'threaten', 'torment'
                    ],
            cant: ['can\'t', 'couldn\'t', 'didn\'t', 'wouldn\'t', 'shouldn\'t', 'will', 'won\'t'],
            cases: ['arguments', 'bags', 'boxes', 'bundles', 'cases', 'containers', 'crates', 'documents',
                    'envelopes', 'files', 'folders', 'folios', 'packages', 'packets', 'parcels', 'plans', 'piles',
                    'suitcases', 'ships', 'trunks', 'units'
                   ],
            communicated: ['answered', 'asked', 'attempted to write', 'called', 'communicated', 'connected',
                           'corresponded', 'established contact', 'inquired', 'kept in touch', 'maintained contact',
                           'replied',
                           'responded', 'signalled', 'sent word', 'sent messages'
                          ],
            conditions: ['bad', 'partly readable', 'unreadable', 'almost readable', 'readable', 'mostly readable',
                         'mostly unreadable', 'good', 'fair', 'strong', 'weak'
                        ],
            condolence: ['condolence', 'encouragement', 'greeting', 'salutation', 'congratulation', 'reassurance',
                         'explanation', 'instruction', 'admonishment', 'warning'
                        ],
            distant: ['alien', 'distant', 'exotic', 'fabled', 'far', 'foreign', 'legendary', 'strange', 'new',
                      'novel', 'promised', 'storied', 'unknown', 'uncharted', 'waiting'
                     ],
            know: ['believe', 'categorize', 'claim', 'identify', 'imagine', 'interpret', 'intuit', 'know', 'own',
                   'pinpoint', 'locate', 'quantify', 'recognize', 'remember', 'suspect', 'understand'
                  ],
            hear: ['capture', 'decipher', 'decode', 'detect', 'encode', 'find', 'hear', 'interpret', 'intercept',
                   'locate', 'make sense of', 'notice', 'pick up', 'read', 'receive', 'record', 'register',
                   'understand'
                  ],
            heshe: ['he', 'she'],
            hisher: ['his', 'her'],
            horizon: ['border', 'channel', 'definition', 'delineation', 'demarcation', 'edge', 'grid', 'horizon',
                      'horizon line', 'image', 'line', 'limit', 'threshold', 'wire'
                     ],
            harsh: ['brutal', 'cold', 'complex', 'complicated', 'confusing', 'cruel', 'difficult', 'disappointing',
                    'distressing', 'exhausting', 'hard', 'harsh', 'long', 'tiring', 'trying', 'strained',
                    'stressful',
                    'wearying'
                   ],
            havent: ['have', 'haven\'t'],
            information: ['accounts', 'data', 'details', 'diagnostics', 'evidence', 'guides', 'information', 'logs',
                          'news', 'proof', 'records', 'reports', 'specifications', 'support', 'surveys',
                          'transcripts', 'updates'
                         ],
            landscape: ['bay', 'bluff', 'coast', 'coastline', 'cove', 'cliff', 'headland', 'hill', 'inlet',
                        'landscape', 'land', 'river', 'sea shore', 'shore', 'shoreline', 'view', 'vista'
                       ],
            leave: ['abandon', 'damage', 'deny', 'destroy', 'erase', 'evacuate', 'forget', 'leave', 'leave behind',
                    'obliterate', 'omit', 'ruin', 'surrender', 'trade away', 'waste'
                   ],
            maps: ['atlases', 'charts', 'directions', 'guides', 'guidebooks', 'itineraries', 'instructions',
                   'inventories', 'lists', 'manuals', 'maps', 'plans', 'routes', 'schedules'
                  ],
            might: ['could', 'may', 'might', 'should', 'will', 'would'],
            more: ['added', 'additional', 'auxiliary', 'better', 'clearer', 'complimentary', 'different', 'extra',
                   'favourable', 'further', 'more', 'new', 'other', 'supplementary', 'special', 'supporting',
                   'updated'
                  ],
            necessary: ['back-up', 'basic', 'critical', 'crucial', 'duplicate', 'essential', 'extra', 'first',
                        'fundamental', 'important', 'necessary', 'official', 'primary', 'most valuable', 'private',
                        'required',
                        'secure', 'test', 'trial'
                       ],
            need: ['demand', 'desire', 'dream of', 'expect', 'have', 'insist upon', 'procure', 'provide', 'want',
                   'need', 'require', 'request', 'seek', 'want', 'wish for'
                  ],
            network: ['circuit', 'conduit', 'delivery mechanism', 'filing system', 'infrastructure', 'network',
                      'system', 'radio', 'relay', 'router', 'shipping network', 'relay station'
                     ],
            novelist: ['academic', 'artist', 'author', 'designer', 'director', 'genealogist', 'historian',
                       'novelist', 'poet', 'journalist', 'librarian', 'writer'
                      ],
            now: ['eventually', 'gradually', 'hesitantly', 'momentarily', 'now', 'one day', 'presently', 'soon',
                  'suddenly', 'surely', 'tentatively', 'therefore', 'thus', 'ultimately'
                 ],
            numbers: ['two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'eighteen',
                      'twenty-seven', 'thirty odd', 'a few', 'a dozen'
                     ],
            of: ['about', 'describing', 'from', 'in relation to', 'of', 'on', 'pertaining to', 'regarding'],
            operator: ['administrator', 'captain', 'conductor', 'director', 'manager', 'moderator', 'navigator',
                       'operator', 'pilot', 'post master general', 'programmer', 'receptionist', 'translator'
                      ],
            passage: ['crossing', 'dialogue', 'discussion', 'exchange', 'journey', 'passage', 'paragraph', 'path',
                      'message', 'route', 'section', 'transfer', 'transition', 'translation', 'trip', 'voyage'
                     ],
            part: ['bit', 'detail', 'instance', 'item', 'packet', 'part', 'passage', 'piece', 'portion', 'section',
                   'segment', 'unit'
                  ],
            past: ['ancient', 'earlier', 'former', 'historical', 'past', 'previous', 'older', 'recent',
                   '16th-century', '17th-century', '18th-century'
                  ],
            place: ['Canada', 'England', 'Ireland', 'Scotland', 'Wales', 'Cornwall', 'New Brunswick', 'Nova Scotia',
                    'Cape Breton', 'Newfoundland', 'Labrador', 'the Maritimes', 'the Scilly Isles', 'the Hebrides',
                    'the Orkneys', 'the New World', 'the old country', 'home'
                   ],
            possibly: ['certainly', 'clearly', 'essentially', 'possibly', 'perhaps', 'potentially', 'practically',
                       'maybe', 'maybe not', 'theoretically', 'hypothetically'
                      ],
            prepared: ['annotated', 'deleted', 'documented', 'edited', 'filled', 'found', 'itemized', 'labeled',
                       'loaded', 'measured', 'prepared', 'packed', 'readied', 'stolen', 'organized', 'ordered',
                       'sorted',
                       'tested', 'unpacked', 'weighed'
                      ],
            proved: ['appeared', 'became', 'grew', 'had to be', 'proved', 'sounded', 'must have been', 'was'],
            provisions: ['convictions', 'drinking water', 'energy levels', 'firewood', 'food', 'funding', 'ideas',
                         'inspiration', 'provisions', 'materials', 'patience', 'supplies'
                        ],
            proximity: ['adjacent', 'closest', 'earliest', 'first', 'furthest', 'last', 'latest', 'nearest',
                        'neighbouring'
                       ],
            question: ['call', 'challenge', 'conundrum', 'hint', 'formal investigation', 'question', 'problem',
                       'proposal', 'proposition', 'puzzle', 'search', 'suggestion', 'suspicion'
                      ],
            ranlow: ['diminished', 'dried up', 'dwindled', 'gradually increased', 'ran low', 'ran out', 'rotted',
                     'multiplied', 'in short supply', 'vanished'
                    ],
            receiving: ['40 words local paper', '30 words local paper', '100 words special news',
                        'a few scraps of a private message', 'distinguishable dots', 'dots only', 'heavy traffic',
                        'something again', 'atmospherics', 'last message from ship', 'repeated \"are you there\"',
                        'repeated \"where are you\"', 'request to repeat', 'several distinct dashes',
                        'something from another station', 'a weak signal', 'no answers to our enquiries',
                        'no answer',
                        'weak readable signals', 'no signals', 'no signals received, probably not sending',
                        'strong readable signals, sending fast', 'medium strength readable signals', 'some static',
                        'lightening all around'
                       ],
            relative: ['dependent', 'descendant', 'mother', 'father', 'grandmother', 'grandfather', 'granddaughter',
                       'grandson', 'daughter', 'son', 'sister', 'brother', 'aunt', 'uncle', 'niece', 'nephew',
                       'cousin',
                       'mother-in-law', 'father-in-law', 'step-mother', 'step-father', 'half-sister', 'half-brother'
                      ],
            resemble: ['are reminiscent of', 'are similar to', 'compare to', 'could easily be confused with', 'echo',
                       'resemble', 'look like', 'may be compared to', 'suggest'
                      ],
            say: ['announce', 'articulate', 'conclude', 'demonstrate', 'imply', 'indicate', 'propose', 'relay',
                  'relate', 'say', 'suggest', 'tell us'
                 ],
            screen: ['compass', 'consol', 'display', 'horizon', 'line', 'meter', 'monitor', 'page', 'panel',
                     'projector', 'radar', 'screen'
                    ],
            season: ['spring', 'summer', 'autumn', 'winter'],
            sent: ['air mailed', 'broadcast', 'conveyed', 'delivered', 'dispatched', 'mailed', 'posted', 'shipped',
                   'sent'
                  ],
            shining: ['amorphous', 'beaming', 'blinding', 'glowing', 'gleaming', 'flashing', 'flickering',
                      'glimmering', 'glittering', 'phosphorescent', 'shining', 'sparkling', 'wavering'
                     ],
            sign: ['announcement', 'clue', 'gesture', 'hint', 'indication', 'portent', 'omen', 'premonition',
                   'red flag', 'sign', 'signal', 'suggestion', 'threat', 'warning'
                  ],
            sound: ['beep', 'click', 'harmonic resonance', 'hum', 'murmur', 'noise', 'pattern', 'rattle', 'signal',
                    'sound', 'tap', 'tremor', 'vibration', 'whir', 'whine', 'whisper'
                   ],
            start: ['arise', 'begin', 'commence', 'develop', 'emerge', 'ignite', 'open', 'spark', 'materialize',
                    'start', 'surface', 'unravel'
                   ],
            statc: ['blips', 'disturbances', 'echoes', 'feedback', 'ghosts', 'interference', 'patterns', 'chimeras',
                    'flashing lights', 'ships', 'sails', 'shadows', 'smoke', 'specks', 'shapes', 'static', 'waves'
                   ],
            stories: ['archival material', 'article', 'ballad', 'evidence', 'eye-witness account', 'headline',
                      'journal', 'narrative', 'research finding', 'paper trail', 'photograph', 'record', 'report',
                      'rumour',
                      'script', 'transcript', 'testimonial', 'textbook'
                     ],
            strange: ['abnormal', 'cryptic', 'encrypted', 'haunting', 'intermittent', 'illegible', 'irregular',
                      'faint', 'familiar', 'eerie', 'garbled', 'ghostly', 'persistent', 'strange', 'uncanny',
                      'unexplained',
                      'unusual'
                     ],
            suspect: ['assume', 'believe', 'confirm', 'hope', 'imagine', 'suppose', 'suspect', 'think', 'wonder if',
                      'question whether or not', 'doubt that'
                     ],
            tickets: ['boarding passes', 'connections', 'directions', 'documents', 'instructions',
                      'insurance policies', 'manuals', 'papers', 'passports', 'reservations', 'security', 'tickets',
                      'vaccinations', 'visas'
                     ],
            time: ['days', 'hours', 'months', 'seasons', 'weeks', 'years'],
            transatlantic: ['electromagnetic', 'long-distance', 'ship-to-shore', 'shortwave', 'submarine cable',
                            'telegraphic', 'telephonic', 'transatlantic', 'transverse', 'wireless'
                           ],
            transmit: ['advertise', 'broadcast', 'communicate', 'convey', 'deliver', 'distribute', 'post', 'receive',
                       'relay', 'report', 'send', 'signal', 'trade', 'transfer', 'transmit', 'televise'
                      ],
            traveller: ['adventurer', 'cartographer', 'castaway', 'emigrant', 'explorer', 'hopeful', 'immigrant',
                        'merchant', 'migrant', 'passenger', 'refugee', 'stowaway', 'stranger', 'surveyor', 'sailor',
                        'traveller',
                        'wanderer'
                       ],
            usthem: ['us', 'them'],
            wethey: ['a few of us', 'most of us', 'most of them', 'some', 'some of us', 'some of them', 'they', 'we',
                     'the authorities', 'the historians', 'the experts', 'the officials', 'the scientists',
                     'the families'
                    ],
            w: ['why', 'where', 'how'],
            waited: ['continued', 'endured', 'languished', 'lingered', 'lasted', 'persisted', 'remained', 'stayed',
                     'suffered', 'waited'
                    ],
            water: ['water', 'surf', 'ocean', 'sea', 'channel', 'bay', 'Atlantic', 'North Atlantic', 'harbour'],
            weather: ['breezes', 'fog', 'gales', 'glare', 'gusts', 'hail', 'mist', 'rain', 'shadows', 'showers',
                      'sun', 'thunderstorms', 'wind'
                     ],
            working: ['broken', 'connected', 'fixed', 'functioning', 'happening', 'humming', 'on', 'operational',
                      'out there', 'plugged in', 'real', 'working'
                     ],
            wrong: ['ambiguous at best', 'computer-generated', 'confusing', 'damaged beyond repair', 'erroneous',
                    'fake', 'flawed', 'forged', 'hand-drawn', 'illegible', 'inaccurate', 'incorrect', 'invalid',
                    'lost',
                    'missing', 'misplaced', 'mistaken', 'out of date', 'out of order', 'ripped up',
                    'somewhat misleading',
                    'torn', 'unreadable', 'water-damaged', 'wide of the mark', 'wrong'
                   ],
            wrote: ['authored', 'created', 'described', 'improvised', 'inscribed', 'left', 'made', 'ordered',
                    'penned', 'printed', 'planned', 'sketched', 'traced'
                   ],
            you: ['you', 'anyone', 'anyone else', 'someone'],
        };


        // I'd like to see these reduced to a single element, where the place-hose {n} is the type
        // eg "If we {verb} the {noun}, we can get to the {abbreviaation} {noun} through the {adjective} {abbreviation} {noun}"
        sentence.constructs = [
            // TODO: translate the calls to line(below)
            // into templates - each "line" has its own template (in order)
            // {
            //     types: ["verb", "noun", "abbreviation", "noun", "adjective", "abbreviation", "noun"],
            //     structure: "If we {0} the {1}, we can get to the {2} {3} through the {4} {5} {6}!"
            // },
            {
                types: ["w"],
                structure: "{0}?"
            },
            {
                types: ["question"],
                structure: "With a {0}."
            },
            {
                types: ["start", "question"],
                structure: "What {0}'s from a {1}?"
            },
            {
                types: ["season", "weather", "water"],
                structure: "{0} {1} on the {2}."
            }
            //TODO aaaargh! I'm going to hold off on this UNTIL
            // I get an in-place placeholder engine rebuild
            // so that the types are in-place as
            // "{season} {weather} on the {water}."
            // the sentence engine will pass through, replacing words with place-holders
            // but SOOOOOOO much easier for the humans....
        ];


        var i, lines = [];

        lines.push("Begin Transmission.");

        // TODO: templates in order...
        for (i = 0; i < sentence.constructs.length; i++) {
            lines.push(sentence.generate(i));
        }

        lines.push("Please try again.");

        return lines.join("\n");

    };


    var story = function() {

        function rand_range(max) {
            return Math.floor(Math.random() * (max + 1));
        }

        function choose(array) {
            return array[rand_range(array.length - 1)];
        }

        function capitaliseFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }

        var last, line, interference, call, lines = [];

        // TODO: how to code in a constant?
        // not part of a template?
        // ie, no replacements?

        // commented-out line-calls have been "translated"
        // lines.push('Begin Transmission.');

        // call = choose(w) + '?';

        // lines.push(capitaliseFirstLetter(call));

        // line = 'With a ' + choose(question) + '.';
        // lines.push(capitaliseFirstLetter(line));

        // call = 'What ' + choose(start) + 's from a ' + choose(question) + '?';
        // lines.push(capitaliseFirstLetter(call));

        // line = choose(season) + ' ' + choose(weather) + ' on the ' + choose(water) + '. ';
        // lines.push(capitaliseFirstLetter(line));
        line = choose(distant) + ' ' + choose(landscape) + 's, to ' + choose(beckon) + ' ' + choose(usthem) + '.';
        lines.push(capitaliseFirstLetter(line));

        call = choose(havent) + ' the ' + choose(necessary) + ' ' + choose(cases) + ' been ' + choose(
            prepared) + ' yet?';
        lines.push(capitaliseFirstLetter(call));

        line = 'The ' + choose(operator) + ' ' + choose(transmit) + 's ' + choose(hisher) + ' ' + choose(
            condolence) + 's.';
        lines.push(capitaliseFirstLetter(line));

        call = 'Why ' + choose(cant) + ' the ' + choose(traveller) + 's ' + choose(need) + ' ' + choose(more) +
            ' ' + choose(tickets) + '?';
        lines.push(capitaliseFirstLetter(call));

        line = choose(wethey) + ' ' + choose(waited) + ' ' + choose(numbers) + ' ' + choose(time) + '. ';
        lines.push(capitaliseFirstLetter(line));

        line = choose(provisions) + ' ' + choose(ranlow) + ', or so the ' + choose(stories) + 's seem to ' +
            choose(say) + '.';
        lines.push(capitaliseFirstLetter(line));

        call = choose(w) + ' did the ' + choose(operator) + ' ' + choose(transmit) + ' ' + choose(hisher) +
            ' ' + choose(information) + ' ' + choose(of) + ' ' + choose(past) + ' ' + choose(passage) + 's?';
        lines.push(capitaliseFirstLetter(call));

        line = 'The ' + choose(transatlantic) + ' ' + choose(network) + ' ' + choose(cant) + ' ' + choose(
            hear) + ' these ' + choose(strange) + ' ' + choose(sound) + 's.';
        lines.push(capitaliseFirstLetter(line));

        call = choose(might) + ' the ' + choose(operator) + ' ' + choose(now) + ' come to ' + choose(know) +
            ' this ' + choose(landscape) + '?';
        lines.push(capitaliseFirstLetter(call));

        line = 'The ' + choose(passage) + ' from ' + choose(place) + ' ' + choose(proved) + ' ' + choose(
            harsh) + '. ';
        lines.push(capitaliseFirstLetter(line));

        line = 'Conditions ' + choose(are) + ' ' + choose(conditions) + '. ';
        lines.push(capitaliseFirstLetter(line));

        line = 'Receiving ' + choose(shining) + ' ' + choose(statc) + ', ' + choose(receiving) + '...';
        lines.push(capitaliseFirstLetter(line));

        call = 'Who can ' + choose(know) + ' the ' + choose(water) + ' in ' + choose(weather) + ' like this?';
        lines.push(capitaliseFirstLetter(call));

        line = choose(amount) + ' ' + choose(part) + 's of the ' + choose(novelist) + '\'s ' + choose(stories) +
            ' ' + choose(are) + ' ' + choose(prepared) + '.';
        lines.push(capitaliseFirstLetter(line));

        call = choose(might) + ' ' + choose(traveller) + 's ' + choose(now) + ' ' + choose(leave) + ' these ' +
            choose(landscape) + 's?';
        lines.push(capitaliseFirstLetter(call));

        line = choose(past) + ' ' + choose(traveller) + 's ' + choose(wrote) + ' ' + choose(maps) + '. ';
        lines.push(capitaliseFirstLetter(line));
        line = choose(numbers) + ' were from ' + choose(place) + '. ';
        lines.push(capitaliseFirstLetter(line));

        call = choose(w) + ' is it that ' + choose(wethey) + ' ' + choose(always) + ' seem to ' + choose(
            leave) + ' ' + choose(part) + 's from the ' + choose(information) + '?';
        lines.push(capitaliseFirstLetter(call));

        line = choose(transatlantic) + ' ' + choose(network) + 's take ' + choose(time) + ' to ' + choose(say) +
            ' the ' + choose(necessary) + ' ' + choose(stories) + 's.';
        lines.push(capitaliseFirstLetter(line));

        call = choose(havent) + ' ' + choose(wethey) + ' ' + choose(communicated) + '?';
        lines.push(capitaliseFirstLetter(call));

        line = choose(condolence) + 's were ' + choose(sent) + ' ' + choose(time) + ' ago. ';
        lines.push(capitaliseFirstLetter(line));

        line = 'There ' + choose(might) + ' have been ' + choose(sign) + 's. ';
        lines.push(capitaliseFirstLetter(line));

        line = choose(strange) + ' ' + choose(sound) + 's, ' + choose(statc) + ' on the ' + choose(screen) + '.';
        lines.push(capitaliseFirstLetter(line));

        line = 'A ' + choose(sound) + ', ' + choose(receiving) + '... ';
        lines.push(capitaliseFirstLetter(line));

        call = 'Did ' + choose(you) + ' ' + choose(hear) + ' that ' + choose(sound) + '?';
        lines.push(capitaliseFirstLetter(call));

        line = choose(distant) + ' ' + choose(network) + 's have ' + choose(communicated) + '. ';
        lines.push(capitaliseFirstLetter(line));

        line = 'One ' + choose(traveller) + ' ' + choose(beckon) + 's the ' + choose(operator) + '.';
        lines.push(capitaliseFirstLetter(line));

        call = 'Which words of ' + choose(condolence) + ' ' + choose(might) + ' ' + choose(heshe) + ' ' +
            choose(say) + '?';
        lines.push(capitaliseFirstLetter(call));

        line = choose(novelist) + '\'s ' + choose(stories) + 's ' + choose(of) + ' ' + choose(distant) + ' ' +
            choose(landscape) + 's ' + choose(always) + ' ' + choose(start) + ' from these ' + choose(horizon) + 's.';
        lines.push(capitaliseFirstLetter(line));

        call = choose(might) + ' ' + choose(past) + ' ' + choose(traveller) + 's\' ' + choose(relative) +
            's ' + choose(need) + ' ' + choose(more) + ' ' + choose(information) + ' from ' + choose(usthem) + '?';
        lines.push(capitaliseFirstLetter(call));

        line = choose(possibly) + ', but by ' + choose(season) + ' ' + choose(amount) + ' ' + choose(maps) +
            ' ' + choose(might) + ' be ' + choose(wrong) + '.';
        lines.push(capitaliseFirstLetter(line));

        call = choose(w) + ' was the ' + choose(proximity) + ' ' + choose(horizon) + ' ' + choose(wrote) +
            '?';
        lines.push(capitaliseFirstLetter(call));

        line = 'The ' + choose(proximity) + ' ' + choose(landscape) + 's ' + choose(resemble) + ' those of ' +
            choose(place) + '.';
        lines.push(capitaliseFirstLetter(line));

        line = 'In these ' + choose(strange) + ' ' + choose(maps) + ', the ' + choose(water) + ' is ' +
            choose(always) + ' ' + choose(shining) + '.';
        lines.push(capitaliseFirstLetter(line));

        call = choose(but) + '... does that ' + choose(say) + ' ' + choose(past) + ' ' + choose(question) + 's?';
        lines.push(capitaliseFirstLetter(call));

        line = choose(sign) + 's of ' + choose(distant) + ' ' + choose(weather) + ' ' + choose(start) +
            ' on the ' + choose(screen) + '.';
        lines.push(capitaliseFirstLetter(line));

        call = 'Is the ' + choose(network) + ' ' + choose(working) + '?';
        lines.push(capitaliseFirstLetter(call));

        line = choose(wethey) + ' ' + choose(suspect) + ' it\'s ' + choose(working) + '.';
        lines.push(capitaliseFirstLetter(line));

        call = 'Please try again.';
        lines.push(call);

        return lines;

    };

    // console.log(sentence);

    // this is the key component of exposure
    exports.generate = newStory;

    // exposed so we can see what is going on
    // exports.wordlists = sentence.wordlists;
    // exports.constructs = sentence.constructs;


})(typeof exports === "undefined" ? this.orig = {} : exports);
