/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing

/**
*	Array of quote objects named 'quote'. Each quote object contains:
*		Quote: Quote
*		Source: Author of the quote. 
*		Year: Year the quote was given. (If provided)
*		Citation: Where the quote was published. (If provided)
**/

var quotes = [
	{
		quote: "Change your life today. Don't gamble on the future, act now, without delay.",
		source: "Simone de Beauvoir",
		year: "",
		citation: ""
	},
	{
		quote: "Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.",
		source: "Helen Keller",
		year: "",
		citation: ""
	},
	{
		quote: "It does not matter how slowly you go as long as you do not stop.",
		source: "Confucius",
		year: "",
		citation: "Chinese Proverbs"
	},
	{
		quote: "It always seems impossible until it's done.",
		source: "Nelson Mandela",
		year: "",
		citation: ""
	},
	{
		quote: "Set your goals high, and don't stop till you get there.",
		source: "Bo Jackson",
		year: "",
		citation: ""
	},
	{
		quote: "Keep your eyes on the stars, and your feet on the ground.",
		source: "Theodore Roosevelt",
		year: "",
		citation: ""
	},
	{
		quote: "Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy.",
		source: "Norman Vincent Peale",
		year: "",
		citation: ""
	},
	{
		quote: "Always do your best. What you plant now, you will harvest later.",
		source: "Og Mandino",
		year: "",
		citation: ""
	},
	{
		quote: "If you want to conquer fear, don't sit home and think about it. Go out and get busy.",
		source: "Dale Carnegie",
		year: "",
		citation: ""
	},
	{
		quote: "If you can dream it, you can do it.",
		source: "Walt Disney",
		year: "",
		citation: ""
	},
	{
		quote: "Setting goals is the first step in turning the invisible into the visible.",
		source: "Tony Robbins",
		year: "2016",
		citation: ""
	},
	{
		quote: "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.",
		source: "Patrick McKenzie",
		year: "2016",
		citation: "Twitter"
	}
];

/**
*	The getRandomQuote function returns a quote selected at random.
*	No params	
*	return value is a quote object
**/
function getRandomQuote(){
	var index = getRandomNumber();
	return quotes[index];
}

/**
*	The getRandomNumber function returns a random number 
*	between 0 and one less than the length of the quotes array.
*	No params
*	return value: a number
**/
function getRandomNumber(){
	return Math.floor((Math.random() * quotes.length));
}

/***
  Create the `printQuote` function to: 
   - call the `getRandomQuote` function and assign it to a variable.
   - use the properties of the quote object stored in the variable to 
     create your HTML string.
   - use conditionals to make sure the optional properties exist before 
     they are added to the HTML string.
   - set the `innerHTML` of the `quote-box` div to the HTML string. 
***/


function printQuote(){
	var randQuote = getRandomQuote();

	var finalString = FormatFinalHTMLString(randQuote);
	document.getElementById("quote-box").innerHTML = finalString;
}

function FormatFinalHTMLString(randQuote){
	var str = "<p class='quote'>" + randQuote.quote + "<\p><p class='source'>" + randQuote.source + "<\p>";
	var c = "<span class='citation'>" + randQuote.citation + "</span>";
	var y = "<span class='year'>" + randQuote.year + "</span>";
	
	if(!isEmptyOrWhiteSpace(randQuote.citation) && !isEmptyOrWhiteSpace(randQuote.year)){
		str = "<p class='quote'>" + randQuote.quote + "<\p><p class='source'>" + randQuote.source + c + y + "<\p>";
	}		
	else if(!isEmptyOrWhiteSpace(randQuote.citation)){
		str = "<p class='quote'>" + randQuote.quote + "<\p><p class='source'>" + randQuote.source + c + "<\p>";
	}else if(!isEmptyOrWhiteSpace(randQuote.year)){
		str = "<p class='quote'>" + randQuote.quote + "<\p><p class='source'>" + randQuote.source + y + "<\p>";
	}
	return str;
}

function isEmptyOrWhiteSpace(s){
    return s === null || s === "";
}

/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.