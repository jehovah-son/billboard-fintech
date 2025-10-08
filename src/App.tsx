import "./App.css";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Features from "./component/Features";
import Preview from "./component/AppPreview";
import FAQLists from "./component/QandA/Q&AList";
import Footer from "./component/Footer";
import CTA from "./component/Cta";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Preview />
      <FAQLists />
      <CTA />
      <Footer />
    </>
  );
}

export default App;
