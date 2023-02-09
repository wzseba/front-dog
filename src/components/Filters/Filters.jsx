import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { filteredApiOrDb, getTemperaments, orderByName } from '../../redux/action';
import s from './Filters.module.css';


const Filters = ({setCurrentPage }) => {
    
   
    const dispatch = useDispatch();
    const allTemp = useSelector(state => state.temperaments);
  
 
    useEffect(()=>{
      dispatch(getTemperaments());
    },[]);
    

    const handleOrderAscDes = (e)=>{
      const {value} = e.target;
      dispatch(orderByName(value));
      setCurrentPage(1);
    }

    const handleOrderWeight = (e)=>{
      const {value} = e.target;

    }

    const handleFilterApiDb = (e)=>{
        const {value} = e.target;
        dispatch(filteredApiOrDb(value));
    }

    const handleFilterTemp = (e)=>{
      const {vlue} = e.target;

    }

    const handleSubmit = (e)=>{
        e.preventDefault();
    }


  return (
    <div className={s.container_filters}>
          <p>Ordenar Alfabeticamente</p>
          <select className={s.container_select} onChange={handleOrderAscDes}>
            <option value="asc">Ascendente</option>
            <option value="des">Descendente</option>
          </select>

          <p>Ordenar por peso</p>
          <select className={s.container_select} onChange={handleOrderWeight}>
            <option value="max">Peso Maximo</option>
            <option value="min">Peso Minimo</option>
          </select>

          <p>Filtrar creado o api</p>
          <select className={s.container_select} onChange={handleFilterApiDb}>
            <option value="all">Todos</option>
            <option value="db">Base de Datos</option>
            <option value="api">Api</option>
          </select>

          <p>Filtrar por temperamento</p>
          <select className={s.container_select} onChange={handleFilterTemp}>
            <option value="all">Todos</option>
            {
              allTemp && allTemp?.map(t => (
                <option key={t.id} value={t.name}>{t.name}</option>
              ))
            }
          </select>
         
          <button onClick={handleSubmit}>Limpiar</button>
        </div>
  )
}

export default Filters