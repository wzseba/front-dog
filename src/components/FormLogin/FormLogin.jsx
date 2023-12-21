import React from "react";

import {Input, Button, Label} from "../ui";

import s from "./FormLogin.module.css";

const FormLogin = ({form, handleSubmit, handleBlur, handleChange, errors }) => {
  return (
    <div>
      <h1>DogLandia</h1>
      <div className={s.link}>
        <form className={s.formulario} onSubmit={handleSubmit}>
          <Label className={s.container_label}>
            Email:
            <Input
              type="email"
              name="email"
              value={form.email}
              placeholder="Email"
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
          </Label>
          {errors?.email && <p className={s.errorParrafo}>{errors?.email}</p>}

          <Label className={s.container_label}>
            Password:
            <Input
              type="password"
              name="password"
              value={form.password}
              placeholder="Password"
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
          </Label>

          {errors?.password && (
            <p className={s.errorParrafo}>{errors?.password}</p>
          )}
          <div className={s.submit}>
            <abbr title="Los usuarios pueden crear razas">
              <Input type="submit" value="Iniciar Sesion" />
            </abbr>
            <abbr title="Los usuarios no pueden crear razas">
              <Button to="/home">Invitado</Button>
            </abbr>
          </div>
        </form>
        <Button className={s.crearCuenta} to="/register">
          Crear una cuenta
        </Button>
      </div>
    </div>
  );
};

export default FormLogin;
