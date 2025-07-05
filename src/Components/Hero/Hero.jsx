import React from 'react'
import "./Hero.css"
import banner1 from "../../assets/herobanner1.webp"
import banner2 from "../../assets/herobanner2.webp"
import banner3 from "../../assets/herobanner3.webp"
import banner4 from "../../assets/herobanner4.webp"
import {useState,useEffect} from "react"




const Hero = () => {
  const banners = [banner1, banner2, banner3, banner4];
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 3000); // change banner every 3 sec

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero">
      <img src={banners[currentBanner]} alt={`hero-banner-${currentBanner}`} className="hero-img" />
    </div>
  );
};

export default Hero