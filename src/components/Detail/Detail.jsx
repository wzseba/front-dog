import React from 'react'
import s from './Detail.module.css';
import Loading from '../Loading/Loading';
import { getDetail } from '../../redux/action';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';



const Detail = () => {

    const {id} = useParams();
    
    const dispatch = useDispatch();
    const dogDetail = useSelector(state => state.detail);
    console.log(dogDetail[0]);
    useEffect(()=>{
        dispatch(getDetail(id))
    },[id,dispatch])
  

  return (
    <div className={s.container_detail}>
        <Link to='/home'>
            <button>Volver</button>
        </Link>
        
        {
            dogDetail ? 
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
                        <p>Temperament: {dogDetail[0]?.temperament}</p>
                    </div>
                </div>
            ) :
            <Loading/>
        }
        
    </div>
  )
}

export default Detail