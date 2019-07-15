import { 
    UPDATE_DEBTORS_LIST,
    TOGGLE_ROW_EDIT,
    UPDATE_TABLE_INPUT_VALUES,
    SET_TABLE_INPUT_VALUES,
    SET_ROW_EDIT,
} from '../Actions/debtors.js';


const initialState = {
    debtorsList: null,
    rowEdit: false,
    idEdit : undefined,
    inputValues: {
        reason : '',
        value: '',
        dateDebtor: '',
    },
}

const debtorsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_DEBTORS_LIST:
            return{
                ...state,
                debtorsList: action.payload.debtorsList
            }
        case TOGGLE_ROW_EDIT:
            return{
                ...state,
                rowEdit: !state.rowEdit
            }
        case UPDATE_TABLE_INPUT_VALUES:
            return{
                ...state,
                inputValues : {
                        ...state.inputValues,
                        [action.payload.objectValues.input] : action.payload.objectValues.value,
                },
            }
        case SET_TABLE_INPUT_VALUES:
            return{
                ...state,
                inputValues : action.payload.objectValues,
            }
        case SET_ROW_EDIT:
            return{
                ...state,
                idEdit: action.payload.id,
            }
        default:
            return state;
    }
}

export default debtorsReducer;