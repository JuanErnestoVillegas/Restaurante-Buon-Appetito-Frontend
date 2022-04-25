import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Mail = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    let userName = String(document.getElementById("user_name").value);
    let dest = String(document.getElementById("user_email").value);   

    let templateParams ={
      from_name: "Administrador",
      user_name: userName,
      destinatario: dest,
      message: "Gracias por utilizar nuestros servicios. Esperamos que tengas una excelente experiencia con Buon Appetito.",
    };
     // emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
    emailjs.send('service_kd00g6g', 'template_zghtsvk', templateParams, 'zu36obM0kMdrA0dIG')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
 
  return (
    <form ref={form} onSubmit={sendEmail}>
        <br />
        <br />
        <br />
        <br />
        <br />
      <label>Name</label>
      <br />
      <input type="text" id="user_name" name="user_name" />
      <br />
      <label>Email</label>
      <br />
      <input type="email" id="user_email" name="user_email" />
      <br />
      <br />
      {/* <label>Message</label>
      <textarea name="message" /> */}
      <input type="submit" value="Send" />
    </form>
  );
};

export default Mail;
