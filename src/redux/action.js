import axios from "axios";

export function getAllDogs(){
    return async function(dispatch){
        try {
            const res = await axios.get("/dogs");
            
            dispatch({
                type: "GET_ALL_DOGS",
                payload: res.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export function getDetail(id){
    return async function(dispatch){
        try {
            const res = await axios.get(`dogs/${id}`);
            
            dispatch({
                type: "GET_DETAIL",
                payload: res.data
            });
        } catch (error) {
            console.log(error);
        }
    }
}

export function getTemperaments(){
    return async function(dispatch){
        try {
            const res = await axios.get('/temperaments');
            
            dispatch({
                type: "GET_TEMPERAMENTS",
                payload: res.data
            });
        } catch (error) {
            console.log(error);
        }
    }
}

export function getDog(name){
    
    return async function(dispatch){
        try {
            const res = await axios.get(`/dogs?name=${name}`);
            dispatch({
                type: "GET_DOG",
                payload: res.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export function createDog(payload){
    
    return async function(dispatch){
        try {
            await axios.post('/dogs',payload);
            return dispatch({
                type: "CREATE_DOG"
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export function clearDetail(){
    return{
        type: "CLEAR_DETAIL"
    }
}

export function filteredApiOrDb(payload){
    return{
        type: "FILTER_API_OR_DB",
        payload
    }
}

export function orderByName(payload){
    return {
        type:"ORDER_BY_NAME",
        payload
    }
}

export function orderByWeight(payload){
    return {
        type:"ORDER_BY_WEIGHT",
        payload
    }
}

export function filterByTemperament(payload){
    return {
        type:"FILTER_BY_TEMPERAMENT",
        payload
    }
}