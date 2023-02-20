import React from 'react';
import { Link } from 'react-router-dom';

import s from './Card.module.css';


const Card = ({name, id, image, temperament}) => {
 
  return (
    <div className={s.card}>
        <Link to={`/detail/${id}`}>

          <img className={s.img_dog} src={image} alt="img not found" />

            <h3 className={s.card_h3}>{name}</h3>
      
            <p className={s.card_parrafo}>{temperament}</p>
     
       </Link>
      </div>
  )
}

export default Card