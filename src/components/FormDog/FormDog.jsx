import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getTemperaments } from '../../redux/action';


const FormDog = () => {

    const dispatch = useDispatch();
    const allTemp = useSelector(state => state.temperaments);
    const [error, setError] = useState({
      name:'',
      vacio:''
    });
    const [input, setInput] = useState({
      name:'',
      minHeight:'',
      maxHeight:'',
      minWeight:'',
      maxWeight:'',
      temperaments:[],
      image:''
    })

    useEffect(() => {
      dispatch(getTemperaments());
    
    }, [dispatch]);

    /**Validacion de inputs */
    const validate = ()=>{

      let regName = /^[A-Za-z\u00f1\u00d1]{3,15}$/;
  
      if(regName.test(input.name)){
        setError({...error, name:''});
      }else{
        setError({...error, name:'No puede estar vacio y debe ingresar de 4 a 14 caracteres alfabeticos'});
      }

    }

    const handleChange = (e)=>{
      
      setInput({
        ...input,
        [e.target.name]: e.target.value
      })
      validate();
    }

    const handleBlur = (e)=>{
      handleChange(e)
    }
    const handleSelect = (e)=>{
      
      setInput({
        ...input,
        temperaments:[...input.temperaments, e.target.value]
      })
      
    }

    const handleDelete = (e)=>{
      setInput({
        ...input,
        temperaments: input.temperaments.filter( t => t !== e)
      })
      
    }

    const handleSubmit = (e)=>{
      e.preventDefault();
      console.log(input);
    }

  return (
   <form onSubmit={handleSubmit}>
    <div>
      <label>
        Name:
        <input 
        type="text" 
        name='name'
        value={input.name}
        placeholder='Nombre de Raza'
        onChange={handleChange}
        onBlur={handleBlur}/>
      </label>
      {error && <p>{error.name}</p>}
    </div>

    <div>
      <label>
        Max Height:
        <input 
        type="number" 
        name='maxHeight'
        value={input.maxHeight}
        placeholder='Altura Maxima'
        onChange={handleChange}/>
      </label>
    </div>

    <div>
      <label>
        Min Height:
        <input 
        type="number" 
        name='minHeight'
        value={input.minHeight}
        placeholder='Altura Minima'
        onChange={handleChange}/>
      </label>
    </div>

    <div>
      <label>
        Max Weight:
        <input 
        type="number" 
        name='maxWeight'
        value={input.maxWeight}
        placeholder='Peso Maximo'
        onChange={handleChange}/>
      </label>
    </div>

    <div>
      <label>
        Min Weight:
        <input 
        type="number" 
        name='minWeight'
        value={input.minWeight}
        placeholder='Peso Minimo'
        onChange={handleChange}/>
      </label>
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
        value={input.image}
        placeholder='url'
        onChange={handleChange}/>
      </label>
    </div>
    {/* mostrar por pantalla los temperamentos elegidos */}
    {
      input.temperaments?.map((temp,index) => (
        <div key={index}>
          <p>{temp}</p>
          <button onClick={()=>handleDelete(temp)}>x</button>
        </div>
      ))
    }

    <button type='submit'>Crear Dog</button>
   </form>
  )
}

export default FormDog