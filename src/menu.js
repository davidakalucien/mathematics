import React from 'react';
import {Accordion} from 'react-bootstrap';
import ActivityList from './activityList.js';

export default class Menu extends React.Component {
  render () {
    return (
      <div className="selections">
        <Accordion defaultActiveKey='0' >
          <ActivityList topic="Addition" onClick={this.props.onClick} />
          <ActivityList topic="Subtraction" onClick={this.props.onClick} />
          <ActivityList topic="Multiplication" onClick={this.props.onClick} />
          <ActivityList topic="Division" onClick={this.props.onClick} />
        </Accordion>
      </div>
    );
  }
};
