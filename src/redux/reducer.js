const initialState = {
    dogs: [],
    temperaments: [],
    allDogs: [],
    details: {}
}

const rootReducer = (state=initialState, action)=>{
    switch(action.type){
        case "GET_ALL_DOGS":{
            return{
                ...state,
                dogs: action.payload,
                // allDogs: action.payload
            }
        }
        default: return state;
    }

}

export default rootReducer;