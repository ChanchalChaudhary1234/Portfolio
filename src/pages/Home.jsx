import Hero from "../components/sections/Hero";
import ProfileSelector from "../components/sections/ProfileSelector";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Experience from "../components/sections/Experience";
import Contact from "../components/sections/Contact";

function Home() {
  return (
    <>
      <Hero />
      <ProfileSelector />
      <About />
      <Skills />
      <Experience />
      <Contact />
    </>
  );
}

export default Home;