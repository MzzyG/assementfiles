import {
  Navbar,
  Hero,
  WhatWeDo,
  CaseStudies,
  Brands,
  Footer,
} from "./components/index";
import "./App.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <WhatWeDo />
      <CaseStudies />
      <Brands />
      <Footer />
    </>
  );
};

export default App;
