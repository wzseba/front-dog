import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { createDog, getTemperaments } from '../../redux/action';
import s from './FormDog.module.css';
import { validationsForm } from '../../helpers/validatorForm';

const initialForm = {
  name: '',
  minheight: '',
  maxheight: '',
  minweight: '',
  maxweight: '',
  lifeSpan: '',
  temperaments: [],
  image: '',
};

const FormDog = () => {
  const dispatch = useDispatch();
  const {
    form,
    errors,
    handleChange,
    handleBlur,
    handleDelete,
    handleSelect,
    handleSubmit,
  } = useForm(initialForm, validationsForm, dispatch, createDog);

  const allTemp = useSelector(state => state.temperaments);

  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  return (
    <>
      <Link className={s.btn_volver} to='/home'>
        <button>Volver</button>
      </Link>
      <h2 className={s.title}>Creador de Raza</h2>
      <div className={s.container}>
        <form className={s.container_form} onSubmit={handleSubmit}>
          <div className={s.container_label_input_errors}>
            <label className={s.container_label}>
              Name:
              <input
                type='text'
                name='name'
                value={form.name}
                placeholder='Nombre de Raza'
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
            </label>
            {errors.name && <p>{errors.name}</p>}
          </div>

          <div className={s.container_label_input_errors}>
            <label className={s.container_label}>
              Max Height:
              <input
                type='number'
                name='maxheight'
                min='4'
                max='140'
                value={form.maxheight}
                placeholder='Altura Maxima'
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
            </label>
            {errors.maxheight && <p>{errors.maxheight}</p>}
          </div>

          <div className={s.container_label_input_errors}>
            <label className={s.container_label}>
              Min Height:
              <input
                type='number'
                name='minheight'
                min='4'
                max='140'
                value={form.minheight}
                placeholder='Altura Minima'
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
            </label>
            {errors.minheight && <p>{errors.minheight}</p>}
          </div>

          <div className={s.container_label_input_errors}>
            <label className={s.container_label}>
              Max Weight:
              <input
                type='number'
                name='maxweight'
                min='4'
                max='90'
                value={form.maxweight}
                placeholder='Peso Maximo'
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
            </label>
            {errors.maxweight && <p>{errors.maxweight}</p>}
          </div>

          <div className={s.container_label_input_errors}>
            <label className={s.container_label}>
              Min Weight:
              <input
                type='number'
                name='minweight'
                min='4'
                max='90'
                value={form.minweight}
                placeholder='Peso Minimo'
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
            </label>
            {errors.minweight && <p>{errors.minweight}</p>}
          </div>

          <div className={s.container_label_input_errors}>
            <label className={s.container_label}>
              Life Span:
              <input
                type='number'
                name='lifeSpan'
                min='1'
                max='40'
                value={form.lifeSpan}
                placeholder='Esperanza de vida'
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
            </label>
            {errors.lifeSpan && <p>{errors.lifeSpan}</p>}
          </div>

          <div className={s.container_label_input_errors}>
            <label className={s.container_label}>
              Imagen:
              <input
                type='text'
                name='image'
                value={form.image}
                placeholder='url'
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </label>
            {errors.image && <p>{errors.image}</p>}
          </div>

          <div>
            <label className={s.container_label}>
              Temperaments:
              <select onChange={handleSelect}>
                {allTemp?.map(temp => (
                  <option key={temp.id} value={temp.name}>
                    {temp.name}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <input type='submit' value='Crear Dog' />
        </form>

        <h2 className={s.title_temperaments}>Temperamentos</h2>
        <div className={s.container_temps}>
          {form.temperaments?.map((temp, index) => (
            <div className={s.container_btn_temp} key={index}>
              <p className={s.flex_items}>{temp}</p>
              <button
                className={s.flex_items}
                onClick={() => handleDelete(temp)}
              >
                x
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FormDog;
