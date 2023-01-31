import React, { useEffect, useState } from 'react'
import s from './Home.module.css';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import logo from './logo.png';
import Card from '../Card/Card';
import { useDispatch, useSelector } from 'react-redux';
import { getAllDogs } from '../../redux/action';
import Pagination from '../Pagination/Pagination';


const Home = () => {

  const dispatch = useDispatch();
  const allDogs = useSelector(state => state.dogs);

  /**Pagination */
  const totalDogs = allDogs.length;
  const dogsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const lastIndex = currentPage * dogsPerPage // 1 * 8 = 8
  const firstIndex = lastIndex - dogsPerPage // 8 - 8 = 0
  const showDogsPerPage =  allDogs.slice(firstIndex, lastIndex);

  useEffect(()=>{

    !allDogs.length && dispatch(getAllDogs());

  },[allDogs,dispatch])


  return (
    <>
      <nav className={s.nav_container}>
        <div className={s.logo}><Link to='/home'><img src={logo} alt="logtipo" /></Link></div>
        <div className={s.search_icon_container}>
          <input className={s.input_search} type="text" placeholder='Search' />
          <Link to='/'>
            <FaSearch />
          </Link>
        </div>
        <div className={s.crear_fav}>
          <Link to='/formAdd'>
            Crear raza
          </Link>
          <Link to='/favorite'>
            Favoritos
          </Link>
        </div>
      </nav>
      <main className={s.container_main}>
        <div className={s.container_card}>
                  { showDogsPerPage.length ?
                    showDogsPerPage?.map(d =>(
                   
                        <Card
                          key={d.id}
                          id={d.id}
                          image={d.image}
                          name={d.name}
                          temperament={d.temperament ? d.temperament : d.temperaments?.map(d => d.name)}
                          life_span={d.life_span}
                          weight={d.weight} />
                  
                    )) :
                    <h1> CARGANDO ANDO</h1>
                  } 
        </div>
      </main>
      <Pagination
        dogsPerPage={dogsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalDogs={totalDogs}
      />
    </>
  )
}

export default Home