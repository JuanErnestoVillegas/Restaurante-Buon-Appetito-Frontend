export const validationLogin = (values) =>{
    let errors={}
    if(!values.email){
      errors.email='Campo Email obligatorio.'
    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
      errors.email='El email no es válido.';
    } else if(values.email.lenght >30 ){
      errors.email='El email no puede tener más de 30 caracteres.';
    }
    if(!values.password){
      errors.password = 'Campo Contraseña obligatorio.'
    } else if(values.password.lenght < 3 ){
      errors.password='La contraseña no puede tener menos de 3 caracteres.';
    } else if(values.password.lenght > 30 ){
      errors.password='La contraseña no puede tener más de 30 caracteres.';
    }
    return errors;
  }

  export const validationRegister = (values)=> {
    let errors = {};
    
    if (!values.name) {
        errors.name = 'Nombre requerido';
    } 
    if (values.name.length < 3 || values.name.length >15) {
        errors.name = 'El nombre debe tener entre 3 y 15 letras';
    }
    if (!values.lastname) {
        errors.name = 'Apellido requerido';
    } 
    if (values.lastname.length < 3 || values.lastname.length >20) {
        errors.name = 'El apellido debe tener entre 3 y 20 letras';
    }
    if(!values.email){
      errors.email='Campo Email obligatorio.'
    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
      errors.email='El email no es válido.';
    } else if(values.email.lenght >30 ){
      errors.email='El email no puede tener más de 30 caracteres.';
    }
    if (!values.password) {
        errors.password = 'Contraseña requerida';
    } 
    if (values.password.length < 3 || values.password.length > 16) {
        errors.password = 'La contraseña debe tener entre 3 y 16 caracteres';
    }
    if (!values.password2) {
        errors.password2 = 'Contraseña requerida';
    } 
    if (values.password2 !== values.password) {
        errors.password2 = 'Las contraseñas no coinciden';
    }

    if (!values.role) {
      errors.role = 'Rol requerido';
  } 
    return errors;
}

export const validationMail = (values) =>{
  let errors={}
  if(!values.email){
    errors.email='Campo Email obligatorio.'
  } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
    errors.email='El email no es válido.';
  } else if(values.email.lenght >30 ){
    errors.email='El email no puede tener más de 30 caracteres.';
  }
  return errors;
}

export const validationContact = (values)=> {
  let errors = {};
  
  if (!values.name) {
      errors.name = 'Nombre requerido';
  } 
  if (values.name.length < 3 || values.name.length >20) {
      errors.name = 'El nombre debe tener entre 3 y 20 letras';
  }
  if (!values.lastname) {
      errors.name = 'Apellido requerido';
  } 
  if (values.lastname.length < 3 || values.lastname.length >20) {
      errors.name = 'El apellido debe tener entre 3 y 20 letras';
  }
  if(!values.email){
    errors.email='Campo Email obligatorio.'
  } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
    errors.email='El email no es válido.';
  } else if(values.email.lenght >30 ){
    errors.email='El email no puede tener más de 30 caracteres.';
  }
  return errors;
}
