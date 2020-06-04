import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Score from "./Score";

const value1 = Math.floor(Math.random() * 100);
const value2 = Math.floor(Math.random() * 100);
const value3 = Math.floor(Math.random() * 100);
const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;

class App extends Component {
  constructor() {
    super();
    this.state = {
      numCorrect: 0,
      numQuestions: 0,
    }
  }

  calculateScore = (isCorrect) => {
    if (isCorrect) {
      this.setState( previousState => ({
        numCorrect: previousState.numCorrect + 1
      }))
    }

    this.setState( previousState => ({
      numQuestions: previousState.numQuestions + 1
    }))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
          </div>
          <button onClick={ () => this.calculateScore(true)}>True</button>
          <button onClick={ () => this.calculateScore(false)}>False</button>
          <Score numCorrect={this.state.numCorrect} numQuestions={this.state.numQuestions}/>
        </div>
      </div>
    );
  }
}

export default App;
