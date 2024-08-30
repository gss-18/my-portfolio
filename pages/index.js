import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Timeline from '../components/Timeline';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div className=" min-h-screen">
      <Hero />
      <About />
      <Projects />
      <Timeline />  
      <Contact />
    </div>
  );
}
