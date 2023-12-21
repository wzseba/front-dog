import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import s from './Landing.module.css';

import { useForm } from '../../hooks/useForm';
import { validatorLogin } from '../../helpers/validatorForm';
import { useDispatch } from 'react-redux';
import { loginForm } from '../../redux/action';
import FormLogin from '../FormLogin/FormLogin';

const initialLogin = {
  email:'',
  password:''
}

const Landing = () => {

  const dispatch = useDispatch();
  
  const {form, handleSubmit, handleBlur, handleChange, errors} = useForm(initialLogin, validatorLogin, dispatch, loginForm);

  return (
    
      <div className={s.container}>
        <div className={s.iz}>
          <h2>Pi-Dog</h2>
        </div>

        <div className={s.de}>
          <FormLogin
            form={form}
            handleSubmit={handleSubmit}
            handleBlur={handleBlur}
            handleChange={handleChange}
            errors={errors}
          />

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