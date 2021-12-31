import { useState } from 'react';
import Navbar from '../components/navbar';
import Hero from '../components/hero';
import sliderData from '../data/SliderData';
import Sidebar from '../components/sidebar';

function Home() {
        const [isOpen, setIsOpen] = useState(false);
        
        const toggle = () => {
          setIsOpen(!isOpen);
        }

    return (
        <>
            <Navbar toggle={toggle} />
            <Sidebar isOpen={isOpen}  toggle={toggle} />
            <Hero slides={sliderData} />
        </>
    )
}

export default Home