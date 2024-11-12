import React from 'react'
import FannieUser from '../assets/images/fannie-user.svg'
import AlbertUser from '../assets/images/albert-user.svg'

function Testimonials() {
  return (
    <section id="testimonials">
        
        <div className="testimonial-container">

            <div className="h2">
                <h2>Clients are Loving Our App</h2>
            </div>

            <div className="testimonial">
                <div className="stars">★★★★☆</div>
                <p> 
                    Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis. Laoreet posuere rhoncus, egestas lacus, egestas justo aliquam vel. Nisi vitae lectus hac hendrerit. Montes justo turpis sit amet.
                </p>
                <div className="user-info">
                    <img src={FannieUser} alt="User Image"/>
                    <div className="user-details">
                        <h4>Fannie Summers</h4>
                        <p>Designer</p>
                    </div>
                </div>
            </div>
            <div className="testimonial">
                <div className="stars">★★★★☆</div>
                <p> 
                    Nunc senectus leo vel venenatis accumsan vestibulum. Nulla tincidunt eu enim ornare dictum est sit amet. Dictum pretium dolor tincidunt egestas eget nunc.
                </p>
                <div className="user-info">
                    <img src={AlbertUser} alt="User Image"/>
                    <div className="user-details">
                        <h4>Albert Flores</h4>
                        <p>Developer</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonials