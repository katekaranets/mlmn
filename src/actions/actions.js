export const SET_TEAM_NAME = 'SET_TEAM_NAME';

export function setTeamName(id, name) {
    return {
      type: SET_TEAM_NAME,
      id,
      name
    }
}

