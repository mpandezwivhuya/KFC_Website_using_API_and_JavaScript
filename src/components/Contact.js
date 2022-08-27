
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import '../Style/contact.css'
import { Link } from "react-router-dom";


// npm i @emailjs/browser

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "replace with service id",
        "replace with template id",
        form.current,
        "replace with user id"
      )
  };

  return (
    
    <div style={{backgroundColor:'#fcf5ec', height:510}}>
       <h1 style={{textAlign:'center'}}>Contact Form</h1>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <Link to ='/'><input style={{width:550}} type="submit" value="Send" /></Link>
      </form>
    </div>
  );
};

export default Contact;


  
