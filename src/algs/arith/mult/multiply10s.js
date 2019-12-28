import React from 'react';
import Question from './../../../question.js';

//Multiplication by powers of 10
export class Multiply10s extends React.Component {
  render() {
    var question = this.props.question;
    if (!this.props.awaitingAnswer || this.props.newActivity) {
      while (this.props.question === question)  {
        var number1 = Math.floor(Math.random()*10);
        var number2 = 10**Math.ceil(Math.random()*6);
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

export default Multiply10s;
