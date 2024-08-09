import React from 'react'
import Hero from '../hero-card/HeroCard'

const Slogan = () => {
  return (
    <div className=''>
      <Hero
        header="LOREM LOREM IPSUM DOLORS"
        description="We are a dedicated team of payment processing experts committed to providing the best solutions for your business. Our mission is to simplify payments and ensure your transactions are secure and efficient."
        primaryButtonText="Click Here"
        secondaryButtonText="Click Here"
        primaryButtonLink="/"
        secondaryButtonLink="/"
        imageUrl="https://picsum.photos/500/500?random=$100"
      />
    </div>
  )
}

export default Slogan