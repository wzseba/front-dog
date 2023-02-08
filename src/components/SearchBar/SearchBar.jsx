import React, { useState } from 'react'
import s from './SearchBar.module.css';
import { FaSearch } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { getDog } from '../../redux/action';


const SearchBar = () => {

    const dispatch = useDispatch();
    const [name,setName] = useState("");

    const handleChange = (e)=>{
        let {value} = e.target;
        setName(value);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(getDog(name))
        setName("");
    }

  return (
    <div className={s.search_icon_container}>
        <form action="#">
            <input className={s.input_search} onChange={handleChange} type="text" placeholder='Ingrese una raza' />
            <button type="submit" onClick={handleSubmit}><FaSearch/></button>
        </form>
    </div>
  )
}

export default SearchBar