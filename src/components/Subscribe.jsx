import React, { useState } from 'react'
import Notifacation from '../assets/images/notification-icon.svg'
import Email from '../assets/images/email-icon.svg'

function Subscribe() {

  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSub = () => {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    alert('You are subscribed!');
    setError('');
  };

  const handleChange = (event) => {
    setEmail(event.target.value);
    setError(''); 
  };


  return (
    
    <section id="subscribe">

        <div className="container">

            <div className="title">
                <img className="icon" src={Notifacation} alt=""/>
                <h4>Subscribe to our newsletter to stay informed about latest updates</h4>
            </div>

            <div className="input-group">
              <img src={Email} alt="" />
              <input
                className="form-group"
                onChange={handleChange}
                type="text"
                placeholder="Your Email"
                required
                value={email}
              />
              {error && <p className="error">{error}</p>}
              <button onClick={handleSub}>Subscribe</button>
            </div>
            
        </div>

    </section>
  )
}

export default Subscribe