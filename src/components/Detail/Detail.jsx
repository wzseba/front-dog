import React, { useState } from 'react'
import s from './Detail.module.css';
import Loading from '../Loading/Loading';
import { addFavorite, clearDetail, getDetail } from '../../redux/action';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';


const Detail = () => {

    const {id} = useParams();
    
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false)
    const dogDetail = useSelector(state => state.detail);
    
    useEffect(()=>{
        dispatch(getDetail(id));
        // dispatch(clearDetail());
       return ()=>{
        dispatch(clearDetail());
       } 
    },[dispatch,id])

    // const findFavorite = favorites.find(fav => fav.id === id);
    //bug: cada vez que se actuliza la pagina o se vuelve a entrar al mismo detalle se puede agregar al mismo tantas veces se monta el componente
    const handleFavorite = (e)=>{
        e.preventDefault();
        alert('Perrito agregado a tu Favoritos :-)')
        dispatch(addFavorite(dogDetail[0]))
        setOpen(true)
    }
   
    //Setea el array que llega desde la base de datos a un string plano para poder renderizar el detail
    //pueden llegar dos propiedades diferentes temperamet o temperaments
    // let temperaments = dogDetail[0]?.temperaments?.map(t => t.name).toString().replaceAll(',',', ');
    
  return (
    <div className={s.container_detail}>
        <Link to='/home'>
            <button className={s.btn_volver}>Volver</button>
        </Link>
        
        <button onClick={handleFavorite} className={s.btn_favoritos} disabled={ open ? true : false}>Agregar a Favoritos</button>
      
        {
            dogDetail.length ? 
            (
                <div className={s.container_img_data}>
                    <div>
                        <img className={s.container_img} src={dogDetail[0]?.image} alt={dogDetail[0]?.name} />
                    </div>
                    <div className={s.container_data}>
                        <h1 className={s.container_data_title}>{dogDetail[0]?.name}</h1>
                        <p className={s.data_title_parrafo}><span>Height:</span> {dogDetail[0]?.height}</p>
                        <p className={s.data_title_parrafo}><span>Weight:</span> {dogDetail[0]?.weight}</p>
                        <p className={s.data_title_parrafo}><span>Life span:</span> {dogDetail[0]?.life_span}</p>
                        <p className={s.data_title_parrafo}><span>Temperament:</span> {dogDetail[0]?.temperament}</p>
                    </div>
                </div> 
            ) :
            <Loading/>
        }
        
    </div>
  )
}

export default Detail