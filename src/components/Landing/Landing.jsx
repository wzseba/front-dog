import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
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
                    <FontAwesomeIcon icon={faLinkedinIn} size='2xl'/>
                   
                  </a>
                </li>

                <li>
                  <a href="https://www.github.com/wzseba" target={'_blank'} rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} size='2xl'/>
                   
                  </a>
                </li>

                <li >
                  <a href="mailto:wzseba@gmail.com" target={'_blank'} rel="noreferrer">
                    <FontAwesomeIcon icon={faEnvelope} size='2xl'/>
                    
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