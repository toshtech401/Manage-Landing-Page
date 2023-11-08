import { useState } from 'react';
import './App.css';
import CTA from './Components/CTA/CTA';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import Manage from './Components/Manage/Manage';
import Navbar from './Components/Navbar/Navbar';
import Testimonials from './Components/Testimonials/Testimonials';

function App() {
  const [open, setOpen] = useState(false)
  return (
    <div className={open?"App open":"App"}>
      <Navbar open={open} setOpen={setOpen}/>
      <Hero />
      <Manage />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
