import React, { Component } from 'react';



export default class TeamScore extends Component  {
  render() {
    return (
      <div className="teamScore">
          <label>{this.props.team.name}</label>
          <input type="text" value={this.props.team.score} onChange={(e) => this.props.onScoreChange(e.target.value)}></input>
      </div>
    );
  }
}
