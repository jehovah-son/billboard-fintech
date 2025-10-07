import "./App.css";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Features from "./component/Features";
import Preview from "./component/AppPreview";
import FAQLists from "./Q&AList";
import Footer from "./component/Footer";

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <Features />
            <Preview />
            <FAQLists />
            <Footer />
        </>
    );
}

export default App;
