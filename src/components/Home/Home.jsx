import React from 'react'
import s from './Home.module.css';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import logo from './logo.png';

const Home = () => {
  return (
    <div>
      <nav className={s.nav_container}>
        <div className={s.logo}><Link to='/home'><img src={logo} alt="logtipo" /></Link></div>
        <div className={s.search_icon_container}>
          <input className={s.input_search} type="text" placeholder='Search' />
          <Link>
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
    </div>
  )
}

export default Home