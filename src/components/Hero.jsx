import React from 'react'
import Appstore from '../assets/images/appstore.svg'
import Googleplay from '../assets/images/googleplay.svg'
import ImgBack from '../assets/images/iphone-card-desktop-2.svg'
import ImgFront from '../assets/images/iphone-card-desktop-1.svg'


function Hero() {
  return (
    <section id="hero">
        <div className="container">
            <div className="headline">
                <h1>Manage All Your Money in One App</h1>
            </div>  
            <div className="content">
                <p>We offer you a new generation of the mobile
                    banking. Save, spend & manage money in your pocket.</p>
                <div className="buttons">
                    <a href="#" className="btn-app"><img src={Appstore} alt="appstore"/></a>
                    <a href="#" className="btn-app"><img src={Googleplay} alt="googleplay"/></a>
                </div>

                <a href="#" className="discover-more">
                    <span className="btn-circle">
                        <i className="fa-solid fa-chevron-down"></i>
                    </span>
                    <span>Discover more</span>
                </a>
            </div>

            <div className="images">
                <img src={ImgBack} alt="iphone" className="img-back"/>
                <img src={ImgFront} alt="iphone" className="img-front"/>
            </div>

        </div>
    </section>
  )
}

export default Hero