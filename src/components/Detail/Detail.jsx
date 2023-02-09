import React from 'react'
import s from './Detail.module.css';
import Loading from '../Loading/Loading';
import { clearDetail, getDetail } from '../../redux/action';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';



const Detail = () => {

    const {id} = useParams();
    
    const dispatch = useDispatch();
    const dogDetail = useSelector(state => state.detail);
    
    useEffect(()=>{
        dispatch(getDetail(id));
        dispatch(clearDetail());
        // eslint-disable-next-line
    },[])

    //Setea el array que llega desde la base de datos a un string plano para poder renderizar el detail
    //pueden llegar dos propiedades diferentes temperamet o temperaments
    let temperaments = dogDetail[0]?.temperaments?.map(t => t.name).toString().replaceAll(',',', ');
    
  return (
    <div className={s.container_detail}>
        <Link to='/home'>
            <button>Volver</button>
        </Link>
        
        {
            dogDetail.length ? 
            (
                <div className={s.container_img_data}>
                    <div>
                        <img className={s.container_img} src={dogDetail[0]?.image} alt={dogDetail[0]?.name} />
                    </div>
                    <div className={s.container_data}>
                        <h1>{dogDetail[0]?.name}</h1>
                        <p>Height: {dogDetail[0]?.height}</p>
                        <p>Weight: {dogDetail[0]?.weight}</p>
                        <p>Life span: {dogDetail[0]?.life_span}</p>
                        <p>Temperament: {dogDetail[0]?.temperament || temperaments}</p>
                    </div>
                </div>
            ) :
            <Loading/>
        }
        
    </div>
  )
}

export default Detail