import React, { useEffect, useState } from 'react';
import AppstoreLight from '../assets/images/appstore.svg';
import GoogleplayLight from '../assets/images/googleplay.svg';
import ImgBack from '../assets/images/iphone-card-desktop-2.svg';
import ImgFront from '../assets/images/iphone-card-desktop-1.svg';
import AppstoreDark from '../assets/images/appstore_dark.svg';
import GoogleplayDark from '../assets/images/googleplay_dark.svg';

function Hero() {
  const [appStoreImg, setAppStoreImg] = useState(AppstoreLight);
  const [googlePlayImg, setGooglePlayImg] = useState(GoogleplayLight);

  useEffect(() => {
    const updateImages = () => {
      if (document.body.classList.contains('dark')) {
        setAppStoreImg(AppstoreDark);
        setGooglePlayImg(GoogleplayDark);
      } else {
        setAppStoreImg(AppstoreLight);
        setGooglePlayImg(GoogleplayLight);
      }
    };

    updateImages();
    const observer = new MutationObserver(() => {
      updateImages();
    });

    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="hero">
      <div className="container">
        <div className="headline">
          <h1>Manage All Your Money in One App</h1>
        </div>
        <div className="content">
          <p>We offer you a new generation of the mobile banking. Save, spend & manage money in your pocket.</p>
          <div className="buttons">
            <a href="#" className="btn-app"><img src={appStoreImg} alt="appstore" /></a>
            <a href="#" className="btn-app"><img src={googlePlayImg} alt="googleplay" /></a>
          </div>
          <a href="#" className="discover-more">
            <span className="btn-circle">
              <i className="fa-solid fa-chevron-down"></i>
            </span>
            <span>Discover more</span>
          </a>
        </div>
        <div className="images">
          <img src={ImgBack} alt="iphone" className="img-back" />
          <img src={ImgFront} alt="iphone" className="img-front" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
