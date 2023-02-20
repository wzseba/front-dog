import React from 'react';
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { filterByTemperament, filteredApiOrDb, getTemperaments, orderByName, orderByWeight } from '../../redux/action';
import s from './Filters.module.css';


const Filters = (prop) => {
    
  const {setCurrentPage, setOrder, getAllDogs} = prop;
   
    const dispatch = useDispatch();
    const allTemp = useSelector(state => state.temperaments);
  
    useEffect(()=>{
      !allTemp.length && dispatch(getTemperaments());
    },[allTemp,dispatch]);
    

    const handleOrderAscDes = (e)=>{
      e.preventDefault();
      const {value} = e.target;
      dispatch(orderByName(value));
      setCurrentPage(1);
      setOrder(`Ordenado ${value}`);
    }

    const handleOrderWeight = (e)=>{
      e.preventDefault();
      const {value} = e.target;
      dispatch(orderByWeight(value));
      setCurrentPage(1);
      setOrder(`Ordenado ${value}`);
    }

    const handleFilterApiDb = (e)=>{
        const {value} = e.target;
        dispatch(filteredApiOrDb(value));
        setCurrentPage(1)
    }

    const handleFilterTemp = (e)=>{
      const {value} = e.target;
      dispatch(filterByTemperament(value));
      setCurrentPage(1)
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(getAllDogs());
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
         
          <button className={s.btn_limpiar} onClick={handleSubmit}>Limpiar</button>
    </div>
  )
}

export default Filters