import React from 'react'
import s from './Home.module.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <nav className={s.nav_container}>
        <div className={s.logo}>logo</div>
        <div>
          <input type="text" placeholder='Search' />
          Search
        </div>
        <div>
          <Link to='/formAdd'>
            crear raza
          </Link>
          <Link to='/favorite'>
            favoritos
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Home