const initialState = {
    dogs: [],
    allDogs: [],
    temperaments: [],
    detail: {}
}

const rootReducer = (state=initialState, action)=>{
    switch(action.type){
        case "GET_ALL_DOGS":{
            return{
                ...state,
                dogs: action.payload,
                allDogs: action.payload//una copia del estado que siempre va a tener todos y sobre el cual vamos a trabajar para los filtros
            }
        }
        case "GET_DOG":{
            return{
                ...state,
                dogs: action.payload
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
        case "CLEAR_DETAIL":{
            return{
                ...state,
                detail:{}
            }
        }
        case "FILTER_API_OR_DB":{
            const filtered = action.payload === 'db' ? state.allDogs.filter(dog => dog.createdInDb) : state.allDogs.filter(dog => !dog.createdInDb)
            return{
                ...state,
                dogs: action.payload === 'all' ? state.allDogs : filtered
            }
        }

        default: return state;
    }

}

export default rootReducer;