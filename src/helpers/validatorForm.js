export const validationsForm = (form)=>{
    let errors = {};
  
    /**corregir espacios en blanco */
    const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]{3,15}$/;
    // const regexUrl = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_.~#?&=]*)/
    
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
    if(!form.lifeSpan?.trim()){
      errors.lifeSpan = 'No puede ir vacio'
    }else if(Number(form.lifeSpan) < 1 || Number(form.lifeSpan) > 40){
      errors.lifeSpan = 'La esperanza de vida debe ser mayor a 1 y menor de 40'
    }
  
    return errors;
  }

  export const validatorLogin = (form)=>{
    
    let errorsLogin = {};

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexPassword = /^(?=.*\d)(?=.*[az])(?=.*[AZ]).{4,8}$/;

    if(form.email.includes(' ')){
      errorsLogin.email = 'No puede contener espacios vacios'
    }else if(!regexEmail.test(form.email.trim())){
      errorsLogin.email = 'El campo solo acepta un email valido'
    }

    if(form.password.includes(' ')){
      errorsLogin.password = 'No puede contener espacios vacios'
    }else if(!regexPassword.test(form.password.trim())){
      errorsLogin.password = 'Debe contener un dígito numerico, una letra mayúscula y una minuscula'
    }
    
    return errorsLogin;
  }