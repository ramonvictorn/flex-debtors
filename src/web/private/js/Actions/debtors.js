export const UPDATE_DEBTORS_LIST = "UPDATE_DEBTORS_LIST";
export const updateDebtorsList = (debtorsList) =>({
  type: UPDATE_DEBTORS_LIST,
  payload: {debtorsList},
});