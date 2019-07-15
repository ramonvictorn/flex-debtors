import { 
    UPDATE_DEBTORS_LIST,
    TOGGLE_ROW_EDIT
} from '../Actions/debtors.js';


const initialState = {
    debtorsList: null,
    rowEdit: false,
}

const debtorsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_DEBTORS_LIST:
            return{
                ...state,
                debtorsList: action.payload.debtorsList
            }
        case TOGGLE_ROW_EDIT:
            console.log('chegou no reducer do edit row')
            return{
                ...state,
                rowEdit: !state.rowEdit
            }
        default:
            return state;
    }
}

export default debtorsReducer;