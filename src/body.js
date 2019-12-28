import React from 'react';
import Menu from './menu.js';
import Play from './play.js';

export class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activity: '',
      newActivity: true
    }
    this.loadNew = this.loadNew.bind(this);
  }
  handleNewActivity = (newActivity) => {
    if (this.state.activity !== newActivity) {
      this.setState({
        activity: newActivity,
        newActivity: true
      });
    }
  }
  loadNew() {
    this.setState({
      newActivity: false
    });
  }
  render() {
    return (
      <div className="total">
        <Menu onClick={this.handleNewActivity} />
        <Play
          activity={this.state.activity}
          newActivity={this.state.newActivity}
          loadNew={this.loadNew}
        />
      </div>
    );
  }
}

export default Body;
