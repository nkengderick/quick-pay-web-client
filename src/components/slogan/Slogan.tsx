import React from 'react'
import Hero from '../hero-card/HeroCard'
import AboutCard from './AboutCard'
import StatsCard from './StatsCard'

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
      <div style={{ display: 'flex', width: '100%', gap: '2em', flexWrap: 'wrap', padding: '2em', justifyContent: 'center', alignItems: 'center' }}>
        <AboutCard classes='border-blue-300 h-72 transition-all duration-500' />
        <StatsCard classes='h-72' />
      </div>
    </div>
  )
}

export default Slogan