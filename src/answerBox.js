import React from 'react';

export class Answer extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(event) {
    this.props.onSubmit(this.props.value);
    this.props.toggleWaiting(this.props.awaitingAnswer);
    event.preventDefault();
  }
  buttonText = '';
  render() {
    if (this.props.begun) {
      this.buttonText = 'Lock it in';
    } else {
      this.buttonText = 'Start';
    }
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Answer:
          <input type="number" name="answer" value={this.props.value} onChange={this.props.onChange} />
        </label>
        <input type="submit" value={this.buttonText}/>
      </form>
    );
  }
}

export default Answer;
