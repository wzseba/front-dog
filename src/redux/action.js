import axios from 'axios';

export function getAllDogs() {
  return async function (dispatch) {
    try {
      const res = await axios.get('/dogs');

      dispatch({
        type: 'GET_ALL_DOGS',
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getDetail(id) {
  return async function (dispatch) {
    try {
      const res = await axios.get(`dogs/${id}`);

      dispatch({
        type: 'GET_DETAIL',
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getTemperaments() {
  return async function (dispatch) {
    try {
      const res = await axios.get('/temperaments');

      dispatch({
        type: 'GET_TEMPERAMENTS',
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getDog(name) {
  return async function (dispatch) {
    try {
      const res = await axios.get(`/dogs?name=${name}`);
      dispatch({
        type: 'GET_DOG',
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function createDog(payload) {
  return async function (dispatch) {
    try {
      await axios.post('/dogs', payload);
      return dispatch({
        type: 'CREATE_DOG',
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function loginForm(payload) {
  return async function (dispatch) {
    try {
      const res = await axios.post('auth/login', payload);

      dispatch({ type: 'LOGIN_SUCCESS', payload: res.data.ok });
    } catch (err) {
      console.error(err.response.data.error);
      const msg = err.response.data.error;
      dispatch({ type: 'LOGIN_FAILURE', payload: msg });
    }
  };
}

export function registerForm(payload) {
  return async function () {
    try {
      await axios.post('/login/register', payload);
      console.log('REGISTRO enviado correctamente!!!');
    } catch (error) {
      console.log(error);
    }
  };
}

export function clearDetail() {
  return {
    type: 'CLEAR_DETAIL',
  };
}

export function filteredApiOrDb(payload) {
  return {
    type: 'FILTER_API_OR_DB',
    payload,
  };
}

export function orderByName(payload) {
  return {
    type: 'ORDER_BY_NAME',
    payload,
  };
}

export function orderByWeight(payload) {
  return {
    type: 'ORDER_BY_WEIGHT',
    payload,
  };
}

export function filterByTemperament(payload) {
  return {
    type: 'FILTER_BY_TEMPERAMENT',
    payload,
  };
}

export function addFavorite(payload) {
  return {
    type: 'ADD_FAVORITE',
    payload,
  };
}

export function deleteFavorite(id) {
  return {
    type: 'DELETE_FAVORITE',
    payload: id,
  };
}
