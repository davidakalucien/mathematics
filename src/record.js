import React from 'react';
import {Fraction, toTex} from 'algebra.js';
import {Context, Node} from 'react-mathjax2';

function fraction(num,den) {
  const frac = new Fraction(num,den);
  return (
    <Context input="tex">
      <Node inline>
        {toTex(frac)}
      </Node>
    </Context>
  );
}

export class Record extends React.Component {
  render() {
    var successRate = Math.floor( (this.props.totalCorrect/this.props.totalQuestions) *100);
    return (
      <div className="record">
        {this.props.totalQuestions === 0 ? <p>You haven't answered any questions yet</p> : <span><p>You answered: {this.props.answerText} which is {this.props.verdict}.</p><p>You have answered {this.props.totalQuestions === 0 ? this.props.totalCorrect+' out of '+this.props.totalQuestions : fraction(this.props.totalCorrect,this.props.totalQuestions)} correctly, a success rate of { successRate ? successRate : '0' }%</p></span>}
      </div>
    );
  }
}

export default Record
