import {
    Container,
    BackgroundImage,
    BackgroundOverlay,
    Inner,
    SectionTitle,
    Card,
    Title,
    Text,
    CardsContainer,
} from './Elements'

const Process = ({ content }) => {

    return (
        <Container>
            {
                Object.entries(content).length !== 0 &&
                <>
                    <BackgroundImage src={content.backgroundImg} alt='' fill sizes='100vw'/>
                    <BackgroundOverlay />
                    <Inner>
                        <SectionTitle>{content.sectionTitle}</SectionTitle>
                        <CardsContainer>
                            {
                                content.items.map(item =>{
                                    return(
                                        <Card key={item.title}>
                                            <Title>{item.title}</Title>
                                            <Text>{item.text}</Text>
                                        </Card>
                                    )
                                })
                            }
                        </CardsContainer>
                    </Inner>
                </>
            }
        </Container>
    )
}

export default Process