import React, { useRef } from 'react'
import './style.css'
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_9w228qn', 'template_tfixnfa', form.current, {
        publicKey: 'n1jfat8yNOOjDLK21',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          toast('Form Submitted Successfully!', {
            icon: '🎉🎉',
          });
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error('FAILED...', error.text);
        },
      );
  };
  return (
    <div class="contact">
    <div class="map">
        {/* <!-- Google Map location goes here --> */}
        <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224568.18562689467!2d76.69437528176171!3d28.422940898822446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1713453455664!5m2!1sen!2sin"
         width="600" 
         height="450" 
         style={{ border: "0" }}
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade"
          title='my-location-map'/>
    </div>
    <div class="form">
        <h1 className='heading-form'>Let's Connect</h1>
        <form ref={form} onSubmit={sendEmail}>        
            <input type="text" placeholder="Name" name="user_name" />
            <input type="email" placeholder="Email Address" name="user_email"/>         
            <input type="number" placeholder="Phone Number" />
            <textarea placeholder="Message" name="message"></textarea>
            <button type="submit">Submit</button>
            <Toaster
  position="top-center"
  reverseOrder={true}
/>
        </form>
        
    </div>
</div>
  )
}

export default Contact
