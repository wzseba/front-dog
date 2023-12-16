import React from "react";
import { Link } from "react-router-dom";
import s from "./FormLogin.module.css";

const FormLogin = ({ handleSubmit, handleBlur, handleChange, errors }) => {
  return (
    <div>
      <h1>DogLandia</h1>
      <div className={s.link}>
        <form className={s.formulario} onSubmit={handleSubmit}>
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
              <input type="submit" value="Iniciar Sesion" />
            </abbr>
            <abbr title="Los usuarios no pueden crear razas">
              <Link to="/home">Invitado</Link>
            </abbr>
          </div>
        </form>
        <Link className={s.crearCuenta} to="/register">
          Crear una cuenta
        </Link>
      </div>
    </div>
  );
};

export default FormLogin;
