import React from 'react';
import Comp5 from './algs/arith/add/comp5.js';
import FivePlus from './algs/arith/add/fivePlus.js';
import Comp10 from './algs/arith/add/comp10.js';
import TenPlus from './algs/arith/add/tenPlus.js';
import AddNegs from './algs/arith/add/addNegs.js';
import FreeAdd from './algs/arith/add/freeAdd.js';
import Under10 from './algs/arith/sub/under10.js';
import Neg10 from './algs/arith/sub/neg10.js';
import SubNegs from './algs/arith/sub/subNegs.js';
import FreeSub from './algs/arith/sub/freeSub.js';
import Multiply from './algs/arith/mult/multiply.js';
import Multiply10s from './algs/arith/mult/multiply10s.js';
import MultiplyTH from './algs/arith/mult/multiplyTH.js';
import Multiply12 from './algs/arith/mult/multiply12.js';
import Multiply22 from './algs/arith/mult/multiply22.js';
import MultiplyNeg from './algs/arith/mult/multiplyNeg.js';
import Div1DF from './algs/arith/div/div1DF.js';
import Answer from './answerBox.js';

export class Activity extends React.Component {
  render() {
    if (this.props.name === "Complements of 5") {
      return (
        <div className="activity">
          <Comp5
            newQuestion={this.props.newQuestion}
            awaitingAnswer={this.props.awaitingAnswer}
            toggleWaiting={this.props.toggleWaiting}
            question={this.props.question}
            begin={this.props.begin}
            setActivity={this.props.setActivity}
            newActivity={this.props.newActivity}
            loadNew={this.props.loadNew}
            name={this.props.name}
          />
          <Answer
            value={this.props.value}
            onSubmit={this.props.onSubmit}
            onChange={this.props.onChange}
            begun={this.props.begun}
            awaitingAnswer={this.props.awaitingAnswer}
            toggleWaiting={this.props.toggleWaiting}
          />
        </div>
      );
    } else if (this.props.name === "5+") {
      return (
        <div className="activity">
          <FivePlus
            newQuestion={this.props.newQuestion}
            awaitingAnswer={this.props.awaitingAnswer}
            toggleWaiting={this.props.toggleWaiting}
            question={this.props.question}
            begin={this.props.begin}
            setActivity={this.props.setActivity}
            newActivity={this.props.newActivity}
            loadNew={this.props.loadNew}
            name={this.props.name}
          />
          <Answer
            value={this.props.value}
            onSubmit={this.props.onSubmit}
            onChange={this.props.onChange}
            begun={this.props.begun}
            awaitingAnswer={this.props.awaitingAnswer}
            toggleWaiting={this.props.toggleWaiting}
          />
        </div>
      );
    } else if (this.props.name === "Complements of 10") {
      return (
        <div className="activity">
          <Comp10
            newQuestion={this.props.newQuestion}
            awaitingAnswer={this.props.awaitingAnswer}
            toggleWaiting={this.props.toggleWaiting}
            question={this.props.question}
            begin={this.props.begin}
            setActivity={this.props.setActivity}
            newActivity={this.props.newActivity}
            loadNew={this.props.loadNew}
            name={this.props.name}
          />
          <Answer
            value={this.props.value}
            onSubmit={this.props.onSubmit}
            onChange={this.props.onChange}
            begun={this.props.begun}
            awaitingAnswer={this.props.awaitingAnswer}
            toggleWaiting={this.props.toggleWaiting}
          />
        </div>
      );
    } else if (this.props.name === "10+") {
      return (
        <div className="activity">
          <TenPlus
            newQuestion={this.props.newQuestion}
            awaitingAnswer={this.props.awaitingAnswer}
            toggleWaiting={this.props.toggleWaiting}
            question={this.props.question}
            begin={this.props.begin}
            setActivity={this.props.setActivity}
            newActivity={this.props.newActivity}
            loadNew={this.props.loadNew}
            name={this.props.name}
          />
          <Answer
            value={this.props.value}
            onSubmit={this.props.onSubmit}
            onChange={this.props.onChange}
            begun={this.props.begun}
            awaitingAnswer={this.props.awaitingAnswer}
            toggleWaiting={this.props.toggleWaiting}
          />
        </div>
      );
    } else if (this.props.name === "Addition of Negatives") {
      return (
        <div className="activity">
          <AddNegs
            newQuestion={this.props.newQuestion}
            awaitingAnswer={this.props.awaitingAnswer}
            toggleWaiting={this.props.toggleWaiting}
            question={this.props.question}
            begin={this.props.begin}
            setActivity={this.props.setActivity}
            newActivity={this.props.newActivity}
            loadNew={this.props.loadNew}
            name={this.props.name}
          />
          <Answer
            value={this.props.value}
            onSubmit={this.props.onSubmit}
            onChange={this.props.onChange}
            begun={this.props.begun}
            awaitingAnswer={this.props.awaitingAnswer}
            toggleWaiting={this.props.toggleWaiting}
          />
        </div>
      );
    } else if (this.props.name === "Free Addition") {
      return (
        <div className="activity">
          <FreeAdd
            newQuestion={this.props.newQuestion}
            awaitingAnswer={this.props.awaitingAnswer}
            toggleWaiting={this.props.toggleWaiting}
            question={this.props.question}
            begin={this.props.begin}
            setActivity={this.props.setActivity}
            newActivity={this.props.newActivity}
            loadNew={this.props.loadNew}
            name={this.props.name}
          />
          <Answer
            value={this.props.value}
            onSubmit={this.props.onSubmit}
            onChange={this.props.onChange}
            begun={this.props.begun}
            awaitingAnswer={this.props.awaitingAnswer}
            toggleWaiting={this.props.toggleWaiting}
          />
        </div>
      );
    } else if (this.props.name === "10-") {
      return (
        <div className="activity">
          <Under10
            newQuestion={this.props.newQuestion}
            awaitingAnswer={this.props.awaitingAnswer}
            toggleWaiting={this.props.toggleWaiting}
            question={this.props.question}
            begin={this.props.begin}
            setActivity={this.props.setActivity}
            newActivity={this.props.newActivity}
            loadNew={this.props.loadNew}
            name={this.props.name}
          />
          <Answer
            value={this.props.value}
            onSubmit={this.props.onSubmit}
            onChange={this.props.onChange}
            begun={this.props.begun}
            awaitingAnswer={this.props.awaitingAnswer}
            toggleWaiting={this.props.toggleWaiting}
          />
        </div>
      );
    } else if (this.props.name === "-10") {
      return (
        <div className="activity">
          <Neg10
            newQuestion={this.props.newQuestion}
            awaitingAnswer={this.props.awaitingAnswer}
            toggleWaiting={this.props.toggleWaiting}
            question={this.props.question}
            begin={this.props.begin}
            setActivity={this.props.setActivity}
            newActivity={this.props.newActivity}
            loadNew={this.props.loadNew}
            name={this.props.name}
          />
          <Answer
            value={this.props.value}
            onSubmit={this.props.onSubmit}
            onChange={this.props.onChange}
            begun={this.props.begun}
            awaitingAnswer={this.props.awaitingAnswer}
            toggleWaiting={this.props.toggleWaiting}
          />
        </div>
      );
    } else if (this.props.name === "Subtraction of Negatives") {
      return (
        <div className="activity">
          <SubNegs
            newQuestion={this.props.newQuestion}
            awaitingAnswer={this.props.awaitingAnswer}
            toggleWaiting={this.props.toggleWaiting}
            question={this.props.question}
            begin={this.props.begin}
            setActivity={this.props.setActivity}
            newActivity={this.props.newActivity}
            loadNew={this.props.loadNew}
            name={this.props.name}
          />
          <Answer
            value={this.props.value}
            onSubmit={this.props.onSubmit}
            onChange={this.props.onChange}
            begun={this.props.begun}
            awaitingAnswer={this.props.awaitingAnswer}
            toggleWaiting={this.props.toggleWaiting}
          />
        </div>
      );
    } else if (this.props.name === "Free Subtraction") {
      return (
        <div className="activity">
          <FreeSub
            newQuestion={this.props.newQuestion}
            awaitingAnswer={this.props.awaitingAnswer}
            toggleWaiting={this.props.toggleWaiting}
            question={this.props.question}
            begin={this.props.begin}
            setActivity={this.props.setActivity}
            newActivity={this.props.newActivity}
            loadNew={this.props.loadNew}
            name={this.props.name}
          />
          <Answer
            value={this.props.value}
            onSubmit={this.props.onSubmit}
            onChange={this.props.onChange}
            begun={this.props.begun}
            awaitingAnswer={this.props.awaitingAnswer}
            toggleWaiting={this.props.toggleWaiting}
          />
        </div>
      );
    } else if (this.props.name === "Times Tables up to 10") {
      return (
        <div className="activity">
          <Multiply
            newQuestion={this.props.newQuestion}
            awaitingAnswer={this.props.awaitingAnswer}
            toggleWaiting={this.props.toggleWaiting}
            question={this.props.question}
            begin={this.props.begin}
            setActivity={this.props.setActivity}
            newActivity={this.props.newActivity}
            loadNew={this.props.loadNew}
            name={this.props.name}
          />
          <Answer
            value={this.props.value}
            onSubmit={this.props.onSubmit}
            onChange={this.props.onChange}
            begun={this.props.begun}
            awaitingAnswer={this.props.awaitingAnswer}
            toggleWaiting={this.props.toggleWaiting}
          />
        </div>
      );
    } else if (this.props.name === "Powers of 10") {
      return (
        <div className="activity">
          <Multiply10s
            newQuestion={this.props.newQuestion}
            awaitingAnswer={this.props.awaitingAnswer}
            toggleWaiting={this.props.toggleWaiting}
            question={this.props.question}
            begin={this.props.begin}
            setActivity={this.props.setActivity}
            newActivity={this.props.newActivity}
            loadNew={this.props.loadNew}
            name={this.props.name}
          />
          <Answer
            value={this.props.value}
            onSubmit={this.props.onSubmit}
            onChange={this.props.onChange}
            begun={this.props.begun}
            awaitingAnswer={this.props.awaitingAnswer}
            toggleWaiting={this.props.toggleWaiting}
          />
        </div>
      );
    } else if (this.props.name === "Multiplying by Tens and Hundreds") {
      return (
        <div className="activity">
          <MultiplyTH
            newQuestion={this.props.newQuestion}
            awaitingAnswer={this.props.awaitingAnswer}
            toggleWaiting={this.props.toggleWaiting}
            question={this.props.question}
            begin={this.props.begin}
            setActivity={this.props.setActivity}
            newActivity={this.props.newActivity}
            loadNew={this.props.loadNew}
            name={this.props.name}
          />
          <Answer
            value={this.props.value}
            onSubmit={this.props.onSubmit}
            onChange={this.props.onChange}
            begun={this.props.begun}
            awaitingAnswer={this.props.awaitingAnswer}
            toggleWaiting={this.props.toggleWaiting}
          />
        </div>
      );
    } else if (this.props.name === "Multiplying 1- and 2-Digit Numbers") {
      return (
        <div className="activity">
          <Multiply12
            newQuestion={this.props.newQuestion}
            awaitingAnswer={this.props.awaitingAnswer}
            toggleWaiting={this.props.toggleWaiting}
            question={this.props.question}
            begin={this.props.begin}
            setActivity={this.props.setActivity}
            newActivity={this.props.newActivity}
            loadNew={this.props.loadNew}
            name={this.props.name}
          />
          <Answer
            value={this.props.value}
            onSubmit={this.props.onSubmit}
            onChange={this.props.onChange}
            begun={this.props.begun}
            awaitingAnswer={this.props.awaitingAnswer}
            toggleWaiting={this.props.toggleWaiting}
          />
        </div>
      );
    } else if (this.props.name === "Multiplying 2-Digit Numbers") {
      return (
        <div className="activity">
          <Multiply22
            newQuestion={this.props.newQuestion}
            awaitingAnswer={this.props.awaitingAnswer}
            toggleWaiting={this.props.toggleWaiting}
            question={this.props.question}
            begin={this.props.begin}
            setActivity={this.props.setActivity}
            newActivity={this.props.newActivity}
            loadNew={this.props.loadNew}
            name={this.props.name}
          />
          <Answer
            value={this.props.value}
            onSubmit={this.props.onSubmit}
            onChange={this.props.onChange}
            begun={this.props.begun}
            awaitingAnswer={this.props.awaitingAnswer}
            toggleWaiting={this.props.toggleWaiting}
          />
        </div>
      );
    } else if (this.props.name === "Multiplying by Negative Numbers") {
      return (
        <div className="activity">
          <MultiplyNeg
            newQuestion={this.props.newQuestion}
            awaitingAnswer={this.props.awaitingAnswer}
            toggleWaiting={this.props.toggleWaiting}
            question={this.props.question}
            begin={this.props.begin}
            setActivity={this.props.setActivity}
            newActivity={this.props.newActivity}
            loadNew={this.props.loadNew}
            name={this.props.name}
          />
          <Answer
            value={this.props.value}
            onSubmit={this.props.onSubmit}
            onChange={this.props.onChange}
            begun={this.props.begun}
            awaitingAnswer={this.props.awaitingAnswer}
            toggleWaiting={this.props.toggleWaiting}
          />
        </div>
      );
    } else if (this.props.name === "Division with 1-Digit Factors") {
      return (
        <div className="activity">
          <Div1DF
            newQuestion={this.props.newQuestion}
            awaitingAnswer={this.props.awaitingAnswer}
            toggleWaiting={this.props.toggleWaiting}
            question={this.props.question}
            begin={this.props.begin}
            setActivity={this.props.setActivity}
            newActivity={this.props.newActivity}
            loadNew={this.props.loadNew}
            name={this.props.name}
          />
          <Answer
            value={this.props.value}
            onSubmit={this.props.onSubmit}
            onChange={this.props.onChange}
            begun={this.props.begun}
            awaitingAnswer={this.props.awaitingAnswer}
            toggleWaiting={this.props.toggleWaiting}
          />
        </div>
      );
    } else if (this.props.name === '') {
      return <p>Select an activity to get started.</p>
    } else {
      return <p>This activity hasn't been implemented yet</p>
    }
  }
}

export default Activity;
