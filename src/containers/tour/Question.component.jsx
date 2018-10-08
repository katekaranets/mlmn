import React, { Component } from 'react';

import './Tour.scss';


export default class Question extends Component  {

  render() {
    const question = this.props.question;

    return (
      <div className="question">
         <p>{question.cost}</p>
      </div>
    );
  }
}
