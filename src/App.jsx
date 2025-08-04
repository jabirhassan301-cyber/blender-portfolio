import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Models from './components/Models'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Lightbox from './components/Lightbox'
export default function App() {
  return (
    <div className="bg-gray-950 text-white font-sans">
      <Hero />
      <About />
      <Projects />
      <Models />
      <Contact />
      <Lightbox />
      <Footer />
    </div>
  )
}
