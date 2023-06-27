import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    background: linear-gradient(208.39deg, #1966D1 57.39%, #3483FA 57.39%);
    padding-bottom: 3rem;
    min-height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const InnerContainer = styled.article`
    width: 30rem;
    min-height: 23.25rem;
    position: relative;
    top: 1rem;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    background-color: #ffffff;
    border-radius: 5px;
    box-shadow: var(--container-shadow);
`

export const Title = styled.h1`
    font-size: 1.4rem;
    padding-bottom: .8rem;
    border-bottom: 1px solid var(--soft-lines-color);
    margin-bottom: 1.5rem;
`

export const Text = styled.p`
    font-size: .9rem;
    margin-bottom: .7rem;
`