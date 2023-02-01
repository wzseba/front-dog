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
            })

        } catch (error) {
            console.log(error);
        }
    }
}
