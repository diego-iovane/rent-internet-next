import {
    BackgroundImage,
    BackgroundOverlay,
    Container,
    Inner,
    Content,
    Title,
    Text,
} from './Elements'

const Details = ({ content }) => {

    return (
        <Container>
            {
                Object.entries(content).length !== 0 &&
                <>
                    <BackgroundImage src={content.backgroundimage} alt='' fill sizes="100vw"/>
                    <BackgroundOverlay />
                    <Inner>
                        <Content>
                            <Title>{content.title}</Title>
                            <Text>{content.text}</Text>
                        </Content>
                    </Inner>
                </>
            }
        </Container>
    )
}

export default Details