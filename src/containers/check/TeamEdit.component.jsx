import React, { Component } from 'react';
import './Check.scss';


export default class TeamEdit extends Component  {
  render() {
    return (
      <div className="teamEdit">
          <input type="text" value={this.props.name} onChange={(e) => this.props.onNameChange(e.target.value)}></input>
      </div>
    );
  }
}
