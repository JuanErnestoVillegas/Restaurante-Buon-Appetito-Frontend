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

  export const validateRegister = (values)=> {
    let errorsR = {};
    
    if (!values.name) {
        errorsR.name = 'Nombre requerido';
    } 
    if (values.name.length < 3 || values.name.length >15) {
        errorsR.name = 'El nombre debe tener entre 3 y 15 letras';
    }
    if (!values.lastname) {
        errorsR.name = 'Apellido requerido';
    } 
    if (values.lastname.length < 3 || values.lastname.length >20) {
        errorsR.name = 'El apellido debe tener entre 3 y 20 letras';
    }
    if(!values.email){
      errorsR.email='Campo Email obligatorio.'
    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
      errorsR.email='El email no es válido.';
    } else if(values.email.lenght >30 ){
      errorsR.email='El email no puede tener más de 30 caracteres.';
    }
    if (!values.password) {
        errorsR.password = 'Contraseña requerida';
    } 
    if (values.password.length < 3 || values.password.length > 16) {
        errorsR.password = 'La contraseña debe tener entre 3 y 16 caracteres';
    }
    if (!values.password2) {
        errorsR.password2 = 'Contraseña requerida';
    } 
    if (values.password2 !== values.password) {
        errorsR.password2 = 'Las contraseñas no coinciden';
    }

    if (!values.role) {
      errorsR.role = 'Rol requerido';
  } 
    return errorsR;
}