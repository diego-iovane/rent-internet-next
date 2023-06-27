import styled from 'styled-components'
import Image from 'next/future/image'

export const Container = styled.section`
    width: 100%;
    position: relative;
    min-height: var(--section-min-height);
    padding: 8rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media all and (max-width: 450px) {
        padding: 2rem 0;
    }
`

export const Inner = styled.div`
    position: relative;
    width: 85%;
    max-width: var(--section-max-width);
    display: flex;
    justify-content: space-around;

    @media all and (max-width: 450px) {
        flex-direction: column-reverse;
        align-items: center;
        margin-bottom: 1rem;
    }
`

export const InnerSection = styled.div`
    width: 15%;
    display: flex;
    justify-content: center;
    padding: 2.5rem 0;

    &:nth-child(2) {
        border-left: 1px solid var(--soft-lines-color);
        border-right: 1px solid var(--soft-lines-color);
        width: 35%;
    }

    @media all and (max-width: 450px) {
        width: 100%;

        &:nth-child(2) {
        border: none;
        border-top: 1px solid var(--soft-lines-color);
        border-bottom: 1px solid var(--soft-lines-color);
        width: 65%;
    }
    }
`

export const Links = styled.ul``

export const LinkContainer = styled.li`
    font-size: .8rem;
    margin-bottom: 1rem;
    transition: opacity .2s ease-in-out;

    &:hover {
        opacity: .7;
    }

    @media all and (max-width: 450px) {
        text-align: center;
    }
`

export const SocialIcons = styled.ul`
    display: flex;
`

export const IconContainer = styled.a`
    position: relative;
    width: 2rem;
    height: 2rem;
    margin: 0 .5rem;
    cursor: pointer;
    
    &:hover {
        opacity: .7;
    }
    `

export const Icon = styled(Image)`
    object-fit: cover;
`

export const LogoContainer = styled.div`
    position: relative;
    width: 7rem;
    height: 3rem;
`

export const LogoImage = styled(Image)`
    width: 100%;
    height: 100%;
    margin: 0 auto;
    object-fit: cover;
`

export const CopyRight = styled.p`
    text-align: center;
    font-size: .8rem;
    position: absolute;
    bottom: 0;
    left: 0;
    padding: .5rem 0;
    width: 100%;
    background-color: var(--soft-lines-color);
`