import {HomeHero} from './componments/HomeHero/HomeHero' 
import Socialicons from './componments/Socialicons/Socialicons'
import About from './componments/About/About'
import Portfolio from './componments/Portfolio/Portfolio'
import Skills from './componments/Skills/Skills'
import Contact from './componments/Contact/Contact'

export default function Home() {
  return (
    <>
      <Socialicons/>
      <HomeHero/>
      <About/>
      <Portfolio/>
      <Skills/>
      <Contact/>
    </>
  )
}
