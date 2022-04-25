import { useEffect, useState } from "react";
import {validationLogin } from './../helpers/validations';

const useForm = (initialValues, submit, validation) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const[submitting, setSubmitting] = useState(false)
  useEffect(()=>{
    if(submitting){
      if(Object.keys(errors).length===0){
        submit(values);
      }
      setSubmitting(false);
    }
  },[errors]); 

  const handleKeyUp = (e) =>{
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(validation){
      setErrors(validation(values));
    }else{
      setErrors({});
    }     
    setSubmitting(true);   
  }

console.log(values);

  return {
    values,
    handleKeyUp,
    handleSubmit,
    errors
  }
}
 
export default useForm;