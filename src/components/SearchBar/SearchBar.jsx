import { useState } from 'react'
import s from './SearchBar.module.css';
// import { FaSearch } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { getDog } from '../../redux/action';


const SearchBar = ({setCurrentPage}) => {

    const dispatch = useDispatch();
    const [name,setName] = useState("");

    const handleInput = (e)=>{
        e.preventDefault();
        setName(e.target.value);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(getDog(name))
        setName("");
        setCurrentPage(1);
    }

  return (
    
        <form className={s.container_search} onSubmit={handleSubmit} >
            <input
             className={s.input_search}
             type="text"
             value={name}
             onChange={handleInput}
             placeholder='Ingrese una raza' />
            <input type='submit' value='Buscar'/>   
        </form>
   
  )
}

export default SearchBar