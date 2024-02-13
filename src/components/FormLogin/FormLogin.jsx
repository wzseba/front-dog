// import { useSelector } from 'react-redux';
// import Dashboard from '../Dashboard/Dashboard';

import { Input, Button, Label } from '../ui';

import s from './FormLogin.module.css';

const FormLogin = ({
  form,
  handleSubmit,
  handleBlur,
  handleChange,
  errors,
}) => {
  // const token = useSelector(state => state.token?.ok);
  // const errorMsgServer = useSelector(state => state.error);

  // if (token) {
  //   return <Dashboard />;
  // }
  return (
    <div>
      <h1>DogLandia</h1>
      <div className={s.link}>
        <form className={s.formulario} onSubmit={handleSubmit}>
          <Label className={s.container_label}>
            Email:
            <Input
              type='email'
              name='email'
              value={form.email}
              placeholder='Email'
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
          </Label>
          {errors?.email && <p className={s.errorParrafo}>{errors?.email}</p>}

          <Label className={s.container_label}>
            Password:
            <Input
              type='password'
              name='password'
              value={form.password}
              placeholder='Password'
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
          </Label>

          {errors?.password && (
            <p className={s.errorParrafo}>{errors?.password}</p>
          )}
          <div className={s.submit}>
            <Input
              type='submit'
              value='Iniciar Sesion'
              title='Los usuarios pueden crear razas'
            />

            <Button to='/home' title='Los usuarios no pueden crear razas'>
              Invitado
            </Button>
          </div>
        </form>
        <Button className={s.crearCuenta} to='/register'>
          Crear una cuenta
        </Button>
      </div>
      {/* <h1>{errorMsgServer}</h1> */}
    </div>
  );
};

export default FormLogin;
