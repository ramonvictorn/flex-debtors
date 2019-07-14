import { 
    UPDATE_DEBTORS_LIST
} from '../Actions/debtors.js';


const initialState = {
    debtorsList: null,
}

const debtorsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_DEBTORS_LIST:
            return{
                ...state,
                debtorsList: action.payload.debtorsList
            }
        default:
            return state;
    }
}

export default debtorsReducer;