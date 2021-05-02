// Variable to hold action type
export const SET_AUTHED_USER = 'SET_AUTHED_USER' ;

/**
 * Action creator - setAuthedUser
 * @param {string} id - The authed user's id
 * @returns {object} The action object
 */
export function setAuthedUser(id) {
  return {
    type: SET_AUTHED_USER, // Type of event occured
    id,
  };
}