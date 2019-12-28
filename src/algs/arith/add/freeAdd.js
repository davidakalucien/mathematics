import React from 'react';
import Question from './../../../question.js';
import Controls from './../../../controls.js';

//Free addition exercise
export class FreeAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      min: 1,
      max: 10,
    }
    this.onChangeMin = this.onChangeMin.bind(this);
    this.onChangeMax = this.onChangeMax.bind(this);
  }
  onChangeMin(event) {
    this.setState({min: event.target.value});
    if ((event.target.value > this.state.max) && parseInt(event.target.value)) {
      this.setState({max: event.target.value});
    }
  }
  onChangeMax(event) {
    this.setState({max: event.target.value});
    if ((event.target.value < this.state.min) && parseInt(event.target.value)) {
      this.setState({min: event.target.value});
    }
  }
  render() {
    var question = this.props.question;
    if (!this.props.awaitingAnswer || this.props.newActivity) {
      console.log('yiya boi');
      while (this.props.question === question) {
        var number1 = parseInt(this.state.min) + Math.ceil(Math.random()*this.state.max);
        var number2 = parseInt(this.state.min) + Math.ceil(Math.random()*this.state.max);
        if (this.state.allowNegs) {
          if (Math.random()<0.5) {
            number1 *= -1;
          }
          if (Math.random()<0.5) {
            number2 *= -1;
          }
        }
        question = number1 + ' + ' + number2 + ' = ?';
      }
    var answer = number1 + number2;
    this.props.toggleWaiting(this.props.awaitingAnswer);
    this.props.newQuestion(question,answer.toString())
    this.props.begin();
    this.props.loadNew();
    }
    question = '';
    return (
      <div>
        <Controls
          case='addSub'
          min={this.state.min}
          onChangeMin={this.onChangeMin}
          max={this.state.max}
          onChangeMax={this.onChangeMax}
        />
        <Question
          name={this.props.name}
          question={this.props.question}
        />
      </div>
    );
  }
}

export default FreeAdd;
