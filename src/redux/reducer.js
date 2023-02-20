const initialState = {
    dogs: [],
    allDogs: [],
    temperaments: [],
    favorites: localStorage.getItem("favorites") ? JSON.parse(localStorage.getItem("favorites")): [],
    detail: {}
}
// localStorage.hasOwnProperty("favorites") ? JSON.parse(localStorage.getItem("favorites")): [],
const rootReducer = (state = initialState, action)=>{
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
        case "CREATE_DOG":{
            return{
                ...state
            }
        }
        case "CLEAR_DETAIL":{
            return{
                ...state,
                detail:{}
            }
        }
        case "ADD_FAVORITE":{
            // const findFav = state.favorites.find((f) => f.id === action.payload.id);
            // console.log(findFav)
            return{
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        }
        case "DELETE_FAVORITE":{
            const deleteFavorite = state.favorites.filter((fav) => fav.id !== action.payload
			);
            return{
                ...state,
                favorites: deleteFavorite
            }
        }
        case "FILTER_API_OR_DB":{
            const filtered = action.payload === 'db' ? state.allDogs.filter(dog => dog.createdInDb) : state.allDogs.filter(dog => !dog.createdInDb)
            return{
                ...state,
                dogs: action.payload === 'all' ? state.allDogs : filtered
            }
        }
        case "FILTER_BY_TEMPERAMENT":{
            const allDogs = state.allDogs//filtro sobre una copia que simpre va a a tener todas las razas sin modificar mi estado principal dogs
            const filteredTemperament = action.payload === 'all' ? allDogs : allDogs.filter(d => d.temperament?.includes(action.payload));
            
            return{
                ...state,
                dogs: filteredTemperament
            }
        }
        case "ORDER_BY_NAME":{
            const orderName = action.payload === 'asc' ? state.dogs.sort((a, b) => a.name.localeCompare(b.name)) : state.dogs.sort((a, b) => b.name.localeCompare(a.name))
            return{
                ...state,
                dogs: orderName
            }
        }
        case "ORDER_BY_WEIGHT":{
            //a.weight.substring(0,2).trim() --> [{weight:'37 - 11'}] --> '37' => con substring(0,2) separo los primeros dos carecteres, en caso de que solo se encuentre un caracter separa ese caracter y con .trim()
            //eliminamos espacios en blanco y obtengo como resultado el string '37' asilado de lo de mas. 
            //Luego usamos localeCompare que se usa para comparar string pasando los argumentos options y locales => undefined -> no hay localidad definida, numeric: true -> habilitamos comparacion numerica

            const orderWeight = action.payload === 'min' ? 
                state.dogs.sort((a,b)=> a.weight.substring(0,2).trim().localeCompare(b.weight.substring(0,2).trim(), undefined, { numeric: true })) : 
                state.dogs.sort((a,b)=> b.weight.substring(4).trim().localeCompare(a.weight.substring(4).trim(), undefined, { numeric: true }))
           
            return{
                ...state,
                dogs: orderWeight
            }
        }
        default: return state;
    }

}

export default rootReducer;