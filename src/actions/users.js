// Variable to hold action type
export const RECEIVE_USERS = 'RECEIVE_USERS';

/**
 * Action creator - receiveUsers
 * @param {object} users - The users slice of the state
 * @returns {object} The action object
 */
export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS, // Type of event occured
    users,
  };
}