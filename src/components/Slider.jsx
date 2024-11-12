import React from 'react'
import ImageLeft from '../assets/images/tablet-phon-left.svg'
import ImageCenter from '../assets/images/tablet-phone-center.svg'
import ImageRight from '../assets/images/tablet-phone-left.svg'

function Slider() {
  return (
    <section id="slider">
        <div className="container">

            <h1>How Does It Work?</h1>

            <div className="carousel">
                <img src={ImageLeft} srscset="images/phone-left.svg 1400w" alt="#" id="left-img"/>
                <img src={ImageCenter} srscset="images/phone-center.svg 1400w" alt="#" id="center-img"/>
                <img src={ImageRight} srscset="images/phone-right.svg 1400w" alt="#" id="right-img"/>
            </div>

            <h4 className="tablet-h4">Transfers to people from your contact list</h4>
            <p className="tablet-p">Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>

            <h4 className="desktop-h4">Latest transaction history</h4>
            <p className="desktop-p">Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique quisque hac in consectetur condimentum. </p>

        </div>
    </section>

  )
}

export default Slider