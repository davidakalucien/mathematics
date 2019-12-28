import React from 'react';

export class Controls extends React.Component {
  render() {
    if (this.props.case === 'addSub') {
      return (
        <div className="controls">
          <p>
            Minimum:
            <input type="number" value={this.props.min} onChange={this.props.onChangeMin} />
          </p>
          <p>
            Maximum:
            <input type="number" value={this.props.max} onChange={this.props.onChangeMax} />
          </p>
        </div>
      );
    } else if (this.props.case === 'multiply') {
      return(
        <div className="controls">
          <p>
            Choose a factor (leave blank for random digits 0-9): <br />
            <input type="number" value={this.props.factor} onChange={this.props.onChangeFactor} />
          </p>
        </div>
      );
    } else {
      return(
        <p>error</p>
      );
    }
  }
}

export default Controls;
