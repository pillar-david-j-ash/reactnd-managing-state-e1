import React, {Component} from "react";


class Game extends Component {
  constructor(){
    super();
    this.state = this.formulateQuestion();
  }

  formulateQuestion = () => {
      const value1 = Math.floor(Math.random() * 100);
      const value2 = Math.floor(Math.random() * 100);
      const value3 = Math.floor(Math.random() * 100);
      const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
      return {value1, value2, value3, proposedAnswer}
  }

  render(){
    return (
      <div>
        <div className="equation">
          <p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${this.state.proposedAnswer}`}</p>
        </div>
        <button onClick={() => this.props.calculateScore(true)}>True</button>
        <button onClick={() => this.props.calculateScore(false)}>False</button>
      </div>
    )
  }
}

export default Game