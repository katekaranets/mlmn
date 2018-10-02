import fetch from 'cross-fetch';

export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT';

​
export function selectSubreddit(subreddit) {
  return {
    type: SELECT_SUBREDDIT,
    subreddit
  }
}