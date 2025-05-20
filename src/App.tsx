import Hero from "@sections/Hero";
import Work from "@sections/Work";
import About from "@sections/About";
import PreviousWork from "./sections/PreviousWork";
import Contact from "@sections/Contact";
import Navbar from "@components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Work />
      <About />
      <PreviousWork />
      <Contact />
    </>
  );
};

export default App;
