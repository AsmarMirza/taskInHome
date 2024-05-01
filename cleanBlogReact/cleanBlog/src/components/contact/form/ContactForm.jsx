import React from 'react'
import "./contactForm.scss"
function ContactForm() {
  return (
    <div>
          <div className="contact__main">
      <div className="form">
<p className="form__text">Want to get in touch? Fill out the form below to send me a message and I will get back to you as soon as possible!</p>
<form action="" className="contact__form">
  
<input type="text" className="contact__form__input" placeholder="Name"/>
<input type="email" className="contact__form__input" placeholder="Emaill address"/>
<input type="email" className="contact__form__input" placeholder="Phone Number"/>
  <div></div><textarea  className="textarea" name="" id="" cols="60" rows="" placeholder="Message"></textarea>
<div className="send__buttn">Send</div>
</form>
</div>
      </div>
    </div>
   
  )
}

export default ContactForm
