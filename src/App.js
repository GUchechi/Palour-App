import Blog from 'components/Blog';
import Contact from 'components/Contact';
import Footer from 'components/Footer';
import Home from 'components/Home';
import Milestones from 'components/Milestones';
import Portfolio from 'components/Portfolio';
import Pricing from 'components/Pricing';
import ScrollToTop from 'components/ScrollToTop';
import Services from 'components/Services';
import Skills from 'components/Skills';
import Testimonials from 'components/Testimonials';
import './App.css';

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Home /> 
      <Services />
      <Portfolio /> 
      <Milestones />
      <Blog />
      <Pricing />
      <Testimonials />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;