import styled from 'styled-components'

export const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba( 0, 0, 0, .3);
    display: flex;
    align-items: flex-end;
    justify-content: center;
    z-index: 1000;
`

export const Modal = styled.div`
    width: 100%;
    max-width: 30rem;
    min-height: 13rem;
    background-color: #fff;
    border-radius: 8px;
    padding: 1.5rem 2rem;
    display: flex;
    flex-direction: column;
    position: relative;
    bottom: 3rem;
    
    @media all and (max-width: 500px) {
        bottom: 0;
        width: 100%;
        border-radius: 0;
    }
`

export const Text = styled.p`

`

export const Button = styled.button`
    align-self: center;
    width: var(--button-width);
    height: var(--button-height);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    box-shadow: var(--button-shadow);
    background-color: #ffffff;
    color: var(--background-blue);
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: opacity .2s ease-in-out;
    margin-top: 1.5rem;

    &:hover {
        opacity: .7;
    }
`