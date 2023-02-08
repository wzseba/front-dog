import React from 'react'
import { useDispatch } from 'react-redux';
import { filteredApiOrDb } from '../../redux/action';
import s from './Filters.module.css';


const Filters = () => {

    const dispatch = useDispatch();


    const handleOrderAscDes = (e)=>{
        console.log('handleChange-->',e.target.value);
    }

    const handleFilterApiDb = (e)=>{
        const {value} = e.target;
        dispatch(filteredApiOrDb(value));
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
    }


  return (
    <div className={s.container_filters}>
          <p>filtros</p>
          <select onChange={handleOrderAscDes}>
            <option value="asc">Ascendente</option>
            <option value="des">Descendente</option>
          </select>
          <select>
            <option value="max">Peso Maximo</option>
            <option value="min">Peso Minimo</option>
          </select>
          <select onChange={handleFilterApiDb}>
            <option value="all">Todos</option>
            <option value="db">Base de Datos</option>
            <option value="api">Api</option>
          </select>
          <p>filtrar por temperamento</p>
         
          <button onClick={handleSubmit}>Limpiar</button>
        </div>
  )
}

export default Filters