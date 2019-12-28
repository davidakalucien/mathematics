import React from 'react';
import MButton from './menuButton.js';
import {Accordion, Button, Card} from 'react-bootstrap';
import {activityList} from './activities.js';

export class ActivityList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activities: activityList
    }
  }
  list = []
  key = 0;
  render() {
    if (this.props.topic === 'Addition') {
      this.list = this.state.activities[0];
    } else if (this.props.topic === 'Subtraction') {
      this.list = this.state.activities[1];
      this.key = 1;
    } else if (this.props.topic === 'Multiplication') {
      this.list = this.state.activities[2]
      this.key = 2;
    } else if (this.props.topic === 'Division') {
      this.list = this.state.activities[3]
      this.key = 3;
    } else {
      this.list = ['error']
    }
    return (
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey={this.key}>
              {this.props.topic}
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey={this.key}>
            <Card.Body>
            <ul className='activities'>
              {this.list.map((activity) => {
                return <li><MButton name={activity} onClick={this.props.onClick} /></li>
              })}
            </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
    );
  }
}

export default ActivityList;
