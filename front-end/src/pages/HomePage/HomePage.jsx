import Hero from "../../components/Home/Hero/Hero";
import About from "../../components/Home/About/About";
import Stats from "../../components/Home/Stats/Stats";
import Testmonials from "../../components/Home/Testmonials/Testmonials";
import { Helmet } from "react-helmet-async";

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Dr Abdelsattar Nasr - Home</title>
      </Helmet>
      <Hero />
      <About />
      <Stats />
      <Testmonials />
    </>
  );
}

export default HomePage;
