import React from "react";
import s from "../FormLogin/FormLogin.module.css";
import { useDispatch } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { validatorLogin } from "../../helpers/validatorForm";
import { loginForm } from "../../redux/action";


const initialRegister = {
  name:'',
  email:'',
  password:''
}

const Register = () => {
  const dispatch = useDispatch();
  
  const {handleSubmit, handleBlur, handleChange, errors} = useForm(initialRegister, validatorLogin, dispatch, loginForm);
  return (
    <div>
      <h1>DogLandia</h1>
      <div className={s.link}>
        <form className={s.formulario} onSubmit={handleSubmit}>
          <label className={s.container_label}>
            Name:
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
          </label>
          <label className={s.container_label}>
            Email:
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
          </label>
          {errors?.email && <p className={s.errorParrafo}>{errors?.email}</p>}

          <label className={s.container_label}>
            Password:
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
          </label>
          {errors?.password && (
            <p className={s.errorParrafo}>{errors?.password}</p>
          )}
          <div className={s.submit}>
            <abbr title="Los usuarios pueden crear razas">
              <input type="submit" value="Crear Usuario" />
            </abbr>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
