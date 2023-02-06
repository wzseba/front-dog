import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { getTemperaments } from '../../redux/action';

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
   <form onSubmit={handleSubmit}>
    <div>
      <label>
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

    <div>
      <label>
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

    <div>
      <label>
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

    <div>
      <label>
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
    </div>
    {errors.maxWeight && <p>{errors.maxWeight}</p>}
    <div>
      <label>
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

    <div>
      <label>
        Temperaments:
        <select onChange={handleSelect}>
          {allTemp?.map(temp =>(
            <option key={temp.id} value={temp.name}>{temp.name}</option>
          ))}
        </select>
      </label>
    </div>

    <div>
      <label>
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
    {/* mostrar por pantalla los temperamentos elegidos */}
    {
      form.temperaments?.map((temp,index) => (
        <div key={index}>
          <p>{temp}</p>
          <button onClick={()=>handleDelete(temp)}>x</button>
        </div>
      ))
    }

    <input type='submit' value='Crear Dog'/>
   </form>
  )
}

export default FormDog