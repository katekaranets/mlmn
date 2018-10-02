import { combineReducers } from 'redux';
import { SET_TEAM_NAME } from '../actions/actions';


function teams(state = [], action) {
    switch (action.type) {
        case SET_TEAM_NAME:
            return state.map(team => {
                if (team.id === action.id) {
                    team.name = action.name;
                }
                return team
            })
        default:
            return state
    }
}

const rootReducer = combineReducers({
    teams
})

export default rootReducer
