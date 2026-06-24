import Scene3D from './components/Scene3D'
import Header from './components/Header'
import Home from './components/Home'
import { Stats, About, Skills, Projects, Contact, Footer } from './components/Sections'

export default function App() {
  return (
    <>
      <Scene3D />
      <Header />

      <main>
        <Home />
        <Stats />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
