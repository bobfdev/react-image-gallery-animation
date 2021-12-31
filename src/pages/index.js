import { useState } from 'react';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';
import Hero from '../components/hero';
import sliderData from '../data/SliderData';
import Info from '../components/info';
import { infoData } from '../data/InfoData';


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
            <Info {...infoData} />
        </>
    )
}

export default Home