export const UPDATE_USERS_LIST = "UPDATE_USERS_LIST";
export const updateUsersList = (usersList) =>({
  type: UPDATE_USERS_LIST,
  payload: {usersList},
});

export const SET_USER_SELECTED = "SET_USER_SELECTED";
export const setUserSelected = (user) =>({
  type: SET_USER_SELECTED,
  payload: {user},
});