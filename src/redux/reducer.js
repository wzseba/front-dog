const initialState = {
    dogs: [],
    temperaments: [],
    allDogs: [],
    detail: {}
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
        case "GET_DETAIL":{
            return{
                ...state,
                detail: action.payload
            }
        }
        case "GET_TEMPERAMENTS":{
            return{
                ...state,
                temperaments: action.payload
            }
        }

        default: return state;
    }

}

export default rootReducer;