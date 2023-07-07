import React from "react"
import './contact.css'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact(){
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_q3xwjuk', 'template_p4xurtp', form.current, '6JHZXwcfhxUXFi4DU')
      .then((result) => {
          console.log(result.text);
          console.log("Message send")
      }, (error) => {
          console.log(error.text);
      });
  };
    return(
        <section className="section"id="contact">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row ">

                <div className="flex-1 ">
                    <div className="headline">
                        <h4 className="text-x1 upperacse text-accent font-medium mb-2 tracking-wide">Get in Touch</h4>
                        <h2 className="text-[45px] lg:text-[90px] leading-none mb-12" >Lets Work <br/>together</h2>
                    </div>
                    </div>
                    
                    <form className="form flex-1 border rounded-5 pb-14 p-6 items-start " ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input className="bg-=transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"type="text" name="user_name" />
      <label>Email</label>
      <input className="bg-=transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all" type="email" name="user_email" />
      <label>Message</label>
      <textarea className="bg-=transparent border-b py-10 outline-none w-full placeholder:text-white focus:border-accent transition-all" name="message" />
      <input className="btn btn-lg" type="submit" value="Send" />
    </form>                    

                </div>

            </div>

        </section>
        
        
    )
}
export default Contact