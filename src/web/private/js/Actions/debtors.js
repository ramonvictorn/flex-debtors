export const UPDATE_DEBTORS_LIST = "UPDATE_DEBTORS_LIST";
export const updateDebtorsList = (debtorsList) =>({
  type: UPDATE_DEBTORS_LIST,
  payload: {debtorsList},
});


export const TOGGLE_ROW_EDIT = "TOGGLE_ROW_EDIT";
export const toggleRowEdit = () => ({
  type: TOGGLE_ROW_EDIT,
  payload: {},
})

// export const fetchPostsBegin = () => ({
//   type: FETCH_POSTS_BEGIN,
// });