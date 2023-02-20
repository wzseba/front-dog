import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import s from './Landing.module.css';


const Landing = () => {
  

  return (
    
      <div className={s.container}>
        <div className={s.iz}>
          <h2>Pi-Dog</h2>
        </div>

        <div className={s.de}>
          <div>
            <h1>DogLandia</h1>
            <div className={s.link}>
              <Link  to='/home'>
                <button className={s.btn}>Ingresar</button>
              </Link>
            </div>
            
          </div>

          <div className={s.sociales}>
            <ul>
                <li >
                  <a href="https://www.linkedin.com/in/dev-sebastian-vera" target={'_blank'} rel="noreferrer">
                    <FaLinkedin/>
                  </a>
                </li>

                <li>
                  <a href="https://www.github.com/wzseba" target={'_blank'} rel="noreferrer">
                    <FaGithub/>
                  </a>
                </li>

                <li >
                  <a href="mailto:wzseba@gmail.com" target={'_blank'} rel="noreferrer">
                    <FaEnvelope/>
                  </a>
                </li>
              </ul>

              <div className={s.autor}>Designed and built by <span>Sebastian Vera</span></div>
          </div>

        </div>

      </div>
    
    
  )
}

export default Landing;