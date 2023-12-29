import { ACTION_TYPES, LOGIN_INITIALS_TYPES } from "../../utils/custom";
import { LOGIN_LABEL, LOGOUT_LABEL , BOARDED } from "./action_labels";
//******** */
// Status 0 for onboarding screens
//        1 for not signed
//        2 for logged in

const loginInitialState : LOGIN_INITIALS_TYPES = {
    status : 0,
    userInfo : null,
}

const authReducer = (state=  loginInitialState , action : ACTION_TYPES)=>{

    switch (action.type){
        case BOARDED:
            return {...state , status : 1}
            
        case LOGIN_LABEL:
            const updatedInfo = {
                token : action.payload?.token , 
                firstName : action.payload?.firstName , 
                lastName : action.payload?.lastName }

            console.log("Called", updatedInfo)
            return {...state , status : 2 , userInfo : updatedInfo }

        case LOGOUT_LABEL:
            return {...state , status : 1}
    
        default:
            return state;
    }
}

export {
    authReducer,loginInitialState
}