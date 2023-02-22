import React from 'react';
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm';
import { createDog, getTemperaments } from '../../redux/action';
import s from './FormDog.module.css';

const initialForm = {
  name:'',
  minheight:'',
  maxheight:'',
  minweight:'',
  maxweight:'',
  life_span:'',
  temperament:[],
  image:''
}

const validationsForm = (form)=>{
  let errors = {};

  /**corregir espacios en blanco */
  const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]{3,15}$/;
  const regexUrl = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_.~#?&=]*)/
  
  if(form.name.includes(' ')){
    errors.name = 'No puede contener espacios vacios'
  }else if(!regexName.test(form.name.trim())){
    errors.name = 'El campo solo acepta letras y un rango de 3 a 15 caracteres'
  }
  /**ALTURA */
  if(!form.minheight.trim()){
    errors.minheight = 'No puede ir vacio'
  }else if(Number(form.minheight) > Number(form.maxheight)){
    errors.minheight = 'La altura minima no puede ser mayor a su altura maxima'
  }

  if(!form.maxheight.trim()){
    errors.maxheight = 'No puede ir vacio'
  }else if(Number(form.maxheight) < Number(form.minheight)){
    errors.maxheight = 'La altura maxima no puede ser menor a su altura minima'
  }
  /**PESO */
  if(!form.minweight.trim()){
    errors.minweight = 'No puede ir vacio'
  }else if(Number(form.minweight) > Number(form.maxweight)){
    errors.minweight = 'El peso minimo no puede ser mayor a su peso maximo'
  }

  if(!form.maxweight.trim()){
    errors.maxweight = 'No puede ir vacio'
  }else if(Number(form.maxweight) < Number(form.minweight)){
    errors.maxweight = 'El peso maximo no puede ser menor a su peso minimo'
  }

  /**ESPERANZA DE VIDA */
  if(!form.life_span.trim()){
    errors.life_span = 'No puede ir vacio'
  }else if(Number(form.life_span) < 1 || Number(form.life_span) > 40){
    errors.life_span = 'La esperanza de vida debe ser mayor a 1 y menor de 40'
  }

  if(form.image.includes(' ')){
    errors.image = 'No puede contener espacios vacios'
  }else if(!regexUrl.test(form.image)){
    errors.image = 'La url que ingreso no es un formato valido'
  }

  return errors;
}

const FormDog = () => {
  const dispatch = useDispatch();
  const {
    form,
    errors,
    handleChange,
    handleBlur,
    handleDelete,
    handleSelect,
    handleSubmit
  } = useForm(initialForm,validationsForm,dispatch,createDog)

    
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
        type="text" 
        name='name'
        value={form.name}
        placeholder='Nombre de Raza'
        onChange={handleChange}
        onBlur={handleBlur}
        required/>
      </label>
    {errors.name && <p>{errors.name}</p>}
    </div>

    <div className={s.container_label_input_errors}>
      <label className={s.container_label}>
        Max Height:
        <input 
        type="number" 
        name='maxheight'
        min="4" 
        max="140"
        value={form.maxheight}
        placeholder='Altura Maxima'
        onChange={handleChange}
        onBlur={handleBlur}
        required/>
      </label>
      {errors.maxheight && <p>{errors.maxheight}</p>}
    </div>

    <div className={s.container_label_input_errors}>
      <label className={s.container_label}>
        Min Height:
        <input 
        type="number" 
        name='minheight'
        min="4" 
        max="140"
        value={form.minheight}
        placeholder='Altura Minima'
        onChange={handleChange}
        onBlur={handleBlur}
        required/>
      </label>
      {errors.minheight && <p>{errors.minheight}</p>}
    </div>

    <div className={s.container_label_input_errors}>
      <label className={s.container_label}>
        Max Weight:
        <input 
        type="number" 
        name='maxweight'
        min="4" 
        max="90"
        value={form.maxweight}
        placeholder='Peso Maximo'
        onChange={handleChange}
        onBlur={handleBlur}
        required/>
      </label>
      {errors.maxweight && <p>{errors.maxweight}</p>}
    </div>

    <div className={s.container_label_input_errors}>
      <label className={s.container_label}>
        Min Weight:
        <input 
        type="number" 
        name='minweight'
        min="4" 
        max="90"
        value={form.minweight}
        placeholder='Peso Minimo'
        onChange={handleChange}
        onBlur={handleBlur}
        required/>
      </label>
      {errors.minweight && <p>{errors.minweight}</p>}
    </div>

    <div className={s.container_label_input_errors}>
      <label className={s.container_label}>
        Life Span:
        <input 
        type="number" 
        name='life_span'
        min="1" 
        max="40"
        value={form.life_span}
        placeholder='Esperanza de vida'
        onChange={handleChange}
        onBlur={handleBlur}
        required/>
      </label>
      {errors.life_span && <p>{errors.life_span}</p>}
    </div>

    <div className={s.container_label_input_errors}>
      <label className={s.container_label}>
        Imagen:
        <input 
        type="text" 
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
          {allTemp?.map(temp =>(
            <option key={temp.id} value={temp.name}>{temp.name}</option>
          ))}
        </select>
      </label>
    </div>
    
    <input type='submit' value='Crear Dog'/>
   </form>
    
    <h2 className={s.title_temperaments}>Temperamentos</h2>
    <div className={s.container_temps}>
    {
      form.temperament?.map((temp,index) => (
        <div className={s.container_btn_temp} key={index}>
          <p className={s.flex_items}>{temp}</p>
          <button className={s.flex_items} onClick={()=>handleDelete(temp)}>x</button>
        </div>
      ))
    }
    </div>
    
    </div>
    </>
  )
}

export default FormDog