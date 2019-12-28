import React from 'react';
import Question from './../../../question.js';

//Subtraction with answers between -10 and 0
export class Neg10 extends React.Component {
  render() {
    var question = this.props.question;
    if (!this.props.awaitingAnswer || this.props.newActivity) {
      while (this.props.question === question)  {
        var number1 = 1 + Math.floor(Math.random()*10);
        var number2 = 0;
        while (number1 - number2 >= 0) {
          number2 = Math.ceil(Math.random()*(21-number1));
        }
        question = number1.toString() + ' - ' + number2.toString() + ' = ?'
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

export default Neg10;
