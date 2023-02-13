import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { deleteFavorite } from '../../redux/action';
import s from './Favorite.module.css'

const Favorite = () => {

  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites);

  useEffect(()=>{
    localStorage.setItem("favorites", JSON.stringify(favorites));
  },[favorites]);

  console.log('estoy en favoritos-->',favorites);

  const handleDeleteFavorite = (id)=>{
    dispatch(deleteFavorite(id))  
    console.log('este id',id);
  }

  return (
    <div className={s.container_favorito}>
      <h2>Mis Perros Favoritos</h2>
      <Link to='/home'>
        <button>Volver</button>
      </Link>
      
      { 
        favorites.length ? (
          <div className={s.container_fav}>
            { favorites?.map(fav =>(
          
              <div key={fav.id} className={s.content_card_fav}>
              <img className={s.fav_img} src={fav.image} alt={fav.name}/>
              <h3 className={s.fav_name}>Nombre: {fav.name}</h3>
              <p className={s.fav_height}>Altura: {fav.height}</p>
              <p className={s.fav_weight}>Peso: {fav.weight}</p>
              <button onClick={()=>handleDeleteFavorite(fav.id)}>X</button>
              </div>
      
              ))
            }
        </div>
        ) : 
        <h3>No hay Perritos</h3>
      }
      
    </div>
  )
}

export default Favorite