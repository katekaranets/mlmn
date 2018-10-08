import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

import './Tour.scss';
import TeamScore from './TeamScore.component';
import TourTable from './TourTable.component';
import { updateScore } from '../../actions/actions';


class Tour extends Component {
    
    changeScore(team, score) {
        this.props.dispatch(updateScore(team.id, score));
    }

    render() {
        const teams = this.props.teams;
        const tours = this.props.tours;
        return (
            <div className="tourPage">
                <TourTable tour={tours[0]}/>
                <div className="tourScore">
                    {
                        teams.map((team) => <TeamScore key={team.id} team={team} onScoreChange={(score) => this.changeScore(team, score)}></TeamScore>)
                    }
                </div>
                <Link to="/result">
                    <button className="btn start">Результат</button>
                </Link>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const teams = state.teams || [];
    const tours = state.tours || [];

    return {
        teams, 
        tours
    }
}

export default connect(mapStateToProps)(Tour)