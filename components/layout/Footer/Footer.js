import Link from 'next/link'
import Lg from '/public/rent-internet-logo.png'
import Ig from '/public/icons/instagram.svg'
import Fb from '/public/icons/facebook.svg'
import {
    Container,
    SocialIcons,
    IconContainer,
    Icon,
    Inner,
    LinkContainer,
    Links,
    LogoContainer,
    LogoImage,
    InnerSection,
    CopyRight,
} from './Elements'

const Footer = () => {

    const year = new Date().getFullYear()

    const links = [
        {
            title: 'Políticas de privacidad',
            to: '/privacy-policy',
        },
        {
            title: 'Términos y condiciones',
            to: '/terms-conditions',
        },
        {
            title: 'Contacto',
            to: '/contact'
        },
    ]

    const icons = [
        {
            src: Ig,
            url: 'https://www.instagram.com/rent.internet.lat/',
            alt: 'instagram social icon'
        },
        {
            src: Fb,
            url: 'https://www.facebook.com/profile.php?id=100082961630897',
            alt: 'instagram social icon'
        },
    ]


    return (
        <Container>
            <Inner>
                <InnerSection>
                    <SocialIcons>
                        {
                            icons.map(icon => {
                                return(
                                    <IconContainer key={icon.url} href={icon.url}>
                                        <Icon src={icon.src} alt={icon.alt} fill sizes="15vw" />
                                    </IconContainer>
                                )
                            })
                        }
                    </SocialIcons>
                </InnerSection>
                <InnerSection>
                    <LogoContainer>
                        <LogoImage src={Lg} alt='logo' fill sizes="15vw" />
                    </LogoContainer>
                </InnerSection>
                <InnerSection>
                    <Links>
                        {
                            links.map(link => {
                                return (
                                    <LinkContainer key={link.title}>
                                        <Link href={link.to}>{link.title}</Link>
                                    </LinkContainer>
                                )
                            })
                        }
                    </Links>
                </InnerSection>
            </Inner>
            <CopyRight>Rent Internet&#169;{year}</CopyRight>
        </Container>
    )
}

export default Footer