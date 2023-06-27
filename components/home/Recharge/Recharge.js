import { PrimaryButton } from '../../shared/PrimaryButton/PrimaryButton'
import {
    Container,
    Inner,
    Content,
    Title,
    Text,
    ImageSide,
    ImageContainer,
    SideImage,
} from './Elements'

const Recharge = ({ content }) => {

    return (
        <Container>
            {
                Object.entries(content).length !== 0 &&
                <>
                    <Inner>
                        <ImageSide>
                            <ImageContainer>
                                <SideImage src={content.img.src} alt={content.img.alt} fill sizes="50vw" />
                            </ImageContainer>
                        </ImageSide>
                        <Content>
                            <Title>{content.title}</Title>
                            <Text>{content.text}</Text>
                            <PrimaryButton to="/recharge-checkout">
                                Recargar
                            </PrimaryButton>
                        </Content>
                    </Inner>
                </>
            }
        </Container>
    )
}

export default Recharge