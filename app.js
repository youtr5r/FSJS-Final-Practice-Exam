var questions = [{
    question: "1. With Pega’s Situational Layer Cake ™ approach, how do you configure a regional variation for Human Resources time off cases? ",
    choices: ["Create a rule for the variation and add the rule to the common layer of the application. ", "Create a rule for the variation and replace the existing HR time off rule in the application common layer", "Create a rule for the variation and add it to a secondary common application layer.", "Create a rule for the variation and add the rule to the layer for the region."],
    correctAnswer: 2
}, {
    question: "2. An organization has two lines of business: selling books for children and reselling college textbooks. The division selling books for children can use the same basic user interface (UI) as the reselling textbook with the exception of the payment methods. How do you apply the Situational Layer Cake™ in this scenario? ",
    choices: [" Place the UI rules in the base layer, and create a new layer for the payment rules for both lines of business.", "Place the UI rules in the base layer, and create a parallel base layer for the payments rules.", "Place the UI rules and generic t method rules in the base layer, and create a new layer for the division-specific payment rules.", " Place the UI rules in the base layer, and create a new layer for the payment rule for each division."],
    correctAnswer: 3
}, {
    question: "3. .You are designing a form for an online bookstore to display new arrivals. In the form, the book cover pictures are displayed in a row, like words in a sentence. Once the row reaches the full width of the screen, it wraps around to begin a new row. Which layout do you use to display the book cover pictures?  ",
    choices: ["Screen layout", "Column layout", "Dynamic layout", "Repeating layout"],
    correctAnswer: 2
}, {
    question: "4. An online sales application supports both laptop and mobile devices. You are configuring the application skin and you notice the responsive layout in the mobile device are NOT displaying views as stakeholders require. Which two options allow you to resolve this situation without negatively impacting the laptop users?",
    choices: ["Use the same application skin in all portals. Update the process to give mobile users a separate portal. ", " Adjust the responsive behavior in the skin for optimal viewing in the mobile portal. Do not use a skin for the mobile application version."],
    correctAnswer: 1
},{
	question: "5. You want your application to have consistent styling across portals. You want the background color of all buttons in your application to be blue. You want the background color of the buttons to be easily updated in case corporate branding changes. Which attribute do you modify to set the background color?",
    choices: ["The controls format", "The application skin", " The buttons format", "The background mixin"],
    correctAnswer: 2
},{
	question: "6. What are the minimum components of a user interface (UI) action set?",
    choices: ["Two actions and one event", "One action, one event, and one condition", "One action and one event", "One action and one condition"],
    correctAnswer: 3
},{
	question: "7. A reservation process allows customers to reserve a flight, hotel room, and rental car as part of a travel itinerary. Which configuration displays a check box to allow users to select travel insurance only if the itinerary includes a flight?",
    choices: ["A declare expression configured for forward chaining", " A visible when condition applied to the check box", " A validate rule applied to the flow action", " An action set applied to the check box"],
    correctAnswer: 1
},{
	question: "8. You are implementing a UI form collecting job applicant information. Users must provide values to certain fields before submitting the form. Which configuration adds asterisks to indicate the mandatory fields on the form? ",
    choices: [" Use a Validate rule to verify the mandatory fields have a value ", "Use multiple Validate rules for each mandatory field ", "Configure the mandatory fields as Required in the section rule", " Use an Edit Validate rule to verify if each of the mandatory properties has a value "],
    correctAnswer: 3
},{
	question: "9. A bookseller maintains a database of more than 10,000 book titles. You have been asked to configure a form that a allow users to select a book by title. How do you configure the form?",
    choices: ["Add a drop-down control arid source the data from the property value used in the control.", "Add a drop-down control and Source the data using a data page.", "Add an autocomplete control and Source the data using a data page.", "Add an autocomplete control and source the data from the clipboard work page."],
    correctAnswer: 2
}, {
	question: "10. An online car parts business wants customers to find parts easily. You are asked to implement the following requirement: Customer must select a make, model, and year to initiate a vehicle-specific search. How do you configure the data storage in the application to implement the requirement? ",
    choices: ["Configure a data page to store the make, model, and year data.", "Configure a connection to a system of record using the External Database Mapping", " Configure a local data storage of the make, model, and year of the vehicle. ", "Configure a static list of the make, model, and year vehicles."],
    correctAnswer: 1
}, {
	question: "11. A hotel booking application allows customers to change rooms after making a reservation. The status of each room in each hotel is stored on a data page sourced from a database table. Which two configuration options do you use to update the database table when a customer changes rooms?",
    choices: [" An editable data page containing the room information and  A savable data page containing the room information", "A When rule to trigger the database update and  A data transform to copy updates to the data page"],
    correctAnswer: 0
},  {
	question: "12. .You are configuring an external data source using the Integration Designer. You have the REST, Dev, Stage, and Prod endpoint URLs, and a name for the data source. What other information do your need to configure the external data source?",
    choices: [" A backup endpoint URL if the configured WL refuses to connect ", " The name of the database where the source data is stored ", "A plan for mapping the data and REST response fields ", "The data views using the external data source"],
    correctAnswer: 0
},
{
    question: "13. A data page holds product information and has the Reload if Older Than field set to 30 minutes. The data page is created at 7:43. The user then performs the following actions: 8:10 the user refreshes the product information 8:45 the user refreshes the product information At what time is the data page reloaded? ",
    choices: ["8:10", "8:45", "8:40", "8:13"],
    correctAnswer: 3
}, 
{
    question: "14. Which source do you select for a data page that contains the details of single record for a data type?",
    choices: ["Connector", "Report definition", " Data transform ", "Lookup"],
    correctAnswer: 1
}, {
    question: "15. An on-demand transportation application has a Conversation preference data type. When customers use the application a ride, they can specify their conversation preference: whether they would like to talk to their driver or if they would prefer silence. Company stakeholder are interested in analyzing the conversation the performance data. How is the Conversation preference data type sourced? ",
    choices: [" No system of record", " External system of record ", " Local system of record "],
    correctAnswer: 0
}, {
    question: "16. .You have created a new report that contains a list of employees, hire dates, and managers. You have been asked to display each manager in a row. Beneath each manager row you must list the manager’s employees and their hire dates.",
    choices: ["Summarize the manager column", "Group the manager column ", "Filter the manager column", "Sort the manager column"],
    correctAnswer: 1
}, {
    question: "17. You have been asked to create a pie chart that shows the number of cases each manager has created. A list report contains columns for manager name, case ID, and office. How do you configure the list report in order to create the pie chart?",
    choices: ["Summarize the manager name column. ", " Group the case ID column.", "Summarize the case ID column. ", "Group the manager name column."],
    correctAnswer: 2
},{
	question: "18.  A list report includes columns for purchase requests and regional cost centers. A manager wants the report to show the total number of purchase requests for each of the regional cost centers. How do you configure the report definition?",
    choices: ["Summarize the regional cost centers by count.", "Summarize the purchase requests column by count.", " Use the purchase requests column to group the cost centers.", "Filter the results so that the report includes only cost center and purchase requests."],
    correctAnswer: 1
},{
	question: "19.  A report contains columns for Customer, Billing Cycle, Credit Card, and Expiration Date. A manager requests that the report show only those customers who meet the following conditions: - The customer is on a monthly billing cycle - The credit card is either MoreCash or Vista - The credit card expires within Which set of filtering condition returns a report with the desired data?",
    choices: ["Credit Card equals MoreCash OR Credit Card equals Vista AND Billing Cycle is not quarterly AND Expiration Date is less than 60 days ", " Credit Card equals MoreCash OR Credit Card [equals Vista AND Billing Cycle equals monthly AND Expiration Date equals next 60 days ", " Credit Card equals MoreCash AND Credit Card equals Vista AND Billing Cycle equals monthly AND Expiration Date is 60 days greater than today ", "Credit Card equals MoreCash or Vista, Billing Cycle monthly, and Expiration Date equals next 60 days "],
    correctAnswer: 0
},{
	question: "20.  An online shopping application allows customers to select the item quantity of different goods and add items to the shopping cart. In the shopping cart, the application displays the price for each item type, indicates the quantity of each item type, calculate the total item prices, and calculate the total cost for all items in the shopping cart. The application pulls the price of each item type from a data page that references an external inventory management system. Select two unit tests useful in developing the shopping cart page",
    choices: ["Verify the data page has the correct item prices. and  Verify the data transform copies the correct value from the data page to the shopping cart page", "Verify the price fields are displayed in the correct format. and Verify the order total cost property is accurately calculated."],
    correctAnswer: 0
},{
	question: "21.  An online retailer allows customers to select a courier service for deliveries. The list of available courier services is drawn from a data type sourced in the Pega database. The Fulfillment department wants to allow local warehouse managers to add courier services to mitigate increases in delivery times and remove courier services that fail to meet delivery metrics. Which two options are required increase managers to update courier service records in production? ",
    choices: [" Enable rule checkout for the local wherehous manager  AND Define an approval process for adding and removing courier services.  ", "Create an access group for local wherehouse manager  AND Delegate the records for the courier service data type. "],
    correctAnswer: 1
},{
	question: "22. Which statement best describes the business value of delegation?  ",
    choices: ["Allows users to direct case processing as dictated by the circumstances of each case ", "Allows business users to contribute to application design by specifying requirements ", "Allows managers to adjust application behavior in production to meet changing business needs ", "Allows stakeholders to approve process improvements to drive operational efficiencies"],
    correctAnswer: 2
}, {
	question: "23. A customer calls to apply for a new bank account. The customer service representative (CSR) needs to perform an assignment named Select Type. During the discussion, the customer can request written information regarding different account types. Select the case lifecycle design that satisfies this requirement ",
    choices: ["Add a user view for requesting information to the Select Account Type assignment. ", "Add a case-wide optional action.", "Add an optional action to the stage that contains the Select Account Type assignment ", "Add a router to the Select Account Type assignment"],
    correctAnswer: 0
}, {
	question: "24.  The business process for an automobile insurance claim consists of the following phases: - Submission: The customer contacts a customer service representative (CSR) to file the claim. - Review: An adjuster reviews the claim, assesses the damages to each vehicle, and provides an estimate of the cost of repairs. - Repair: A third patty performs the repairs on each vehicle, communicating with the adjuster and customer as necessary. - Verification: After each vehicle repair, the adjuster closes the claim. According to Pega best practices, which phase can you implement as a child case? ",
    choices: ["Review", "Verification", "Repair", "Submission"],
    correctAnswer: 3
},  {
	question: "25. A survey is sent to a customer via email. How do you configure a solution to ensure the email includes the case ID for the survey? ",
    choices: ["Create a required field for the case ID that must be entered by a user during the case process prior to sending the survey. ", " Delegate a business rule so representatives can customize the email content as needed on a case-by case basis. ", "Use the Insert Property feature of a Send Email step to add the case ID when composing the message dialog. ", "Create a process using the Send Email step allowing representatives to quickly add the case ID to the email. "],
    correctAnswer: 1
}, {
	question: "26.  A life insurance company satellite office in various countries. Each satellite office has its own queue, Company policy require that life insurance underwriting is assignment to office based on the resident of the policy owner. Which routing approach supports this requirement? ",
    choices: ["Route the assignment to the correct work queue using skill-based routing. ", " Route the assignment to the correct work queue using an authority matrix. ", " Route the assignment to a specific underwrite based on business logic. ", " Route the assignment to the correct work queue bawd on business logic."],
    correctAnswer: 0
}, {
	question: "27. You are creating a case type to process job application for large corporation. Job application for security position require physical assessment in additional to the standard before or after the background check. How do you configure a case type lo achieve the required behavior? ",
    choices: [" Create a process for the physical assessment that is parallel to the background check process. ", "Create a process for the background check and an optional process for the physical assessment. ", " Create a process on one stage for the background check and a process on another stage for the physical assessment. ", "Create a process for the physical assessment that is followed by a process for the background check."],
    correctAnswer: 2
}, {
	question: "28. You are designing a medical claim case type and haw the following requirement: Method claims must be resolved within 5 days. To meet this requirement you need to set the___________ in the service level to 5 days. ",
    choices: ["passed deadline", "goal", "urgency", " deadline"],
    correctAnswer: 3
}, {
	question: "29. A requirement states: A customer can update an address at any point during case processing by performing the following steps. 1. The customer submits the new address. 2. The application verifies that the address matches postal service requirements. 3. The customer then approves the corrected address. How do you configure this requirement? ",
    choices: [" Add a button to each assignment to present the customer with a form to submit a new address.", " Add an alternate stage to the case life cycle to change the address.", "Add a case-wide optional process to the case workflow to perform the address change.", " Add a case-wide optional action to the workflow for the address submission. "],
    correctAnswer: 1
}, {
	question: "30. You configure a service level to adjust assignment urgency to 100 when the goal interval lapses. How does the assignment urgency impact the deadline and passed deadline intervals? ",
    choices: [" Urgency value continues to increment as configured.", " The user is notified that the maximum urgency has been reached.", "Urgency value remains at 100, but other service level processing continues.", "Service level processing is halted until the assignment is completed."],
    correctAnswer: 0
}, {
	question: "31. While running a process, you notice that a read-only field on a form contains a value. Which tool allows you to determine if a declare expression was used to calculate the value?  ",
    choices: [" Live UI ", " Clipboard tool ", " Declarative network ", "The Tracer"],
    correctAnswer: 3
}, {
	question: "32. You are developing a case type to process visa applications. As part of the process, applicants need to schedule an interview with the console. A child case is created for the interview process and assessment. Following the interview, it typically takes 48 hours for the to reach a decision. For the visa case to proceed to applicant notification, the interview case needs to be resolved. How do you configure a case to achieve the required behavior? ",
    choices: [" Add a Create step creates the interview child case, Following the step, add a Wait step that pauses the parent case unit 48 have elapsed.", " Add a Create step creates the interview child case, Following the step, add a Wait step that pauses the parent case unit the interview case reaches a status of Resolved and after 48 hours have elapsed.", " Add a Create step creates the interview child case, Following the step, add a Wait step that pauses the parent case unit the interview case status of Resolved.", "Add a Create step creates the interview child case, There is no need to add a wait step."],
    correctAnswer: 3
}, {
	question: "33. .A development learn plans to enhance functionality of an existing application by changing several user interface rules. The team would like to pilot the enhancements to small group of users before rolling the changes out to the entire user base. What approach maximizes reuse and maintainability?",
    choices: ["Place the updated rules Into a new ruleset and include the new ruleset in a new application.", "Place the updated rules into a new minor version of the ruleset and include the new ruleset version in a new application.", " Place the updated rules into a new minor version of the ruleset and include the new ruleset version In a new version of the application.", " Place the updated rules Into a new ruleset and include the new ruleset in a new version of the application. "],
    correctAnswer: 2
}, {
	question: "34.  You are configuring touting for a customer warranty service request. Ail warranty service requests are routed to the warranty resolution group except for warranty service requests for a beta release product that requires review by the vice president or service. How do you configure assignment routing to review warranty service requests? ",
    choices: ["Route the assignment to the skilled group for the beta release when the request is for the beta release. Otherwise, route the assignment to 'he warranty resolution group. ", " Route the assignment to the vice president of service when the request is for the beta release. Otherwise, route the assignment to the warranty resolution group. ", "Route the assignment to the vice president of service who routes assignments to the warranty resolution group as needed.", "Route the assignment 10 the warranty resolution group who sends an email notification to the vice president of service for the beta-release product."],
    correctAnswer: 0
}, {
	question: "35. Which two requirements demonstrate the need to configure correspondence? ",
    choices: ["Fax a new insurance claim to the auto repair shop. Phone a customer for additional information about the caw. ", "Assign a new insurance claim to a case worker to process. Text the customer with status changes in an insurance claim."],
    correctAnswer: 0
}, {
	question: "36.  How do you indicate the progress of a case towards resolution? ",
    choices: ["Design intent-driven user interfaces.", "Configure a case notes field to capture progress information ", "Update the case status on the appropriate steps.", " Apply service levels to the assignment steps."],
    correctAnswer: 1
}, {
	question: "37. Your online shopping application servers international customers. You need to define a data page that holds currency rates. All users accessing the application need to use the information. The Scope of this Page should be set to_______________. ",
    choices: [" Application", "Requestor", "Thread", "Node"],
    correctAnswer: 3
}, {
	question: "38. .While testing a form, you need to verify the contents of a data page in memory. Which tool do you use to view the current contents of the data page? ",
    choices: ["The Clipboard tool", "Case Designer ", "The Data Explorer", "Live UI"],
    correctAnswer: 0
}, {
	question: "39. .A user view includes a list of four urgency options selectable by radio buttons. How do you configure the selection list?",
    choices: ["Configure a field group with selectable urgency options.", " Configure a drop down field with selectable urgency options.", " Configure a picklist with radio buttons for the urgency options.", "Configure a Boolean field with selectable urgency options"],
    correctAnswer: 0
}, {
	question: "40. three situations can you use a data transform?",
    choices: [" To copy the first and last name properties into a single property value  To execute a flow action  To create the dependent property after case creation "],
    correctAnswer: 0
}, 
{
	question: "41.  A requirement lot a hotel reservation case type states that as customers change their room selection, the total cost of the reservation updates. How do you satisfy this requirement?",
    choices: ["Add a When condition to the room selection step.", " Configure a Validate rule for the room selection step.", " Define a declare expression for the total cost held. ", " Apply a Disable when condition to the total cost field."],
    correctAnswer: 2
}, {
	question: "42. How do you reference the State property on an Address page group with the index Home? ",
    choices: [".Address.Home.State ", ".Address(Home).State ", ".Home.State.Address", ".Home(Address).State"],
    correctAnswer: 1
}, {
	question: "43.  A customer wants to copy the contents of a previous order to their current order. What rule type do you use to copy the order contents? ",
    choices: [" Data page ", "Function", "Data transform", " Declare expression"],
    correctAnswer: 2
}, {
	question: "44.  You create an application for employees to submit timesheets. Employees enter work, vacation, and sick time for a particular week. On the entry form, employees see a summary of the total hours entered. After the employee submits the timesheet, the application displays remaining vacation and sick time for the employee. To configure the form where users enter hours, select the best configuration option to calculate the total hours for the week.  ",
    choices: [" Use a data transform. When the user enters the form, the data transform determines the sum of the work, vacation, and sick tune properties.", " Use declarative processing. When the value of any work, vacation, or sick time changes, the total hours change. ", "Use procedural processing. When the value of any work, vacation, or sick time changes and the user submits the form, the total hours change", " Use a When rote. When the value of any work, vacation, or sick time changes, the total hours change. "],
    correctAnswer: 1
}, {
	question: "45.  You create an employees to submit timesheets. Employees enter week work, vacation, and sick time for a particular week. On the entry form , employees see a summary of the total hours entered. After the employee submits the timesheet, the application displays remaining vacation and sick time for the employee. You configure the user view that displays remaining vacation and sick time. The balance calculates by subtracting the vacation time and sick time for the week from the current vacation and sick time balances. Which configuration option is used to summarize the remaining vacation and sick time? ",
    choices: [" Use pyDefault and pySetFieldDefaults. When the process invokes the data transforms, the remaining vacation and sick time calculate. ", "Use declarative processing. Whenever the vacation time or sick time entries change, the remaining vacation and sick time calculate.", "Use procedural processing with a data transform. Remaining vacation and sick time calculate after the user submits a timesheet. ", " Use a When rule. When the application references the remaining vacation and sick time, each value calculates. "],
    correctAnswer: 3
}, {
	question: "46.  A customer views a product available in multiple color options. The customer must select only one color for each product. Which UI control allow a developer to present the user with all color choices at once, without prompting or clicking, while ensuring that the user can only select one of the color options? ",
    choices: ["Text input ", " Radio buttons ", " Drop-down ", " Check box "],
    correctAnswer: 1
}, {
	question: "47.  Which two configurations do you use to validate the minimum age of a new potential customer in the CollectAccountInformation assignment step?",
    choices: [" Create and Edit Validate rule to check the customer age. AND Reference the Validate rule on the CollectAccountInformation flow action.  ", "Reference the Edit validate rule on the CollcctAccountlnformation assignment. AND  Create a Validate rule to check the customer age. ", " Reference the Edit Validate rule on the CollectAccountlnformation flow action. AND  Reference the Validate rule on the CollectAccountInformation assignment. "],
    correctAnswer: 2
}, {
	question: "48.  An application must validate postal codes for Canadian customers to match the pattern A1A 1A1, where A represents a letter and 1 represents a number. Which two configuration options allow you to ensure that a user provides a valid postal code? ",
    choices: [" Configure an edit validate rule to test that the entered postal code conforms to the required pattern. AND  Configure the postal code field as a text property with a required input field.", " Configure a validate rule to test that the entered postal code conforms to the required pattern. AND Configure a dropdown control to select the postal code based on the specified city and province"],
    correctAnswer: 1
}, {
	question: "49. A requirement states: The tax identification number must contain 10 digits. How do you configure the field to support this requirement?  ",
    choices: ["Set the minimum and maximum values to '10' in a text field- ", " Use a decimal property type and make the field required", " Configure a validate rule to test the tax identification number pattern.", " Use an edit validate rule that validates the tax identification number pattern."],
    correctAnswer: 3
}, {
	question: "50.  A process routes loan requests to a specific loan officer based on the type of loan. - If the loan is a mortgage, it is routed to Adam Ross. - If the loan is for an automobile, it is routed to Julia Samuels. - If the loan is an equity line, the case is routed to Don Smith. How do you configure a router to ensure the case advances to the correct loan officer? ",
    choices: [" Route the case to a work queue using a skilled router. ", " Route the case to a work queue using a When condition. ", "Route the case to a worklist using a skilled router. ", "Router the case to a worklist using a When condition. "],
    correctAnswer: 1
}, /*{
	question: "51.  ",
    choices: ["", "", "", ""],
    correctAnswer: 0
}, {
	question: "52.  ",
    choices: ["", "", "", ""],
    correctAnswer: 0
}, {
	question: "53.  ",
    choices: ["", "", "", ""],
    correctAnswer: 0
}, {
	question: "54.  ",
    choices: ["", "", "", ""],
    correctAnswer: 0
}, {
	question: "55.  ",
    choices: ["", "", "", ""],
    correctAnswer: 0
}, {
	question: "56.  ",
    choices: ["", "", "", ""],
    correctAnswer: 0
}, {
	question: "57.  ",
    choices: ["", "", "", ""],
    correctAnswer: 0
}, {
	question: "58.  ",
    choices: ["", "", "", ""],
    correctAnswer: 0
}, {
	question: "59.  ",
    choices: ["", "", "", ""],
    correctAnswer: 0
}, {
	question: "60.  ",
    choices: ["", "", "", ""],
    correctAnswer: 0
},*/

];

const $answerButton = $('.answerButton');
$answerButton.hide();
var currentQuestion = 0;
var viewingAns = 0;
var correctAnswers = 0;
var quizOver = false;
var iSelectedAnswer = [];
	var c=3600;
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
		if(c == 3605) 
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

	if(c == 3605) { c = 3600; timedCount(); }
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
	c = 3600;
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

	if(currentQuestion == 50) { currentQuestion = 0;return false; }
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
