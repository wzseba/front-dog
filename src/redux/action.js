export function getAllDogs(){
    return async function(dispatch){
        const res = await fetch("http://localhost:3001/dogs");
        const obj = await res.json();
       
        dispatch({
            type: "GET_ALL_DOGS",
            payload: obj
        })
    }
}
