import About from "./About";
import Contact from "./Contact";
import Experience from "./Experience";
import HomePage from "./HomePage";

export default function Home() {
  return (
    <>
      <section id="home">
        <HomePage />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}
