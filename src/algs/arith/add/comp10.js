import React from 'react';
import Question from './../../../question.js';

//Number that add to 10
export class Comp10 extends React.Component {
  render() {
    var question = this.props.question;
    if (!this.props.awaitingAnswer || this.props.newActivity) {
      while (this.props.question === question)  {
        var number1 = Math.ceil(Math.random()*10);
        var number2 = 10 - number1;
        question = number1.toString() + ' + ' + number2.toString() + ' = ?';
      }
      var answer = number1 + number2;
      this.props.toggleWaiting(this.props.awaitingAnswer);
      this.props.newQuestion(question,answer.toString());
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

export default Comp10;
