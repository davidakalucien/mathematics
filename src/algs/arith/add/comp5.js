import React from 'react';
import Question from './../../../question.js';

//Numbers that add to 5
export class Comp5 extends React.Component {
  render() {
    this.props.newActivity ? console.log('true') : console.log('false');
    var question = this.props.question;
    if (!this.props.awaitingAnswer || this.props.newActivity) {
      while (this.props.question === question) {
        var number1 = Math.ceil(Math.random()*5);
        var number2 = 5 - number1;
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

export default Comp5;
