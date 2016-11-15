/* 

	file: 	letter.js
	desc: 	simple script that generates a (skeleton) letter
				based on Christopher Stratchey's Love Letter as 
				analysed by Noah Wardrip-Fruin in "Digital Media Archeology", 
				but replaced with new words, which could be used in a love letter 
				from Romeo to Juliet (Baz Luhrmann's edition - Romeo + Juliet)
	author: Cecilie Wig
	date: 15/11/2016

*/

// import chance (http://chancejs.com)
var chance = require('chance'). Chance(); // npm install --save chance

// import word-wrap (https://www.npmjs.com/package/word-wrap)
var wrap = require('word-wrap'); // npm install --save word-wrap

// Love letter from Romeo to Juliet vocabulary database 
// based on Stratchey's Love letter vocabulary database, which is 
// based on Noah Wardrip-Fruin's "Digital Media Archeology" Table 14.1

const first = ['MAID', 'LADY', 'DEAR', 'WIFE', 'JULIET', 'SAINT', 'LOVE', 'SUN'];

const adjectives = ['RIGHTEOUS', 'SWEET', 'LOVEABLE', 'WARM', 'FLOWERING', 'GORGEOUS', 'BELOVED', 'HAPPY', 'MERCIFUL', 'AFFLICTED', 'DARLING', 'DEAR', 'DEVOTED', 'AFFECTIONATE', 'FAIR', 'COURAGIOUS', 'GENTLE', 'IMPATIENT', 'DEAREST', 'SWEETEST', 'HONEST', 'LOVING', 'KIND', 'PRECIOUS', 'BEAUTIFUL', 'SYMPATHETIC', 'TENDER', 'DIGNIFIED', 'CHEERFUL'];

const nouns = ['DEATH', 'HEAVEN', 'BLESSING', 'FORTUNE', 'WIFE', 'JULIET', 'DESIRE', 'LIGHT', 'SOUL', 'SATISFACTION', 'WORLD', 'LOVE', 'JOY', 'LIGHTNING', 'FLOWER', 'HEART', 'MOON', 'LADY', 'LIFE', 'WINGS', 'FLOWER', 'LUST', 'CAPULET', 'SUN', 'LOVER', 'MADAM', 'KISS', 'SIN', 'SAINT'];

const adverbs = ['AFFECTIONATELY', 'FRIENDLY', 'LOVELY', 'AVIDLY', 'BEAUTIFULLY', 'BREATHLESSLY', 'BURNINGLY', 'COVETOUSLY', 'CURIOUSLY', 'DEVOTEDLY', 'EAGERLY', 'FERVENTLY', 'FONDLY', 'IMPATIENTLY', 'KEENLY', 'LOVINGLY', 'PASSIONATELY', 'SEDUCTIVELY', 'TENDERLY', 'WINNINGLY', 'WISTFULLY'];

const verbs = ['ADORES', 'ATTRACTS', 'CARES', 'CHERISHES', 'CLINGS', 'DESIRES', 'HOLDS DEAR', 'HOPES', 'HUNGERS', 'IS WEDDED', 'LIKES', 'LONGS', 'LOVES', 'LUSTS AFTER', 'PRAYERS', 'PINES', 'PRIZES', 'SIGHS', 'TEMPTS', 'THIRSTS', 'TREASURES', 'WANTS', 'WISHES', 'WOOS', 'YEARNS'];


/** 
*	Picks a random element from an array
*	@param {Array} array
* 	@return {Object} choice
*/
function choice(array) {
		var index = chance.natural({'min': 0, 'max': array.length - 1});
		return array [index];

}

/**
*	Randomly picks or doesn't pick a random element from an array
* 	@param {Array} array
*	@return {Object} choice
*	@return {String} empty string
*/

function maybe(array) {
	if( chance.bool() ) {
			return choice(array);
	} else {	
			return '';
	}
}

/**
*	Generates a short phrase consisting of a randomly chosen adjective and noun
*	@return {String} phrase
*/
function short() {	
		return choice(adjectives) + ' ' + choice(nouns); 
}

/**
*	Generates a sentence composed of randomly chosen adjective, noun, adverb,
*	verb, adjective and noun
* 	@return {String} sentence
*/ 
function long() {
	return 'DEAR ' + choice(first) + ', ' + 'YOU ' + 'ARE ' + 'MY ' + maybe(adjectives) + ' ' + 
	choice(nouns) + '. ' + 'TIS ' + 'IS ' + 'I ' + 'WHO ' + maybe(adverbs) + ' ' + choice(verbs) + ' ' + 
	'YOUR ' + maybe(adjectives) + ' ' + choice(nouns) + '. ' + 'MY ' + choice(nouns) + ' ' + choice(verbs)
	+ ' ' + 'YOUR ' + maybe(adjectives) + ' ' + choice(nouns) + '. ' + 'GIVE ' + 'YOUR ' + choice(adjectives)
	+ ' ' + choice(verbs) + ' ' + 'TO ' + 'ME' + '. ' + 'I ' + 'WANT ' + 'YOUR ' + maybe(adverbs) + ' ' + 
	choice(verbs) + '. ' + 'I ' + 'GIVE ' + 'TO ' + 'YOU ' + 'MY ' + maybe(adjectives) + ' ' + 'FAREWELL' + '. ';
}

// format the output (header)
console.log('\n\n\n\n');	// 4 x newline ('\n)

// in order to use word-wrap, a single string needs to be created
// (text) containing all generated sentences
var text = '';

// loop generating 1 sentence
for(var i = 0; i < 1; i++) {

	// concentrate the new sentence generated by long() with the text string
	text += long(); // (+=) text = text + long()
}

// wrap the text with a width of 65 characters and log (output) it to the console
console.log(wrap(text, {'width': 60}));

// format for the output (footer)
console.log('\n\n\n\n');	// 4 x newline ('\n)