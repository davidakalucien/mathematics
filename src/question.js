import React from 'react';

export class Question extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <h2>{this.props.question}</h2>
      </div>
    );
  }
}

export default Question;
