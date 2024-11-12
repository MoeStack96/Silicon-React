import React from 'react'
import BackgroundImg from '../assets/images/background-img.svg'
import ForegroundImg from '../assets/images/foreground-img.svg'
import SecondBackgroundImg from '../assets/images/second-background.svg'
import SecondForegroundImg from '../assets/images/second-foreground.svg'
import FirstIcon from '../assets/images/first-icon.svg'
import SecondIcon from '../assets/images/second-icon.svg'

function FeatureGrid() {
  return (
    <section id="feature-grid">

        <div className="container">

            <div className="grid-one">

                <div className="first-text">
                    <h2>Make your money transfer simple and clear</h2>
                
                    <p> 
                        <i className="fa-light fa-circle-check"></i>
                        Banking transactions are free for you
                    </p>

                    
                    <p>
                        <i className="fa-light fa-circle-check"></i>
                        No monthly cash commission
                    </p>

                    
                    <p>
                        <i className="fa-light fa-circle-check"></i>
                        Manage payments and transactions online
                    </p>

                    <button>Learn more</button>
                    
                </div>

                <div className="first-images">
                    <img src={BackgroundImg} id="background" alt=""/>
                    <img src={ForegroundImg} id="foreground" alt=""/>
                </div> 

            </div>

            <div className="grid-two">

                <div className="container">

                    <div className="second-images">
                        <img src={SecondBackgroundImg} id="second-background" alt="#"/>
                        <img src={SecondForegroundImg} id="second-foreground" alt="#"/>
                    </div>

                    <div className="second-text">
                        <h2>Receive payment from international bank details</h2>

                        <div className="texts">
                            <div className="text">
                                <img src={FirstIcon} id="first-icon" alt="#"/>
                                <p>Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
                            </div>

                            <div className="text">
                                <img src={SecondIcon} id="second-icon" alt="#"/>
                                <p>A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.</p>
                            </div>
                        </div>
                        

                        <button>Learn more</button>
                    </div>
                </div>

            </div>


        </div>
    </section>
  )
}

export default FeatureGrid