// set eslint options
/*global require exports */
/* An example of using the core jargon engine [poor name choice for the file]
 * with custom input
 */
(function (exports) {
  "use strict";

  var sentence = require("./jargon").create();

  // use the following if you plan on instantiation more than one sentence generator.
  // var jargon = require("./jargon");
  // var sentence = jargon.create();
  //
  // original code from http://luckysoap.com/generations/transmission.html
  // which in turn was based on code from http://nickm.com/poems/the_two.html
  // which was originally written in Python.

  sentence.words = {

    always: ["already", "always", "forever", "frequently", "never", "often", "occasionally", "rarely", "regularly", "repeatedly", "sometimes", "typically", "usually"],
    amount: ["a couple", "a few", "a number of", "certain", "generations of", "groups of", "lots of", "many", "most", "particular", "select", "some", "waves of"],
    are: ["are", "are not", "appear to be", "appear to have been", "have been", "will be"],
    but: ["actually", "be that as it may", "but", "but wait", "come to think of it", "except", "furthermore", "hang on a minute", "hold on", "however", "in that case", "listen", "think about it", "wait"],
    beckon: ["beckon", "convince", "distract", "entrance", "entreat", "haunt", "invite", "implore", "lure", "seduce", "scare", "sway", "tantalize", "taunt", "tempt", "threaten", "torment"],
    cant: ["can't", "couldn't", "didn't", "wouldn't", "shouldn't", "will", "won't"],
    cases: ["arguments", "bags", "boxes", "bundles", "cases", "containers", "crates", "documents", "envelopes", "files", "folders", "folios", "packages", "packets", "parcels", "plans", "piles", "suitcases", "ships", "trunks", "units"],
    communicated: ["answered", "asked", "attempted to write", "called", "communicated", "connected", "corresponded", "established contact", "inquired", "kept in touch", "maintained contact", "replied", "responded", "signalled", "sent word", "sent messages"],
    conditions: ["bad", "partly readable", "unreadable", "almost readable", "readable", "mostly readable", "mostly unreadable", "good", "fair", "strong", "weak"],
    condolence: ["condolence", "encouragement", "greeting", "salutation", "congratulation", "reassurance", "explanation", "instruction", "admonishment", "warning"],
    distant: ["alien", "distant", "exotic", "fabled", "far", "foreign", "legendary", "strange", "new", "novel", "promised", "storied", "unknown", "uncharted", "waiting"],
    know: ["believe", "categorize", "claim", "identify", "imagine", "interpret", "intuit", "know", "own", "pinpoint", "locate", "quantify", "recognize", "remember", "suspect", "understand"],
    hear: ["capture", "decipher", "decode", "detect", "encode", "find", "hear", "interpret", "intercept", "locate", "make sense of", "notice", "pick up", "read", "receive", "record", "register", "understand"],
    heshe: ["he", "she"],
    hisher: ["his", "her"],
    horizon: ["border", "channel", "definition", "delineation", "demarcation", "edge", "grid", "horizon", "horizon line", "image", "line", "limit", "threshold", "wire"],
    harsh: ["brutal", "cold", "complex", "complicated", "confusing", "cruel", "difficult", "disappointing", "distressing", "exhausting", "hard", "harsh", "long", "tiring", "trying", "strained", "stressful", "wearying"],
    havent: ["have", "haven't"],
    information: ["accounts", "data", "details", "diagnostics", "evidence", "guides", "information", "logs", "news", "proof", "records", "reports", "specifications", "support", "surveys", "transcripts", "updates"],
    landscape: ["bay", "bluff", "coast", "coastline", "cove", "cliff", "headland", "hill", "inlet", "landscape", "land", "river", "sea shore", "shore", "shoreline", "view", "vista"],
    leave: ["abandon", "damage", "deny", "destroy", "erase", "evacuate", "forget", "leave", "leave behind", "obliterate", "omit", "ruin", "surrender", "trade away", "waste"],
    maps: ["atlases", "charts", "directions", "guides", "guidebooks", "itineraries", "instructions", "inventories", "lists", "manuals", "maps", "plans", "routes", "schedules"],
    might: ["could", "may", "might", "should", "will", "would"],
    more: ["added", "additional", "auxiliary", "better", "clearer", "complimentary", "different", "extra", "favourable", "further", "more", "new", "other", "supplementary", "special", "supporting", "updated"],
    necessary: ["back-up", "basic", "critical", "crucial", "duplicate", "essential", "extra", "first", "fundamental", "important", "necessary", "official", "primary", "most valuable", "private", "required", "secure", "test", "trial"],
    need: ["demand", "desire", "dream of", "expect", "have", "insist upon", "procure", "provide", "want", "need", "require", "request", "seek", "want", "wish for"],
    network: ["circuit", "conduit", "delivery mechanism", "filing system", "infrastructure", "network", "system", "radio", "relay", "router", "shipping network", "relay station"],
    novelist: ["academic", "artist", "author", "designer", "director", "genealogist", "historian", "novelist", "poet", "journalist", "librarian", "writer"],
    now: ["eventually", "gradually", "hesitantly", "momentarily", "now", "one day", "presently", "soon", "suddenly", "surely", "tentatively", "therefore", "thus", "ultimately"],
    numbers: ["two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "eighteen", "twenty-seven", "thirty odd", "a few", "a dozen"],
    of: ["about", "describing", "from", "in relation to", "of", "on", "pertaining to", "regarding"],
    operator: ["administrator", "captain", "conductor", "director", "manager", "moderator", "navigator", "operator", "pilot", "post master general", "programmer", "receptionist", "translator"],
    passage: ["crossing", "dialogue", "discussion", "exchange", "journey", "passage", "paragraph", "path", "message", "route", "section", "transfer", "transition", "translation", "trip", "voyage"],
    part: ["bit", "detail", "instance", "item", "packet", "part", "passage", "piece", "portion", "section", "segment", "unit"],
    past: ["ancient", "earlier", "former", "historical", "past", "previous", "older", "recent", "16th-century", "17th-century", "18th-century"],
    place: ["Canada", "England", "Ireland", "Scotland", "Wales", "Cornwall", "New Brunswick", "Nova Scotia", "Cape Breton", "Newfoundland", "Labrador", "the Maritimes", "the Scilly Isles", "the Hebrides", "the Orkneys", "the New World", "the old country", "home"],
    possibly: ["certainly", "clearly", "essentially", "possibly", "perhaps", "potentially", "practically", "maybe", "maybe not", "theoretically", "hypothetically"],
    prepared: ["annotated", "deleted", "documented", "edited", "filled", "found", "itemized", "labeled", "loaded", "measured", "prepared", "packed", "readied", "stolen", "organized", "ordered", "sorted", "tested", "unpacked", "weighed"],
    proved: ["appeared", "became", "grew", "had to be", "proved", "sounded", "must have been", "was"],
    provisions: ["convictions", "drinking water", "energy levels", "firewood", "food", "funding", "ideas", "inspiration", "provisions", "materials", "patience", "supplies"],
    proximity: ["adjacent", "closest", "earliest", "first", "furthest", "last", "latest", "nearest", "neighbouring"],
    question: ["call", "challenge", "conundrum", "hint", "formal investigation", "question", "problem", "proposal", "proposition", "puzzle", "search", "suggestion", "suspicion"],
    ranlow: ["diminished", "dried up", "dwindled", "gradually increased", "ran low", "ran out", "rotted", "multiplied", "in short supply", "vanished"],
    receiving: ["40 words local paper", "30 words local paper", "100 words special news", "a few scraps of a private message", "distinguishable dots", "dots only", "heavy traffic", "something again", "atmospherics", "last message from ship", "repeated \"are you there\"", "repeated \"where are you\"", "request to repeat", "several distinct dashes", "something from another station", "a weak signal", "no answers to our enquiries", "no answer", "weak readable signals", "no signals", "no signals received, probably not sending", "strong readable signals, sending fast", "medium strength readable signals", "some static", "lightening all around"],
    relative: ["dependent", "descendant", "mother", "father", "grandmother", "grandfather", "granddaughter", "grandson", "daughter", "son", "sister", "brother", "aunt", "uncle", "niece", "nephew", "cousin", "mother-in-law", "father-in-law", "step-mother", "step-father", "half-sister", "half-brother"],
    resemble: ["are reminiscent of", "are similar to", "compare to", "could easily be confused with", "echo", "resemble", "look like", "may be compared to", "suggest"],
    say: ["announce", "articulate", "conclude", "demonstrate", "imply", "indicate", "propose", "relay", "relate", "say", "suggest", "tell us"],
    screen: ["compass", "consol", "display", "horizon", "line", "meter", "monitor", "page", "panel", "projector", "radar", "screen"],
    season: ["spring", "summer", "autumn", "winter"],
    sent: ["air mailed", "broadcast", "conveyed", "delivered", "dispatched", "mailed", "posted", "shipped", "sent"],
    shining: ["amorphous", "beaming", "blinding", "glowing", "gleaming", "flashing", "flickering", "glimmering", "glittering", "phosphorescent", "shining", "sparkling", "wavering"],
    sign: ["announcement", "clue", "gesture", "hint", "indication", "portent", "omen", "premonition", "red flag", "sign", "signal", "suggestion", "threat", "warning"],
    sound: ["beep", "click", "harmonic resonance", "hum", "murmur", "noise", "pattern", "rattle", "signal", "sound", "tap", "tremor", "vibration", "whir", "whine", "whisper"],
    start: ["arise", "begin", "commence", "develop", "emerge", "ignite", "open", "spark", "materialize", "start", "surface", "unravel"],
    statc: ["blips", "disturbances", "echoes", "feedback", "ghosts", "interference", "patterns", "chimeras", "flashing lights", "ships", "sails", "shadows", "smoke", "specks", "shapes", "static", "waves"],
    stories: ["archival material", "article", "ballad", "evidence", "eye-witness account", "headline", "journal", "narrative", "research finding", "paper trail", "photograph", "record", "report", "rumour", "script", "transcript", "testimonial", "textbook"],
    strange: ["abnormal", "cryptic", "encrypted", "haunting", "intermittent", "illegible", "irregular", "faint", "familiar", "eerie", "garbled", "ghostly", "persistent", "strange", "uncanny", "unexplained", "unusual"],
    suspect: ["assume", "believe", "confirm", "hope", "imagine", "suppose", "suspect", "think", "wonder if", "question whether or not", "doubt that"],
    tickets: ["boarding passes", "connections", "directions", "documents", "instructions", "insurance policies", "manuals", "papers", "passports", "reservations", "security", "tickets", "vaccinations", "visas"],
    time: ["days", "hours", "months", "seasons", "weeks", "years"],
    transatlantic: ["electromagnetic", "long-distance", "ship-to-shore", "shortwave", "submarine cable", "telegraphic", "telephonic", "transatlantic", "transverse", "wireless"],
    transmit: ["advertise", "broadcast", "communicate", "convey", "deliver", "distribute", "post", "receive", "relay", "report", "send", "signal", "trade", "transfer", "transmit", "televise"],
    traveller: ["adventurer", "cartographer", "castaway", "emigrant", "explorer", "hopeful", "immigrant", "merchant", "migrant", "passenger", "refugee", "stowaway", "stranger", "surveyor", "sailor", "traveller", "wanderer"],
    usthem: ["us", "them"],
    wethey: ["a few of us", "most of us", "most of them", "some", "some of us", "some of them", "they", "we", "the authorities", "the historians", "the experts", "the officials", "the scientists", "the families"],
    w: ["why", "where", "how"],
    waited: ["continued", "endured", "languished", "lingered", "lasted", "persisted", "remained", "stayed", "suffered", "waited"],
    water: ["water", "surf", "ocean", "sea", "channel", "bay", "Atlantic", "North Atlantic", "harbour"],
    weather: ["breezes", "fog", "gales", "glare", "gusts", "hail", "mist", "rain", "shadows", "showers", "sun", "thunderstorms", "wind"],
    working: ["broken", "connected", "fixed", "functioning", "happening", "humming", "on", "operational", "out there", "plugged in", "real", "working"],
    wrong: ["ambiguous at best", "computer-generated", "confusing", "damaged beyond repair", "erroneous", "fake", "flawed", "forged", "hand-drawn", "illegible", "inaccurate", "incorrect", "invalid", "lost", "missing", "misplaced", "mistaken", "out of date", "out of order", "ripped up", "somewhat misleading", "torn", "unreadable", "water-damaged", "wide of the mark", "wrong"],
    wrote: ["authored", "created", "described", "improvised", "inscribed", "left", "made", "ordered", "penned", "printed", "planned", "sketched", "traced"],
    you: ["you", "anyone", "anyone else", "someone"]
  };


  sentence.templates = [
    "Begin Transmission.",
    "{w}?",
    "With a {question}.",
    "What {start}'s from a {question}?",
    "{season} {weather} on the {water}.",
    "{distant} {landscape}s, to {beckon} {usthem}.",
    "{havent} the {necessary} {cases} been {prepared} yet?",
    "The {operator} {transmit}s {hisher} {condolence}s.",
    "Why {cant} the {traveller}s {need} {more} {tickets}?",
    "{wethey} {waited} {numbers} {time}. ",
    "{provisions} {ranlow}, or so the {stories}s seem to {say}.",
    "{w} did the {operator} {transmit} {hisher} {information} {of} {past} {passage}s?",
    "The {transatlantic} {network} {cant} {hear} these {strange} {sound}s.",
    "{might} the {operator} {now} come to {know} this {landscape}?",
    "The {passage} from {place} {proved} {harsh}. ",
    "Conditions {are} {conditions}. ",
    "Receiving {shining} {statc}, {receiving}...",
    "Who can {know} the {water} in {weather} like this?",
    "{amount} {part}s of the {novelist}'s {stories} {are} {prepared}.",
    "{might} {traveller}s {now} {leave} these {landscape}s?",
    "{past} {traveller}s {wrote} {maps}. ",
    "{numbers} were from {place}. ",
    "{w} is it that {wethey} {always} seem to {leave} {part}s from the {information}?",
    "{transatlantic} {network}s take {time} to {say} the {necessary} {stories}s.",
    "{havent} {wethey} {communicated}?",
    "{condolence}s were {sent} {time} ago. ",
    "There {might} have been {sign}s. ",
    "{strange} {sound}s, {statc} on the {screen}.",
    "A {sound}, {receiving}... ",
    "Did {you} {hear} that {sound}?",
    "{distant} {network}s have {communicated}. ",
    "One {traveller} {beckon}s the {operator}.",
    "Which words of {condolence} {might} {heshe} {say}?",
    "{novelist}'s {stories}s {of} {distant} {landscape}s {always} {start} from these {horizon}s.",
    "{might} {past} {traveller}s' {relative}s {need} {more} {information} from {usthem}?",
    "{possibly}, but by {season} {amount} {maps} {might} be {wrong}.",
    "{w} was the {proximity} {horizon} {wrote}?",
    "The {proximity} {landscape}s {resemble} those of {place}.",
    "In these {strange} {maps}, the {water} is {always} {shining}.",
    "{but}... does that {say} {past} {question}s?",
    "{sign}s of {distant} {weather} {start} on the {screen}.",
    "Is the {network} {working}?",
    "{wethey} {suspect} it's {working}.",
    "Please try again."
  ];


  var newStory = function newStory() {

    var i, lines = [];

    for (i = 0; i < sentence.templates.length; i++) {
      lines.push(sentence.generate(i));
    }

    return lines.join("\n");

  };

  exports.generate = newStory;
  exports.sentence = sentence;

})(typeof exports === "undefined" ? this.orig = {} : exports);