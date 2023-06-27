import { useState, useEffect } from 'react'
import { useCookies } from 'react-cookie'
import NavBar from "./NavBar/NavBar"
import styled from 'styled-components'
import Footer from "./Footer/Footer"
import WhatsButton from "../whats/WhatsButton"
import CookiesModal from './CookiesModal/CookiesModal'

//Styles
const LayoutContainer = styled.div`
  width: 100%;
`

//Component
const Layout = ({ children }) => {

  const [ cookies, setCookie ] = useCookies(['newVisitor'])
  const [ modal, setModal ] = useState(false)

  useEffect(() => {
    if(cookies.newVisitor === undefined) {
      console.log('here')
        setCookie('newVisitor', 'true', { path: '/'})
        setModal(true)
    } 
  }, [])

  console.log(cookies)

  return (
    <LayoutContainer>
        {
          modal && <CookiesModal setModal={setModal} />
        }
        <NavBar />
        <main>{children}</main>
        <WhatsButton />
        <Footer />
    </LayoutContainer>
  )
}

export default Layout