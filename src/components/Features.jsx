import React from 'react'
import IphoneImage from '../assets/images/iphone-feature.svg'
import PaymentIcon from '../assets/images/payment-icon.svg'
import SecurityIcon from '../assets/images/security-icon.svg'
import StatisticsIcon from '../assets/images/statistic-icon.svg'
import SupportIcon from '../assets/images/support-icon.svg'
import CashbackIcon from '../assets/images/cashback-icon.svg'
import StandarsIcon from '../assets/images/standards-icon.svg'

function Features() {
  return (
    <section id="features">
        <div class="container">

            <div class="image">
                <img src={IphoneImage} alt="phone"/>
            </div>

            <div class="app-features">
                <h1>App Features</h1>
                <p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>

                <div class="features-list">

                    <div class="feature">
                        <img src={PaymentIcon} alt=""/>
                        <h3>Easy Payment</h3>
                        <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
                    </div>

                    <div class="feature">
                        <img src={SecurityIcon} alt=""/>
                        <h3>Data Security</h3>
                        <p>Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non. </p>
                    </div>

                    <div class="feature">
                        <img src={StatisticsIcon} alt=""/>
                        <h3>Cost Statistic</h3>
                        <p>Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.</p>
                    </div>

                    <div class="feature">
                        <img src={SupportIcon} alt=""/>
                        <h3>Support 24/7</h3>
                        <p>A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris.</p>
                    </div>

                    <div class="feature">
                        <img src={CashbackIcon} alt=""/>
                        <h3>Regular Cashback</h3>
                        <p>Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend.</p>
                    </div>

                    <div class="feature">
                        <img src={StandarsIcon} alt=""/>
                        <h3>Top Standards</h3>
                        <p>Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu.</p>
                    </div>
                    
                </div>

            </div>
            
        </div>

    </section>
  )
}

export default Features