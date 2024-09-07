import React from 'react'
import MobileHero from './mobile'
import DesktopHero from './desktop'

const Hero = () => {
  return (
    <div>
    <div className="block md:hidden">
      <MobileHero />
    </div>
    <div className="hidden md:block">
      <DesktopHero />
    </div>
  </div>
  )
}

export default Hero