import React from "react";
import s from "./Register.module.css";
import { useDispatch } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { validatorRegister } from "../../helpers/validatorForm";
import { registerForm } from "../../redux/action";
import { Button, Input, Label } from "../ui";

const initialRegister = {
  name: "",
  email: "",
  password: "",
};

const Register = () => {
  const dispatch = useDispatch();

  const { form, handleSubmit, handleBlur, handleChange, errors } = useForm(
    initialRegister,
    validatorRegister,
    dispatch,
    registerForm
  );
  return (
    <div className={s.container}>
      <h1>DogLandia Crear Usuario</h1>
      <div className={s.link}>
        <form className={s.formulario} onSubmit={handleSubmit}>
          <Label className={s.container_label}>
            Name:
            <Input
              type="text"
              name="name"
              value={form.name}
              placeholder="Name"
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
          </Label>
          {errors?.name && <p className={s.errorParrafo}>{errors?.name}</p>}
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
            <Input type="submit" value="Crear Usuario" />
            <Button className={s.crearCuenta} to="/">
              Volver
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
