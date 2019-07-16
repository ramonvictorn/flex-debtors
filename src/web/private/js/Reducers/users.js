import { 
    UPDATE_USERS_LIST,
    SET_USER_SELECTED,
} from '../Actions/users.js';


const initialState = {
    usersList: [],
    userSelected: null,
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_USERS_LIST:
            return{
                ...state,
                usersList: action.payload.usersList
            }
        case SET_USER_SELECTED:
            return{
                ...state,
                userSelected:action.payload.user
            }
        default:
            return state;
    }
}

export default usersReducer;