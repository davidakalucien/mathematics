import React from 'react';
import Question from './../../../question.js';

//Adding numbers, including negatives, between -20 and 20
export class AddNegs extends React.Component {
  render() {
    var question = this.props.question;
    if (!this.props.awaitingAnswer || this.props.newActivity) {
      while (this.props.question === question)  {
        var number1 = Math.ceil(Math.random()*20)
        var number2 = Math.ceil(Math.random()*20)
        var test = Math.random()
        if (test<0.334) {
          number1 *= -1;
        } else if (test<0.667) {
          number2 *= -1;
        } else {
          number1 *= -1;
          number2 *= -1;
        }
        question = number1.toString() + ' + ' + number2.toString() + ' = ?'
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

export default AddNegs;
