import { actionTypes } from '../actions'

const InitialState = {
    users: []
}

export const mainReducer = (state = InitialState, action) => {
    switch (action.type) {
        case actionTypes.GET_USERS:
            return {
                ...state, users: action.payload.data.data
            }
        case actionTypes.POST_USERS:{
            let newData = state.users.slice();
            newData.push(action.payload.data.data);
            return {
                ...state, users: newData    
            }
        }
        case actionTypes.DELETE_USER:{
            return {
                ...state, users: state.users.filter(us=>{
                    return parseInt(us.id) !== parseInt(action.payload)
                })
            }
        }
        case actionTypes.UPDATE_USER: 
            return {
                ...state, users: state.users.map((value) => {
                    if(value.id === action.payload.id)
                        return action.payload;

                    return value;
                })
            }
            

        
        default:
            break
    }
    return state
}

export default mainReducer