import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux'


class Result extends Component {

    getSortedTeam(teams) {
        return teams.sort((a, b) => +b.score - +a.score)
    }


    render() {
        const teams = this.props.teams;
        return (
            <div className="resultsPage">
                {
                    this.getSortedTeam(teams).map((team) => {
                        return <div>
                                <span>{team.name}</span> <span>{team.score}</span>
                             </div>
                    })
                }
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

export default connect(mapStateToProps)(Result)