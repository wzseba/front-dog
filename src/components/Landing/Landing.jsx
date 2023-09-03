import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import s from './Landing.module.css';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { validatorLogin } from '../../helpers/validatorForm';
import { useDispatch } from 'react-redux';
import { loginForm } from '../../redux/action';

const initialLogin = {
  email:'',
  password:''
}

const Landing = () => {

  const dispatch = useDispatch();
  
  const {handleSubmit, handleBlur, handleChange, errors} = useForm(initialLogin, validatorLogin, dispatch, loginForm);

  return (
    
      <div className={s.container}>
        <div className={s.iz}>
          <h2>Pi-Dog</h2>
        </div>

        <div className={s.de}>
          <div>
            <h1>DogLandia</h1>
            <div className={s.link}>
      
              <form className={s.formulario} onSubmit={handleSubmit}>
                <label className={s.container_label}>
                  Email:
                  <input 
                  type="email"
                  name='email'
                  placeholder='Email'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required/>
                </label>
                {errors.email && <p className={s.errorParrafo}>{errors.email}</p>}

                <label className={s.container_label}>
                  Password:
                  <input 
                  type="password" 
                  name='password'
                  placeholder='Password'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required/>
                </label>
                {errors.password && <p className={s.errorParrafo}>{errors.password}</p>}
                <div className={s.submit}>
                  <abbr title="Los usuarios pueden crear razas"><input type='submit' value='Iniciar Sesion'/></abbr>
                  <abbr title="Los usuarios no pueden crear razas"><Link to='/home'>Invitado</Link></abbr>
                </div>
              </form>
              <Link className={s.crearCuenta} to='/'>
                Crear una cuenta
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