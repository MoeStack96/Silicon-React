import React from 'react'
import Notifacation from '../assets/images/notification-icon.svg'
import Email from '../assets/images/email-icon.svg'

function Subscribe() {
  return (
    
    <section id="subscribe">

        <div className="container">

            <div className="title">
                <img className="icon" src={Notifacation} alt=""/>
                <h4>Subscribe to our newsletter to stay informed about latest updates</h4>
            </div>

            <div className="input-group">
                <img src={Email} alt=""/>
                <input className="form-group" type="text" placeholder="Your Email"/>
                <button>Subscribe</button>
            </div>
            
        </div>

    </section>
  )
}

export default Subscribe