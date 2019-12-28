import React from 'react';
import Record from './record.js';
import Activity from './activity.js'
import {activityList} from './activities.js';

export class Play extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activity: '',
      question: '',
      answer: '',
      value: '',
      begun: false,
      awaitingAnswer: false,
      userAnswer: '',
      totalQuestions: 0,
      totalCorrect: 0,
      wasCorrect: false,
      record: []
    }
    this.begin = this.begin.bind(this);
    this.setActivity = this.setActivity.bind(this);
    this.toggleWaiting = this.toggleWaiting.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.newQuestion = this.newQuestion.bind(this);
    this.newQuestionToggle = this.newQuestionToggle.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  begin() {
    this.setState({
      begun: true
    })
  }
  setActivity(input) {
    this.setState({
      activity: input
    });
  }
  toggleWaiting(currentState) {
    this.setState({
      awaitingAnswer: !currentState
    });
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  newQuestion(newQuestion,newAnswer) {
    this.setState({
      question: newQuestion,
      answer: newAnswer
    });
  }
  newQuestionToggle(current) {
    this.setState({newQuestion: !current})
  }
  onSubmit(answer) {
    this.setState({
      userAnswer: answer
    });
    this.setState({
      value: ''
    });
    console.log(this.state.value);
    this.setState((prevState) => {
      return {totalQuestions: prevState.totalQuestions + 1}
    })
    if (this.state.answer === this.state.value) {
      this.setState((prevState) => {
      return {
        totalCorrect: prevState.totalCorrect + 1,
        wasCorrect: true
      }
    });
    } else {
      this.setState({
        wasCorrect: false
      });
    }
  }
  componentDidMount() {
    var setup = [];
    for (var i = 0; i < activityList.length; i++) {
      setup.push([]);
      for (var j = 0; j < activityList[i].length; j++) {
        setup[i].push(0);
      }
    }
    this.setState({
      record: setup
    });
  }

  render() {
    var verdict = '';
    if (this.state.wasCorrect) {
      verdict = 'correct'
    } else {
      verdict = 'incorrect'
    }
    return (
      <div className='play'>
        <Activity
          name={this.props.activity}
          setActivity={this.setActivity}
          question={this.state.question}
          value={this.state.value}
          onSubmit={this.onSubmit}
          onChange={this.handleChange}
          awaitingAnswer={this.state.awaitingAnswer}
          onLoad={this.newQuestionToggle}
          begun={this.state.begun}
          begin={this.begin}
          toggleWaiting={this.toggleWaiting}
          newQuestion={this.newQuestion}
          newActivity={this.props.newActivity}
          loadNew={this.props.loadNew}
        />
        <Record
          totalCorrect={this.state.totalCorrect}
          totalQuestions={this.state.totalQuestions}
          answerText={this.state.userAnswer}
          wasCorrect={this.state.wasCorrect}
          verdict={verdict}
          record={this.state.record}
        />
      </div>
    );
  }
}

export default Play;
