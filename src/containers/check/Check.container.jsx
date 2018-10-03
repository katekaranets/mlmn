import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux'

import TeamEdit from './TeamEdit.component';
import { setTeamName } from '../../actions/actions';
import './Check.scss';


class Check extends Component  {

  changeName(team, name) {
    this.props.dispatch(setTeamName(team.id, name));
  }

  render() {
    const teams = this.props.teams;
    return (
      <div className="checkPage">
        {
          teams.map((team) => <TeamEdit key={team.id} name={team.name} onNameChange={(name) => this.changeName(team, name)}></TeamEdit>)
        }
        <div className="">
          <Link to="/tour">
            <button className="btn start">Начать игру</button>
          </Link>
        </div>    
      </div>
    );
  }
}

function mapStateToProps(state) {
  const teams = state.teams || [];
  
  return {
    teams
  }
}

export default connect(mapStateToProps)(Check)