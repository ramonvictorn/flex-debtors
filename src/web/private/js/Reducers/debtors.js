import { 
    UPDATE_DEBTORS_LIST,
    TOGGLE_ROW_EDIT,
    UPDATE_TABLE_INPUT_VALUES,
    SET_TABLE_INPUT_VALUES,
} from '../Actions/debtors.js';


const initialState = {
    debtorsList: null,
    rowEdit: false,
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
                console.log('chegou no reducer do UPDATE_TABLE_INPUT_VALUES', action.payload)
            return{
                ...state,
                inputValues : {
                        ...state.inputValues,
                        [action.payload.objectValues.input] : action.payload.objectValues.value,
                },
            }
        case SET_TABLE_INPUT_VALUES:
            console.log('chegou o set aqui ', action.payload)
            return{
                ...state,
                inputValues : action.payload.objectValues,
            }
        default:
            return state;
    }
}

export default debtorsReducer;