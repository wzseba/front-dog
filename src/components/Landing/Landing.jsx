import React from 'react'
import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getAllDogs } from '../../redux/action';



const Landing = () => {
  const allDogs = useSelector(state => state.dogs);
  // console.log(allDogs);
  const dispatch = useDispatch();

  useEffect(()=>{
    !allDogs.length && dispatch(getAllDogs());
    // !allTemp.length && dispatch(getTemperaments());
    // eslint-disable-next-line
  },[])

  return (
    <div>Landing</div>
  )
}

export default Landing