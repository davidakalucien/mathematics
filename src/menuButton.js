import React from 'react';

export class MButton extends React.Component {
  render() {
    return (
      <button onClick={() => this.props.onClick(this.props.name)} className='activities'>{this.props.name}</button>
    );
  }
}

export default MButton;
