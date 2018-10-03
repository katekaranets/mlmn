export const SET_TEAM_NAME = 'SET_TEAM_NAME';
export const UPDATE_SCORE = 'UPDATE_SCORE';

export function setTeamName(id, name) {
    return {
      type: SET_TEAM_NAME,
      id,
      name
    }
}

export function updateScore(id, score) {
    return {
      type: UPDATE_SCORE,
      id,
      score
    }
}

