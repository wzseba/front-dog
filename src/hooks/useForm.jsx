import { useState } from "react";


export const useForm = (initialForm,validateForm,dispatch,enviarData)=>{

   const [form,setForm] = useState(initialForm);
   const [errors,setErrors] = useState({});

   /**manejadores de eventos */

   const handleChange = (e)=>{
    const {name, value} = e.target;

    setForm({
        ...form,
        [name]:value
    })
   }

   const handleBlur = (e)=>{
    handleChange(e);
    /** Setea el error de cada propiedad del objeto form*/
    setErrors(validateForm(form))
   }

   const handleSelect = (e)=>{
    const {value} = e.target
    setForm({
            ...form,
         temperaments:[...form.temperaments, value]
        })
   }

   const handleDelete = (e)=>{
    setForm({
        ...form,
        temperaments: form.temperaments.filter( t => t !== e)
    })
   }

   const handleSubmit = (e)=>{
    e.preventDefault();

    if(e.target[2]){
        console.log('enviando form al backend ', form)
        dispatch(enviarData(form));
        return;
    }

    setErrors(validateForm(form));
    
    if(Object.keys(errors).length === 0){
        dispatch(enviarData(form));
        alert('Perrito Creado con exito');
        
        /**Se formatea estado */
        setForm(initialForm);
    }else{
        return;
    }
   }

   return {
    form,
    errors,
    handleChange,
    handleBlur,
    handleDelete,
    handleSelect,
    handleSubmit
   }
}