import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm';
import { getTemperaments } from '../../redux/action';
import s from './FormDog.module.css';

const initialForm = {
  name:'',
  minHeight:'',
  maxHeight:'',
  minWeight:'',
  maxWeight:'',
  temperaments:[],
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
  if(!form.minHeight.trim()){
    errors.minHeight = 'No puede ir vacio'
  }else if(Number(form.minHeight) > Number(form.maxHeight)){
    errors.minHeight = 'La altura minima no puede ser mayor a su altura maxima'
  }

  if(!form.maxHeight.trim()){
    errors.maxHeight = 'No puede ir vacio'
  }else if(Number(form.maxHeight) < Number(form.minHeight)){
    errors.maxHeight = 'La altura maxima no puede ser menor a su altura minima'
  }
  /**PESO */
  if(!form.minWeight.trim()){
    errors.minWeight = 'No puede ir vacio'
  }else if(Number(form.minWeight) > Number(form.maxWeight)){
    errors.minWeight = 'El peso minimo no puede ser mayor a su peso maximo'
  }

  if(!form.maxWeight.trim()){
    errors.maxWeight = 'No puede ir vacio'
  }else if(Number(form.maxWeight) < Number(form.minWeight)){
    errors.maxWeight = 'El peso maximo no puede ser menor a su peso minimo'
  }

  if(form.image.includes(' ')){
    errors.image = 'No puede contener espacios vacios'
  }else if(!regexUrl.test(form.image)){
    errors.image = 'La url que ingreso no es un formato valido'
  }

  return errors;
}

const FormDog = () => {

  const {
    form,
    errors,
    handleChange,
    handleBlur,
    handleDelete,
    handleSelect,
    handleSubmit
  } = useForm(initialForm,validationsForm)

    const dispatch = useDispatch();
    const allTemp = useSelector(state => state.temperaments);
   
    useEffect(() => {
      dispatch(getTemperaments());
    }, [dispatch]);

  return (
    <>
      <Link className={s.btn_volver} to='/home'>
        <button>Volver</button>
      </Link>
      <h2 className={s.title}>Crear Raza</h2>
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
        name='maxHeight'
        min="4" 
        max="140"
        value={form.maxHeight}
        placeholder='Altura Maxima'
        onChange={handleChange}
        onBlur={handleBlur}
        required/>
      </label>
      {errors.maxHeight && <p>{errors.maxHeight}</p>}
    </div>

    <div className={s.container_label_input_errors}>
      <label className={s.container_label}>
        Min Height:
        <input 
        type="number" 
        name='minHeight'
        min="4" 
        max="140"
        value={form.minHeight}
        placeholder='Altura Minima'
        onChange={handleChange}
        onBlur={handleBlur}
        required/>
      </label>
      {errors.minHeight && <p>{errors.minHeight}</p>}
    </div>

    <div className={s.container_label_input_errors}>
      <label className={s.container_label}>
        Max Weight:
        <input 
        type="number" 
        name='maxWeight'
        min="4" 
        max="90"
        value={form.maxWeight}
        placeholder='Peso Maximo'
        onChange={handleChange}
        onBlur={handleBlur}
        required/>
      </label>
      {errors.maxWeight && <p>{errors.maxWeight}</p>}
    </div>

    <div className={s.container_label_input_errors}>
      <label className={s.container_label}>
        Min Weight:
        <input 
        type="number" 
        name='minWeight'
        min="4" 
        max="90"
        value={form.minWeight}
        placeholder='Peso Minimo'
        onChange={handleChange}
        onBlur={handleBlur}
        required/>
      </label>
      {errors.minWeight && <p>{errors.minWeight}</p>}
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
      form.temperaments?.map((temp,index) => (
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