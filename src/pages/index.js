import Navbar from '../components/navbar';
import Hero from '../components/hero';
import sliderData from '../data/SliderData';

function Home() {
    return (
        <>
            <Navbar />
            <Hero slides={sliderData} />
        </>
    )
}

export default Home