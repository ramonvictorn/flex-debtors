export const UPDATE_DEBTORS_LIST = "UPDATE_DEBTORS_LIST";
export const updateDebtorsList = (debtorsList) =>({
  type: UPDATE_DEBTORS_LIST,
  payload: {debtorsList},
});


export const TOGGLE_ROW_EDIT = "TOGGLE_ROW_EDIT";
export const toggleRowEdit = () => ({
  type: TOGGLE_ROW_EDIT,
  payload: {},
});

export const UPDATE_TABLE_INPUT_VALUES = "UPDATE_TABLE_INPUT_VALUES";
export const updateTableInputValues = (objectValues) => ({
  type:  UPDATE_TABLE_INPUT_VALUES,
  payload : {objectValues}
});

export const SET_TABLE_INPUT_VALUES = "SET_TABLE_INPUT_VALUES";
export const setTableInputValues = (objectValues) => ({
  type:  SET_TABLE_INPUT_VALUES,
  payload : {objectValues}
});