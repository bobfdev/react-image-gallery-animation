import { useState, useRef } from 'react';
import { 
    HeroSection,
    HeroWrapper,
    HeroSlide,
    HeroSlider,
    HeroImage,
    HeroContent,
    Arrow,
    SliderButtons,
    PrevArrow,
    NextArrow,
} from './HeroElements';
import { Button } from '../ButtonElements';


function Hero({ slides }) {
    const [current, setCurrent] = useState(0)
    const length = slides.length
    const timeout = useRef(null)

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)

        // console.log(current)
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1 )

        // console.log(current)
    }

    return (
        <HeroSection>
            <HeroWrapper>
                {slides.map((slide, index) => {
                    return (
                        <HeroSlide key={index}>
                            {index === current && (
                            <HeroSlider>
                                <HeroImage src={slide.image} alt={slide.alt} />
                                    <HeroContent>
                                        <h1>{slide.title}</h1>
                                        <p>{slide.price}</p>
                                        <Button 
                                            to={slide.path} 
                                            primary='true'
                                            style={{ maxWidth: '150px' }}
                                            >
                                            {slide.label}
                                            <Arrow />
                                        </Button>
                                    </HeroContent>
                            </HeroSlider>
                            )}
                        </HeroSlide>
                    )
                })}
                <SliderButtons>
                    <PrevArrow onClick={prevSlide} />
                    <NextArrow onClick={nextSlide} />
                </SliderButtons>
            </HeroWrapper>
        </HeroSection>
    )
}

export default Hero