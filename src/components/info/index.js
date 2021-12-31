import {
    InfoSection,
    InfoContainer,
    ColumnLeft,
    ColumnRight,
} from './InfoElements';
import { Button } from '../ButtonElements';

function Info({ heading, paragraphOne, paragraphTwo, buttonLabel, reverse, image }) {
    return (
        <InfoSection>
            <InfoContainer>
                <ColumnLeft>
                    <h1>{heading}</h1>
                    <p>{paragraphOne}</p>
                    <p>{paragraphTwo}</p>
                    <Button to='/homes' primary='true'>{buttonLabel}</Button>
                </ColumnLeft>
                <ColumnRight reverse={reverse}>
                    <img src={image} alt='home' /> 
                </ColumnRight>
            </InfoContainer>
        </InfoSection>
    )
}

export default Info
