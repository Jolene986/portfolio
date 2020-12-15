import React from 'react'
import NetlifyForm from 'react-netlify-form'
import {FaLinkedinIn} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
 const Contact = () => {
  return (
    <section id="contact">
      <div className= "contact-container">
        <div className="contact-left">
          <h3>Let's build something great together!</h3>
          <div  className='icon-container'>
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://www.linkedin.com/in/jovana-jovanovic-dev/'
      >
        <FaLinkedinIn className='contact-icon' />
      </a>
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://github.com/Jolene986'
      >
        <FaGithub className='contact-icon' />
      </a>
      <a
        
        href='mailto:jojovanovic86@gmail.com'
      >
        <MdEmail className='contact-icon' />
      </a>
      </div>
        </div>
        <div className="contact-right">
      <NetlifyForm name='contact'>
  {({ loading, error, success }) => (
    <div className="form-container">
      {loading &&
        <div>Loading...</div>
      }
      {error &&
        <div>Your information was not sent. Please try again later.</div>
      }
      {success &&
        <div>Thank you for contacting me!</div>
      }
      {!loading && !success &&
      <>
        <div>
          <input type="hidden" name="form-name" value="contact"  />
         
          
             <input type="text" name="name" placeholder="Name" required/>
          
        
          <input type="email" name="email" placeholder="Email" required/>
          <textarea name="message" placeholder="Message"></textarea>
          <button type="submit" className="neon-btn submit">Send</button>
        </div>
          
           
          
        </>
      }
    </div>
  )}
</NetlifyForm>
</div>
</div>
    </section>
  )
}

export default Contact