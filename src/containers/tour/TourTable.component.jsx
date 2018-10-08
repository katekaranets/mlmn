import React, { Component } from 'react';

import './Tour.scss';
import Category from './Category.component';


export default class TourTable extends Component  {
  render() {
      const categories = this.props.tour.categories;
    return (
      <div className="tourTable">
        {
            categories.map((category) => {
                return <Category category={category} key={category.id}/>
            })             
        }
      </div>
    );
  }
}
