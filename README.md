# JavaScriptQuiz
## Description
The goal of this project was to create a timed quiz, covering JavaScript fundamentals, that recorded a user's score and provided feedback messages each time they answered a question.

## Acceptance Criteria
1. Users are presented with a question upon starting the quiz, and the quiz timer begins.
2. When a user answers a question, they receive feedback (positive or negative) on their answer.
3. If a user answers correctly, they receive a point for that answer. 
4. If a user answers incorrectly, they receive a time penalty. (Time is subtracted from their current time remaining.)
5. The quiz ends whenever the user answers all available questions or their timer reaches 0.
6. The user is provided with their score and is prompted to enter their intials.
7. The user may view a list of current recorded scores.  

## Solution
To provide question and answer choices for this quiz, a question bank array was created within the JavaScript file. The array was a collection of objects, each containing the following name/value pairs:

* question
* answer
* correctAnswer

**Example of a question object Loop:** 
{
    question:  "Variables are made up of:",
    answer: ["a vowel and consonant", "an object and a location", "a name and a value"],
    correctAnswer: "a name and a value",
    },

Global variables were also created for the quiz timer (timer), the number of questions asked (questionCount), and the user's current score (currentScore). 



## Location
Use the following link to access the repository associated with this project: [Password Generator Repository](https://github.com/larrygjenkins/PasswordGenerator.git)

Use the following link to access the Password Generator application: [Password Generator Application](https://larrygjenkins.github.io/PasswordGenerator/)

## Example Images
Following is an image of the password generator before a new password is created:

![Password Generator application before new password created](./images/PasswordGeneratorBeforeImage.PNG)

Following is an image of the password generator after a new password is created:

![Password Generator application after new password created](./images/PasswordGeneratorAfterImage.PNG)