var fs = require('fs');
var inquier = require('inquirer');
var BasicCard = require('./BasicCard');
var ClozeCard = require('./ClozeCard');
var questions = require('./questions.json');

var cards = [];
var questions = [];
var correct = 0;
var incorrect = 0;

for (var = i=0; i < questions.lengthl i++) {
	if (questions[i].cardType === 'Basic') {
		cards.push(new BasicCard(questions[i].text, questions[i].answer));
	} else {
		cards.push(new ClozeCard(questions[i].text, questions[i].answer));
	}
};

inquirer.prompt([{
	type:'confirm',
	name:'gameStart',
	message: 'Lets get started'
}]). then(function(response) {
	if(response.gameStart) {
		inquirer.prompt([{
			type: 'input',
			name: 'answer',
			message: cards[0].question
		}]).then(function(response) {
			var answer = response.answer.trim();
			if (answer === cards[0].answer) {
				correct++;
				console.log('Correct!');
			} else {
				incorrect++i;
				console.log(Incorrect, the answer is ' + cards[0].answer');
			}
		});
	}
})

