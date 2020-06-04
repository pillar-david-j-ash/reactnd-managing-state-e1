import React, {Component} from "react";

const value1 = Math.floor(Math.random() * 100);
const value2 = Math.floor(Math.random() * 100);
const value3 = Math.floor(Math.random() * 100);
const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;

class Game extends Component {
  render(){
    return (
      <div>
        <div className="equation">
          <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
        </div>
        <button onClick={() => this.props.calculateScore(true)}>True</button>
        <button onClick={() => this.props.calculateScore(false)}>False</button>
      </div>
    )
  }
}

export default Game