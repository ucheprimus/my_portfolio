import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Footer from './components/Footer';
import Contact from './components/Contact'; // ← add this


function App() {
  return (
    <div className="silver-shimmer-bg min-vh-100">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Services />
            <Contact /> {/* ← add this */}

      <Footer />
    </div>
  );
}

export default App;