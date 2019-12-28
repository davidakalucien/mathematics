import React from 'react';
import Question from './../../../question.js';

//Subtraction of numbers under 10 from numbers between 10 and 20
export class Under10 extends React.Component {
  render() {
    var question = this.props.question;
    if (!this.props.awaitingAnswer || this.props.newActivity) {
      while (this.props.question === question) {
        var number1 = 10 + Math.ceil(Math.random()*9);
        var number2 = 0;
        while (number1 - number2 >= 10) {
          number2 = Math.ceil(Math.random()*10);
        }
        question = number1 + ' - ' + number2.toString() + ' = ?'
      }
      var answer = number1 - number2;
      this.props.toggleWaiting(this.props.awaitingAnswer);
      this.props.newQuestion(question,answer.toString());
      if (!this.props.begun) {
        this.props.begin();
      }
      if (this.props.newActivity) {
        this.props.loadNew();
      }
    }
    question = '';
    return (
      <div>
        <Question
          name={this.props.name}
          question={this.props.question}
        />
      </div>
    );
  }
}

export default Under10;
