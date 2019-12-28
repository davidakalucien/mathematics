import React from 'react';
import Question from './../../../question.js';
import Controls from './../../../controls.js';

//Multiplication of numbers between 0 and 9, with the option of specifying one of the Numbers
export class Multiply extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: null
    }
    this.setNumber = this.setNumber.bind(this);
  }
  setNumber(event) {
    this.setState({number: event.target.value});
  }
  render() {
    var question = this.props.question;
    if (!this.props.awaitingAnswer || this.props.newActivity) {
      while (this.props.question === question)  {
        var number1 = Math.floor(Math.random()*10);
        var number2 = this.state.number;
        if (!number2) {
          number2 = Math.floor(Math.random()*10);
        }
        if (Math.random() < 0.5) {
          question = number1.toString() + ' x ' + number2.toString() + ' = ?';
        } else {
          question = number2.toString() + ' x ' + number1.toString() + ' = ?';
        }
      }
      var answer = number1 * number2;
      this.props.toggleWaiting(this.props.awaitingAnswer);
      this.props.newQuestion(question,answer.toString());
      this.props.begin();
      this.props.loadNew();
    }
    question = '';
    return (
      <div>
        <Controls
          case="multiply"
          factor={this.state.number}
          onChangeFactor={this.setNumber}
        />
        <Question
          name={this.props.name}
          question={this.props.question}
        />
      </div>
    );
  }
}

export default Multiply;
