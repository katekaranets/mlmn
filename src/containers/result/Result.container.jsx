import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux'


class Result extends Component {


    render() {
        const teams = this.props.teams;
        return (
            <div className="resultsPage">
                {
                    teams.sort((a, b) => {
                        if (b.score > a.score) {
                            return 1
                        }
                        if (b.score < a.score) {
                            return -1
                        }
                        return 0
                    }).map((team) => {
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