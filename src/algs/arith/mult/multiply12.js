import React from 'react';
import Question from './../../../question.js';

//Multiplication of 1- and 2-digit numbers
export class Multiply12 extends React.Component {
  render() {
    var question = this.props.question;
    if (!this.props.awaitingAnswer || this.props.newActivity) {
      while (this.props.question === question)  {
        var number1 = Math.floor(Math.random()*10);
        var number2 = Math.ceil(Math.random()*99);
        if (Math.random() < 0.5) {
          question = number1.toString() + ' x ' + number2.toString() + ' = ?';
        } else {
          question = number2.toString() + ' x ' + number1.toString() + ' = ?';
        }
      }
      var answer = number1 * number2;
      this.props.toggleWaiting(this.props.awaitingAnswer);
      this.props.newQuestion(question,answer.toString())
      this.props.begin();
      this.props.loadNew();
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

export default Multiply12;
