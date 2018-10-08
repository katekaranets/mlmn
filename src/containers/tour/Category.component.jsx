import React, { Component } from 'react';

import './Tour.scss';
import Question from './Question.component';


export default class Category extends Component  {
  render() {
    const category = this.props.category;
    return (
      <div className="category">
         <div>{category.name}</div>
         {
           category.questions.map((question) => {
              return <Question question={question} key={question.id}/>
           })
         }
      </div>
    );
  }
}
