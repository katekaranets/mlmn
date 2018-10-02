import React, { Component } from 'react';
import { Link } from "react-router-dom";

import './Start.scss';

export default class Start extends Component {
  render() {
    return (
        <div className="startPage">
          <Link to="/check"><button className="btn start">Начать игру</button></Link>
        </div>
    );
  }
}

