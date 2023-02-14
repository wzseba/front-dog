import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { deleteFavorite } from '../../redux/action';
import { FaTrash } from 'react-icons/fa';
import s from './Favorite.module.css';


const Favorite = () => {

  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites);
  // const [open, setOpen] = useState(false);

  useEffect(()=>{
    localStorage.setItem("favorites", JSON.stringify(favorites));
  },[favorites]);

  const handleDeleteFavorite = (id)=>{
    // setOpen(true);
    dispatch(deleteFavorite(id))  
  }

  return (
    <div className={s.container_favorito}>
      <h2 className={s.fav_title}>Mis Perros Favoritos</h2>
      <Link className={s.btn_volver} to='/home'>
        <button>Volver</button>
      </Link>
      
      { 
        favorites.length ? (
          <div className={s.container_fav}>
            { favorites?.map(fav =>(
          
              <div key={fav.id} className={s.content_card_fav}>
              <img className={s.fav_img} src={fav.image} alt={fav.name}/>
              <h3 className={s.fav_name}><span>Nombre:</span> {fav.name}</h3>
              <p className={s.fav_height}><span>Altura:</span> {fav.height}</p>
              <p className={s.fav_weight}><span>Peso:</span> {fav.weight}</p>
              <button className={s.fav_btn_delete} onClick={()=>handleDeleteFavorite(fav.id)}><FaTrash/></button>
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