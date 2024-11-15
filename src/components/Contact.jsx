import React from 'react'
import Icon1 from '../assets/images/Icon1.svg'
import Icon2 from '../assets/images/Icon2.svg'

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

            <form noValidate>
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
            
        </div>

      </section>

    </>
  )
}

export default Contact