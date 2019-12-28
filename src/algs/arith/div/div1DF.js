import React from 'react';
import Question from './../../../question.js';

//Divison of numbers with 1-digit factors
export class Div1DF extends React.Component {
  render() {
    var question = this.props.question;
    if (!this.props.awaitingAnswer || this.props.newActivity) {
      while (this.props.question === question)  {
        var number1 = Math.ceil(Math.random()*10);
        var number2 = Math.ceil(Math.random()*10);
        question = (number1*number2).toString() + ' ÷ ' + number2.toString() + ' = ?';
      }
      var answer = number1;
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

export default Div1DF;
