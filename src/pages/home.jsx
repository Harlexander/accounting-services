import { useState, useEffect } from 'react'
import { Navigation } from '../components/navigation'
import { Header } from '../components/header'
// import { Features } from './components/features'
import { About } from '../components/about'
import { Services } from '../components/services'
import { Service } from '../components/service'
import { Gallery } from '../components/gallery'
import { Testimonials } from '../components/testimonials'
// import { Team } from './components/Team'
import { Contact } from '../components/contact'
import JsonData from '../data/data.json'
import SmoothScroll from 'smooth-scroll'

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
})

const Home = () => {
  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])

  return (
    <div>
      <Header data={landingPageData.Header} />
      {/* <Features data={landingPageData.Features} /> */}
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Gallery />
      <Service data={landingPageData.Services} />
      <Testimonials data={landingPageData.Testimonials} />
      {/* <Team data={landingPageData.Team} /> */}
    </div>
  )
}

export default Home
