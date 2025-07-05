import React from 'react'
import "./Hero2.css"
import banner1 from "../../assets/herobanner5.webp"
import banner2 from "../../assets/herobanner6.webp"
import banner3 from "../../assets/herobanner7.webp"
import {useState,useEffect} from "react"




const Hero2 = () => {
  const banners = [banner1, banner2, banner3];
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

export default Hero2