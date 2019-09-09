var questions = [{
    question: "1. Which of the following is a type checking language and a superset of JavaScript?",
    choices: ["React", "ECMAScript", "TypeScript", "Java"],
    correctAnswer: 2
}, {
    question: "2. An async function always returns:",
    choices: ["a callback, a Promise", "a literal value", "a response object", "all of the above"],
    correctAnswer: 0
}, {
    question: "3. The await keyword is valid only inside functions marked as async.",
    choices: ["True. If you use await outside an async function you will get a syntax error", "False. You can use await anywhere in your program to wait for the returned value of an async operation"],
    correctAnswer: 0
}, {
    question: "4. In the following code there's a callback and a function that takes a callback. Which part of the code is a callback?  openImage(addFilter);",
    choices: ["addFilter", "openImage"],
    correctAnswer: 0
},{
	question: "5. What is the proper syntax of an anonymous function?",
    choices: [`function ( ) {

		//Do something

	  }`, `function name() {

        // code to be executed
        
      }`, `function name() {

        // paramater
        
      }`, `const function = name {parameter} (

        // code to be executed
        
      )`],
    correctAnswer: 0
},{
	question: "6. In the following code there's a callback and a function that takes a callback. Which part of the code is a callback?  readFile('essay.txt', checkForPlagiarism);",
    choices: ["readFile", "checkForPlagiarism", "essay.txt"],
    correctAnswer: 1
},{
	question: "7. ___objects are the built-in objects that are part of the JavaScript programming language.",
    choices: ["System", "Runtime", "Host", "Native"],
    correctAnswer: 3
},{
	question: "8. Does the integer 0 == false?",
    choices: ["Yes", "Hell Naw"],
    correctAnswer: 0
},{
	question: "9. A component can change the value of the props given to it.",
    choices: ["True. Props represent data that changes", "False. Props are 'read only (or immutable)'"],
    correctAnswer: 1
}, {
	question: "10. Which of the following is the correct way to Pass the score prop the number value 100? ",
    choices: [`Student name="Gob" score=100`, `Student name="Gob" score=(100)`, `Student name="Gob" score={100}`],
    correctAnswer: 2
}, {
	question: "11. Which of the following best describes properties (or props) in React?",
    choices: ["Props hold data that change over time", "Props Pass data from a parent component down to child components", "Props is how components are rendered and updated in the Dom"],
    correctAnswer: 1
},  {
	question: "12. Which of the following is the correct way to add the code that displays the value of a prop named user.",
    choices: [`const Header = (props) => {

		return (

		  Hello, { user.props }!

		);
	  }`, `const Header = (props) => {

		return (

		  Hello, { user }!

		);
	  }`, `const Header = (user) => {

		return (

		  Hello, { props.user }!

		);
	  }`, `const Header = (props) => {

		return (

		  Hello, { props.user }!

		);
	  }`],
    correctAnswer: 3
},
{
    question: "13. What does DOM stand for?",
    choices: ["Directory Of Models", "Document On Middleware", "Data Object Model", "Document Object Model"],
    correctAnswer: 3
}, 
{
    question: "14. What does 'Math.random()' do?",
    choices: ["Randomly selects an index value in an array", "Returns a number from 0 up to, but not including 10", "Returns a number from 0 up to, but not including 1", "Returns any random number"],
    correctAnswer: 2
}, {
    question: "15. Which two methods would add an element at the begining of an array, and one at the end of an array, respectively?",
    choices: ["push, pop", "unshift, push", "first, push", "unshift, last"],
    correctAnswer: 1
}, {
    question: "16. How would you create a string and assign it to a variable?",
    choices: ["const string = 'I just created a string'", "const string = (I just created a string)", "string = alert('I just created a string')", "I just created a string = let string"],
    correctAnswer: 0
}, {
    question: "17. Given `const num = 7` - How would you use string concatenation to create the following string:   Say hello 7 times fast! ",
    choices: ["'Say hello ' + num + ' times fast!'", "'Say hello + num + times fast!'", "('Say hello') + 'num' + ('times fast!')", "`Say hello (num) times fast!`"],
    correctAnswer: 0
},{
	question: "18. What is the proper syntax of a basic function?",
    choices: [`name function(parameter) {

        // code to be executed
        
      }`, `function name(parameter) {

        // code to be executed
        
      }`, `function name(code to be executed) {

        // paramater
        
      }`, `const function = name {parameter} (

        // code to be executed
        
      )`],
    correctAnswer: 1
},{
	question: "19. Use jQuery to append a paragraph tag to an element with the class of container",
    choices: ["$('#container').appendChild(p)", "$('p').append('.container')", "$('containerElement').append('p')", "$('.container').append('p')"],
    correctAnswer: 3
},{
	question: "20. Look at the following selector: document.querySelector('li'). What does it select?",
    choices: ["All list item elements", "The last list item element", "The first list item element", "The current list item element"],
    correctAnswer: 2
},{
	question: "21. What does CRUD stand for?",
    choices: ["Create - Review - Undo - Document", "Create- Read - Update - Delete", "Create - Read - Upload - Destroy", "None of these"],
    correctAnswer: 1
},{
	question: "22. Which of the following is an example of an object literal?",
    choices: ["const literal = { property: 'string'}", "const literal = property(string) =>", "const literal = [property: 'string']", "const {literal} = [string property]"],
    correctAnswer: 0
}, {
	question: "23. What keyword would you use to select data by descending order?",
    choices: ["Down", "Read", "Descending", "Desc"],
    correctAnswer: 3
}, {
	question: "24. What is pug used for?",
    choices: ["A component in React that assists with routes", "A template engine that compiles and renders HTML", "A place to store static files in Express", "Cute puppy memes"],
    correctAnswer: 1
},  {
	question: "25. Which code sets up middleware in Express?",
    choices: ["app.set", "app.use", "app.get", "app.post"],
    correctAnswer: 1
}, {
	question: "26. What happens when you run `npm install` in the terminal?",
    choices: ["Node will be installed on your machine", "The app will begin to run", "Any project dependencies listed in the package.json file will be installed", "Views and Public folders will be created"],
    correctAnswer: 2
}, {
	question: "27. Which variable declaration should be the first option to consider?",
    choices: ["let", "var", "function", "const"],
    correctAnswer: 3
}, {
	question: "28. What is the difference between a local variable and a global variable?",
    choices: ["Local variables are accessible anywhere in your code, global variables only exist inside of a function ", "Global variables are defined with a const, local variables are defined with a let", "Locally defined variables can change the value of a global variables", "Global variables are accessible anywhere in your code, local variables only exist inside of a function"],
    correctAnswer: 3
}, {
	question: "29. Which of the following will show an alert when the user clicks on an element?",
    choices: [`element.addEventListener("click", function(){ alert("Hello World!") })`, `addEventListener.element("click", alert("Hello World!") )`, `element.onSubmit("onlick", alert("Hello World!"))`, `alert("Hello World").click`],
    correctAnswer: 0
}, {
	question: "30. What does IIFE stand for?",
    choices: ["Instantly Instantiated Function Expressions", "Immediate If Statement Expression", "Immediate Instant Function Express", "Immediately Invoked Function Expression"],
    correctAnswer: 3
}, {
	question: "31. What is DOM traversal?",
    choices: ["Appending DOM elements", "Updating the DOM memory with functions", "Finding variables inside of local functions within the DOM", "Navigating up and down the DOM tree"],
    correctAnswer: 3
}, {
	question: "32. Which code properly references a module that is in a separate file?",
    choices: ["const require = 'myModule'", "const myModule = require('myModule')", "const myModule = express.require[myModule]", "require().myModule"],
    correctAnswer: 1
},];

const $answerButton = $('.answerButton');
$answerButton.hide();
var currentQuestion = 0;
var viewingAns = 0;
var correctAnswers = 0;
var quizOver = false;
var iSelectedAnswer = [];
	var c=900;
	var t;
$(document).ready(function () 
{
    // Display the first question
    displayCurrentQuestion();
    $(this).find(".quizMessage").hide();
	timedCount();
	
	$(this).find('.answerButton').on("click", function () 
	{		
		
        if (!quizOver) 
		{
			if(currentQuestion == 0) { return false; }
	
			if(currentQuestion == 1) {
			  $answerButton.hide();
			}
			
				currentQuestion--; // Since we have already displayed the first question on DOM ready
				if (currentQuestion < questions.length) 
				{
					displayCurrentQuestion();
					$answerButton.hide();
					
				} 					
		} else {
			if(viewingAns == 3) { return false; }
			currentQuestion = 0; viewingAns = 3;
			viewResults();	
			$answerButton.show();	
		}
    });

	
	// On clicking next, display the next question
    $(this).find(".nextButton").on("click", function () 
	{
        if (!quizOver) 
		{
			
            var val = $("input[type='radio']:checked").val();

            if (val == undefined) 
			{
                $(document).find(".quizMessage").text("Please select an answer");
                $(document).find(".quizMessage").show();
            } 
			else 
			{
                // TODO: Remove any message -> not sure if this is efficient to call this each time....
                $(document).find(".quizMessage").hide();
				if (val == questions[currentQuestion].correctAnswer) 
				{
					correctAnswers++;
				}
				iSelectedAnswer[currentQuestion] = val;
				
				currentQuestion++; // Since we have already displayed the first question on DOM ready
				if(currentQuestion >= 1) {
					  $('.preButton').prop("disabled", false);
				}
				if (currentQuestion < questions.length) 
				{
					displayCurrentQuestion();
					
				} 
				else {

					// Display final score and message, unhide the "view answers" button
					displayScore();
					$('#iTimeShow').html('Quiz Completed! This quiz will self destruct when the timer runs out');
					$('#timer').html("You scored: " + correctAnswers + " out of " + questions.length);
					c=900;
					$answerButton.show();
					$(document).find(".nextButton").text("Try Again?");
					quizOver = true;
					return false;
					
				}
			}
					
		}	
		else 
		{ // quiz is over and clicked the next button (which now displays 'Play Again?'
			quizOver = false; $('#iTimeShow').html('Time Remaining:'); iSelectedAnswer = [];
			$(document).find(".nextButton").text("Next Question");
			$answerButton.hide();
			resetQuiz();
			viewingAns = 1;
			displayCurrentQuestion();
			hideScore();
		}
    });
});



function timedCount()
	{
		if(c == 905) 
		{ 
			return false; 
		}
		
		var hours = parseInt( c / 3600 ) % 24;
		var minutes = parseInt( c / 60 ) % 60;
		var seconds = c % 60;
		var result = (hours < 10 ? "0" + hours : hours) + ":" + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds  < 10 ? "0" + seconds : seconds);            
		$('#timer').html(result);
		
		if(c == 0 )
		{			// Ends game if timer runs out
					displayScore();
					$('#iTimeShow').html('Quiz Time Is Up! This quiz will self destruct when the timer runs out');
					$('#timer').html("You scored: " + correctAnswers + " out of " + questions.length);
					c=900;
					$('#timer').html(result);
					$answerButton.show();
					$(document).find(".nextButton").text("Try Again?");
					quizOver = true;
					return false;
					
		}
		
		c = c - 1;
		t = setTimeout(function()
		{
			timedCount()
		},1000);
	}
	
	
// This displays the current question AND the choices
function displayCurrentQuestion() 
{

	if(c == 905) { c = 900; timedCount(); }
    //console.log("In display current Question");
    var question = questions[currentQuestion].question;
    var questionClass = $(document).find(".quizContainer > .question");
    var choiceList = $(document).find(".quizContainer > .choiceList");
    var numChoices = questions[currentQuestion].choices.length;
    // Set the questionClass text to the current question
    $(questionClass).text(question);
    // Remove all current <li> elements (if any)
    $(choiceList).find("li").remove();
    var choice;
	
	
    for (i = 0; i < numChoices; i++) 
	{
        choice = questions[currentQuestion].choices[i];
		
		if(iSelectedAnswer[currentQuestion] == i) {
			$('<li><input type="radio" class="radio-inline" checked="checked"  value=' + i + ' name="dynradio" />' +  ' ' + choice  + '</li>').appendTo(choiceList);
		} else {
			$('<li><input type="radio" class="radio-inline" value=' + i + ' name="dynradio" />' +  ' ' + choice  + '</li>').appendTo(choiceList);
		}
    }
}

function resetQuiz()
{
    currentQuestion = 0;
    correctAnswers = 0;
	hideScore();
	c = 900;
	//$answerButton.hide();
}

function displayScore()
{
    $(document).find(".quizContainer > .result").text("You scored: " + correctAnswers + " out of: " + questions.length);
	$(document).find(".quizContainer > .result").show();
	$answerButton.show();
}

function hideScore() 
{
    $(document).find(".result").hide();
}

// This displays the current question AND the choices
function viewResults() 
{

	if(currentQuestion == 32) { currentQuestion = 0;return false; }
	if(viewingAns == 1) { return false; }

	hideScore();
    var question = questions[currentQuestion].question;
    var questionClass = $(document).find(".quizContainer > .question");
    var choiceList = $(document).find(".quizContainer > .choiceList");
    var numChoices = questions[currentQuestion].choices.length;
    // Set the questionClass text to the current question
    $(questionClass).text(question);
    // Remove all current <li> elements (if any)
    $(choiceList).find("li").remove();
    var choice;
	
	// Showing answers - Each answer shows for 6 seconds before moving on to next answer
	for (i = 0; i < numChoices; i++) 
	{
        choice = questions[currentQuestion].choices[i];
		
		if(iSelectedAnswer[currentQuestion] == i) {
			if(questions[currentQuestion].correctAnswer == i) {
				$('<li style="border:2px solid green;margin-top:10px;"><input type="radio" class="radio-inline" checked="checked"  value=' + i + ' name="dynradio" />' +  ' ' + choice  + '</li>').appendTo(choiceList);
			} else {
				$('<li style="border:2px solid red;margin-top:10px;"><input type="radio" class="radio-inline" checked="checked"  value=' + i + ' name="dynradio" />' +  ' ' + choice  + '</li>').appendTo(choiceList);
			}
		} else {
			if(questions[currentQuestion].correctAnswer == i) {
				$('<li style="border:2px solid green;margin-top:10px;"><input type="radio" class="radio-inline" value=' + i + ' name="dynradio" />' +  ' ' + choice  + '</li>').appendTo(choiceList);
			} else {
				$('<li><input type="radio" class="radio-inline" value=' + i + ' name="dynradio" />' +  ' ' + choice  + '</li>').appendTo(choiceList);
			}
		}
    }
	
	currentQuestion++;
	
	setTimeout(function()
		{
			viewResults();
		},6000);
}
