import React from 'react';
import { useState } from 'react'
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
    const favorites = useSelector(state => state.favorites);

    /**Verifico si la raza ya se encuentra en mi estado global */
    const findFav = favorites?.find(f => f.id.toString() === id.toString());
    
    useEffect(()=>{
        dispatch(getDetail(id));
        if(findFav) setOpen(true);
        // dispatch(clearDetail());
       return ()=>{
        dispatch(clearDetail());
       } 
    },[dispatch,id])

    const handleFavorite = (e)=>{
        e.preventDefault();
        if(findFav){
            return alert('EL PERRITO YA ESTA UN TUS FAVORITOS ;-)');
        }
        dispatch(addFavorite(dogDetail[0]));
        alert('PERRITO AGREGADO A TUS FAVORITOS :-)');
    }
   
    //Setea el array que llega desde la base de datos a un string plano para poder renderizar el detail
    //pueden llegar dos propiedades diferentes temperamet o temperaments
    // let temperaments = dogDetail[0]?.temperaments?.map(t => t.name).toString().replaceAll(',',', ');
    
  return (
    <div className={s.container_detail}>
        <Link className={s.btn_volver} to='/home'>
            <button>Volver</button>
        </Link>
        
       
      
        {
            dogDetail.length ? 
            (
                <div className={s.container_img_data}>
                    <div>
                        <img className={s.container_img} src={dogDetail[0]?.image} alt={dogDetail[0]?.name} />
                    </div>
                    <div className={s.container_data_btn}>
                        <div className={s.container_data}>
                            <h1 className={s.container_data_title}>{dogDetail[0]?.name}</h1>
                            <p className={s.data_title_parrafo}><span>Height:</span> {dogDetail[0]?.height}</p>
                            <p className={s.data_title_parrafo}><span>Weight:</span> {dogDetail[0]?.weight}</p>
                            <p className={s.data_title_parrafo}><span>Life span:</span> {dogDetail[0]?.lifeSpan}</p>
                            <p className={s.data_title_parrafo}><span>Temperament:</span> {dogDetail[0]?.temperament}</p>
                        </div>
                        <button onClick={handleFavorite} className={open ? s.btn_not : s.btn_favoritos} disabled={ open ? true : false}>Agregar a Favoritos</button>
                    </div>
                    
                </div> 
            ) :
            <Loading/>
        }
        
    </div>
  )
}

export default Detail