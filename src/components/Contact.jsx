import React from 'react'
import Icon1 from '../assets/images/Icon1.svg'
import Icon2 from '../assets/images/Icon2.svg'
import Map from "../assets/images/map.svg"
import placeIcon from "../assets/images/place-icon.svg"
import CallIcon from "../assets/images/caller-icon.svg"
import TimeIcon from "../assets/images/time-icon.svg"
import Facebook from "../assets/images/facebok.svg"
import Twitter from "../assets/images/twiter.svg"
import Instagram from "../assets/images/instagram.svg"
import Youtube from "../assets/images/youtube.svg"
 

function Contact() {
  return (
    <>
      <section id="contact">

        <div class="container">

            <div class="info">
                
                <p class="headline">Contact Us</p>

                <div class="content">
                    <img src={Icon1} alt=""/>
                    <p class="top">Email us</p>
                    <p>Please feel free to drop us a line. We will respond as soon as possible.</p>
                    <button>Leave a message</button>
                </div>

                <div class="content">
                    <img src={Icon2} alt=""/>
                    <p class="top">Careers</p>
                    <p>Sit ac ipsum leo lorem magna nunc mattis maecenas non vestibulum.</p>
                    <button>Send an application</button>
                </div>
                
            </div>

            <form class="form" noValidate>
                <p class="form-headline">Get Online Consultation</p>

                <div class="input-standard">
                    <label for="name">Full name</label>
                    <input type="name" id="name" name="name"/>
                </div>

                <div class="input-standard">
                    <label for="email">Email adress</label>
                    <input type="email" id="email" name="email"/>
                </div>

                <label for="specialist">Specialist</label>
                
                <div class="input-standard">
                    <select name="specialist" id="specialist">
                        <option value="None">None</option>
                        <option value="Software Developer">Software Developer</option>
                        <option value="Economist">Economist</option>
                        <option value="Doctor">Doctor</option>
                    </select>
                </div>

                <button>Make an appointment</button>
            </form>

            <div className="map">
                <img src={Map} alt="map" />
            </div>

            <div className="information">
                <div className="place">
                    <p className='title'> Medical Center 1</p>
                    <p>
                        <img src={placeIcon} alt="" />
                        4517 Washington Ave. Manchester, Kentucky 39495
                    </p>
                    <p>
                        <img src={CallIcon} alt="" />
                        (406) 555-0120
                    </p>
                    <p>
                        <img src={TimeIcon} alt="" />
                        <b>Mon – Fri:</b> 9:00 am – 22:00 am
                    </p>
                    <p className='weekend'>
                        <b>Sat – Sun:</b> 9:00 am – 20:00 am
                    </p>
                </div>

                <div className="place">
                    <p className='title'> Medical Center 2 </p>

                    <p>
                        <img src={placeIcon} alt="" />
                        2464 Royal Ln. Mesa,New Jersey 45463
                    </p>
                    <p>
                        <img src={CallIcon} alt="" />
                        (406) 544-0123
                    </p>
                    <p>
                        <img src={TimeIcon} />
                        <b>Mon – Fri:</b> 9:00 am – 22:00 am
                    </p>
                    <p className='weekend'>
                        <b>Sat – Sun:</b> 9:00 am – 20:00 am
                    </p>

                    <div className="socials">
                        <img src={Facebook} alt="" />
                        <img src={Twitter} alt="" />
                        <img src={Instagram} alt="" />
                        <img src={Youtube} alt="" />    
                    </div>

                </div>
            </div>

            
            
        </div>

      </section>

    </>
  )
}

export default Contact