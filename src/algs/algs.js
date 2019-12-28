import React from 'react';
import Question from './question.js';
import Controls from './controls.js';

//ADDITION
//Numbers that add to 5
export class Comp5 extends React.Component {
  render() {
    this.props.newActivity ? console.log('true') : console.log('false');
    var question = this.props.question;
    if (!this.props.awaitingAnswer || this.props.newActivity) {
      while (this.props.question === question) {
        var number1 = Math.ceil(Math.random()*5);
        var number2 = 5 - number1;
        question = number1.toString() + ' + ' + number2.toString() + ' = ?';
      }
      var answer = number1 + number2;
      this.props.toggleWaiting(this.props.awaitingAnswer);
      this.props.newQuestion(question,answer.toString());
      this.props.begin();
      this.props.loadNew();
    }
    question = '';
    return (
      <div>
        <Question
          name={this.props.name}
          question={this.props.question}
        />
      </div>
    );
  }
}
//Numbers that add to between 5 and 10
export class FivePlus extends React.Component {
  render() {
    var question = this.props.question;
    if (!this.props.awaitingAnswer || this.props.newActivity) {
      while (this.props.question === question)  {
        var number1 = Math.ceil(Math.random()*5)
        var number2 = 0
        while (number1 + number2 <= 5) {
          number2 = Math.ceil(Math.random()*5)
        }
        question = number1.toString() + ' + ' + number2.toString() + ' = ?';
      }
      var answer = number1 + number2;
      this.props.toggleWaiting(this.props.awaitingAnswer);
      this.props.newQuestion(question,answer.toString());
      this.props.begin();
      this.props.loadNew();
    }
    question = '';
    return (
      <div>
        <Question
          name={this.props.name}
          question={this.props.question}
        />
      </div>
    );
  }
}
//Number that add to 10
export class Comp10 extends React.Component {
  render() {
    var question = this.props.question;
    if (!this.props.awaitingAnswer || this.props.newActivity) {
      while (this.props.question === question)  {
        var number1 = Math.ceil(Math.random()*10);
        var number2 = 10 - number1;
        question = number1.toString() + ' + ' + number2.toString() + ' = ?';
      }
      var answer = number1 + number2;
      this.props.toggleWaiting(this.props.awaitingAnswer);
      this.props.newQuestion(question,answer.toString());
      this.props.begin();
      this.props.loadNew();
    }
    question = '';
    return (
      <div>
        <Question
          name={this.props.name}
          question={this.props.question}
        />
      </div>
    );
  }
}
//Number that add to between 10 and 20
export class TenPlus extends React.Component {
  render() {
    var question = this.props.question;
    if (!this.props.awaitingAnswer || this.props.newActivity) {
      while (this.props.question === question)  {
        var number1 = Math.ceil(Math.random()*10)
        var number2 = 0
        while (number1 + number2 <= 10) {
          number2 = Math.ceil(Math.random()*10)
        }
        question = number1.toString() + ' + ' + number2.toString() + ' = ?'
      }
      var answer = number1 + number2;
      this.props.toggleWaiting(this.props.awaitingAnswer);
      this.props.newQuestion(question,answer.toString());
      this.props.begin();
      this.props.loadNew();
    }
    question = '';
    return (
      <div>
        <Question
          name={this.props.name}
          question={this.props.question}
        />
      </div>
    );
  }
}
//Adding numbers, including negatives, between -20 and 20
export class AddNegs extends React.Component {
  render() {
    var question = this.props.question;
    if (!this.props.awaitingAnswer || this.props.newActivity) {
      while (this.props.question === question)  {
        var number1 = Math.ceil(Math.random()*20)
        var number2 = Math.ceil(Math.random()*20)
        var test = Math.random()
        if (test<0.334) {
          number1 *= -1;
        } else if (test<0.667) {
          number2 *= -1;
        } else {
          number1 *= -1;
          number2 *= -1;
        }
        question = number1.toString() + ' + ' + number2.toString() + ' = ?'
      }
      var answer = number1 + number2;
      this.props.toggleWaiting(this.props.awaitingAnswer);
      this.props.newQuestion(question,answer.toString());
      this.props.begin();
      this.props.loadNew();
    }
    question = '';
    return (
      <div>
        <Question
          name={this.props.name}
          question={this.props.question}
        />
      </div>
    );
  }
}
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

//SUBTRACTION
//Subtraction of numbers under 10 from numbers between 10 and 20
export class Under10 extends React.Component {
  render() {
    var question = this.props.question;
    if (!this.props.awaitingAnswer || this.props.newActivity) {
      while (this.props.question === question) {
        var number1 = 10 + Math.ceil(Math.random()*9);
        var number2 = 0;
        while (number1 - number2 >= 10) {
          number2 = Math.ceil(Math.random()*10);
        }
        question = number1 + ' - ' + number2.toString() + ' = ?'
      }
      var answer = number1 - number2;
      this.props.toggleWaiting(this.props.awaitingAnswer);
      this.props.newQuestion(question,answer.toString());
      if (!this.props.begun) {
        this.props.begin();
      }
      if (this.props.newActivity) {
        this.props.loadNew();
      }
    }
    question = '';
    return (
      <div>
        <Question
          name={this.props.name}
          question={this.props.question}
        />
      </div>
    );
  }
}
//Subtraction with answers between -10 and 0
export class Neg10 extends React.Component {
  render() {
    var question = this.props.question;
    if (!this.props.awaitingAnswer || this.props.newActivity) {
      while (this.props.question === question)  {
        var number1 = 1 + Math.floor(Math.random()*10);
        var number2 = 0;
        while (number1 - number2 >= 0) {
          number2 = Math.ceil(Math.random()*(21-number1));
        }
        question = number1.toString() + ' - ' + number2.toString() + ' = ?'
      }
      var answer = number1 - number2;
      this.props.toggleWaiting(this.props.awaitingAnswer);
      this.props.newQuestion(question,answer.toString());
      if (!this.props.begun) {
        this.props.begin();
      }
      if (this.props.newActivity) {
        this.props.loadNew();
      }
    }
    question = '';
    return (
      <div>
        <Question
          name={this.props.name}
          question={this.props.question}
        />
      </div>
    );
  }
}
//Subtraction of negative numbers
export class SubNegs extends React.Component {
  render() {
    var question = this.props.question;
    if (!this.props.awaitingAnswer || this.props.newActivity) {
      while (this.props.question === question)  {
        var number1 = Math.ceil(Math.random()*10);
        var number2 = Math.floor(Math.random()*-10);
        question = number1.toString() + ' - ' + number2.toString() + ' = ?'
      }
      var answer = number1 - number2;
      this.props.toggleWaiting(this.props.awaitingAnswer);
      this.props.newQuestion(question,answer.toString());
      this.props.begin();
      this.props.loadNew();
    }
    question = '';
    return (
      <div>
        <Question
          name={this.props.name}
          question={this.props.question}
        />
      </div>
    );
  }
}
//Free subtraction exercise
export class FreeSub extends React.Component {
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
      while (this.props.question === question) {
        var number1 = parseInt(this.state.min) + Math.floor(Math.random()*(this.state.max+1-this.state.min));
        var number2 = parseInt(this.state.min) + Math.floor(Math.random()*(this.state.max+1-this.state.min));
        question = number1 + ' - ' + number2 + ' = ?';
      }
    var answer = number1 - number2;
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

//MULTIPLICATION
//Multiplication of numbers between 0 and 9, with the option of specifying one of the Numbers
export class Multiply extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: null
    }
    this.setNumber = this.setNumber.bind(this);
  }
  setNumber(event) {
    this.setState({number: event.target.value});
  }
  render() {
    var question = this.props.question;
    if (!this.props.awaitingAnswer || this.props.newActivity) {
      while (this.props.question === question)  {
        var number1 = Math.floor(Math.random()*10);
        var number2 = this.state.number;
        if (!number2) {
          number2 = Math.floor(Math.random()*10);
        }
        if (Math.random() < 0.5) {
          question = number1.toString() + ' x ' + number2.toString() + ' = ?';
        } else {
          question = number2.toString() + ' x ' + number1.toString() + ' = ?';
        }
      }
      var answer = number1 * number2;
      this.props.toggleWaiting(this.props.awaitingAnswer);
      this.props.newQuestion(question,answer.toString());
      this.props.begin();
      this.props.loadNew();
    }
    question = '';
    return (
      <div>
        <Controls
          case="multiply"
          factor={this.state.number}
          onChangeFactor={this.setNumber}
        />
        <Question
          name={this.props.name}
          question={this.props.question}
        />
      </div>
    );
  }
}
//Multiplication by powers of 10
export class Multiply10s extends React.Component {
  render() {
    var question = this.props.question;
    if (!this.props.awaitingAnswer || this.props.newActivity) {
      while (this.props.question === question)  {
        var number1 = Math.floor(Math.random()*10);
        var number2 = 10**Math.ceil(Math.random()*6);
        if (Math.random() < 0.5) {
          question = number1.toString() + ' x ' + number2.toString() + ' = ?';
        } else {
          question = number2.toString() + ' x ' + number1.toString() + ' = ?';
        }
      }
      var answer = number1 * number2;
      this.props.toggleWaiting(this.props.awaitingAnswer);
      this.props.newQuestion(question,answer.toString())
      this.props.begin();
      this.props.loadNew();
    }
    question = '';
    return (
      <div>
        <Question
          name={this.props.name}
          question={this.props.question}
        />
      </div>
    );
  }
}
//Multiplication of digits 0-9 by multiples of 10 and 100
export class MultiplyTH extends React.Component {
  render() {
    var question = this.props.question;
    if (!this.props.awaitingAnswer || this.props.newActivity) {
      while (this.props.question === question)  {
        var number1 = Math.floor(Math.random()*10);
        var number2 = Math.ceil(Math.random()*10);
        if (Math.random() < 0.5) {
          number2 *= 10;
        } else {
          number2 *= 100;
        }
        if (Math.random() < 0.5) {
          question = number1.toString() + ' x ' + number2.toString() + ' = ?';
        } else {
          question = number2.toString() + ' x ' + number1.toString() + ' = ?';
        }
      }
      var answer = number1 * number2;
      this.props.toggleWaiting(this.props.awaitingAnswer);
      this.props.newQuestion(question,answer.toString())
      this.props.begin();
      this.props.loadNew();
    }
    question = '';
    return (
      <div>
        <Question
          name={this.props.name}
          question={this.props.question}
        />
      </div>
    );
  }
}
//Multiplication of 1- and 2-digit numbers
export class Multiply12 extends React.Component {
  render() {
    var question = this.props.question;
    if (!this.props.awaitingAnswer || this.props.newActivity) {
      while (this.props.question === question)  {
        var number1 = Math.floor(Math.random()*10);
        var number2 = Math.ceil(Math.random()*99);
        if (Math.random() < 0.5) {
          question = number1.toString() + ' x ' + number2.toString() + ' = ?';
        } else {
          question = number2.toString() + ' x ' + number1.toString() + ' = ?';
        }
      }
      var answer = number1 * number2;
      this.props.toggleWaiting(this.props.awaitingAnswer);
      this.props.newQuestion(question,answer.toString())
      this.props.begin();
      this.props.loadNew();
    }
    question = '';
    return (
      <div>
        <Question
          name={this.props.name}
          question={this.props.question}
        />
      </div>
    );
  }
}
//Multiplication of 1- and 2-digit numbers
export class Multiply22 extends React.Component {
  render() {
    var question = this.props.question;
    if (!this.props.awaitingAnswer || this.props.newActivity) {
      while (this.props.question === question)  {
        var number1 = Math.floor(Math.random()*99);
        var number2 = Math.ceil(Math.random()*99);
        if (Math.random() < 0.5) {
          question = number1.toString() + ' x ' + number2.toString() + ' = ?';
        } else {
          question = number2.toString() + ' x ' + number1.toString() + ' = ?';
        }
      }
      var answer = number1 * number2;
      this.props.toggleWaiting(this.props.awaitingAnswer);
      this.props.newQuestion(question,answer.toString())
      this.props.begin();
      this.props.loadNew();
    }
    question = '';
    return (
      <div>
        <Question
          name={this.props.name}
          question={this.props.question}
        />
      </div>
    );
  }
}
//Multiplication of positive and/or negative numbers
export class MultiplyNeg extends React.Component {
  render() {
    var question = this.props.question;
    if (!this.props.awaitingAnswer || this.props.newActivity) {
      while (this.props.question === question)  {
        var number1 = Math.floor(Math.random()*11);
        var number2 = Math.ceil(Math.random()*10);
        var test = Math.random();
        if (test < 0.5) {
          number1 *= -1;
        }
        number2 *= -1;
        if (Math.random() < 0.5) {
          question = number1.toString() + ' x ' + number2.toString() + ' = ?';
        } else {
          question = number2.toString() + ' x ' + number1.toString() + ' = ?';
        }
      }
      var answer = number1 * number2;
      this.props.toggleWaiting(this.props.awaitingAnswer);
      this.props.newQuestion(question,answer.toString())
      this.props.begin();
      this.props.loadNew();
    }
    question = '';
    return (
      <div>
        <Question
          name={this.props.name}
          question={this.props.question}
        />
      </div>
    );
  }
}

//DIVISION
//Divison of numbers with 1-digit factors
export class Div1DF extends React.Component {
  render() {
    var question = this.props.question;
    if (!this.props.awaitingAnswer || this.props.newActivity) {
      while (this.props.question === question)  {
        var number1 = Math.ceil(Math.random()*10);
        var number2 = Math.ceil(Math.random()*10);
        question = (number1*number2).toString() + ' ÷ ' + number2.toString() + ' = ?';
      }
      var answer = number1;
      this.props.toggleWaiting(this.props.awaitingAnswer);
      this.props.newQuestion(question,answer.toString())
      this.props.begin();
      this.props.loadNew();
    }
    question = '';
    return (
      <div>
        <Question
          name={this.props.name}
          question={this.props.question}
        />
      </div>
    );
  }
}

export default {Comp5, FivePlus, Comp10, TenPlus, AddNegs, FreeAdd, Under10, Neg10, FreeSub, Multiply, Multiply10s, MultiplyTH, Multiply12, Multiply22, Div1DF};
