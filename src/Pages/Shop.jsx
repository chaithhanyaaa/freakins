import React from 'react'
import Hero from "../Components/Hero/Hero.jsx"
import Hero2 from "../Components/Hero2/Hero2.jsx"
import Under from "../Components/Under/Under.jsx"
import Fame from "../Components/Frame/Fame.jsx"

import Popular from "../Components/Popular/Popular.jsx"

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <p style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '10px' ,textAlign:'center'}}>
        INFLUENCER COLLAB
      </p>
      <Hero2 />
      <Under></Under>
      <Fame/>
    </div>
  )
}

export default Shop