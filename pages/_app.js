import '../styles/globals.css'
import { CookiesProvider } from 'react-cookie'
import ProductsContext from '../context/ProductsContext'
import CartContext from '../context/CartContext'
import Layout  from '../components/layout/Layout'

function MyApp({ Component, pageProps }) {
  return(
    <ProductsContext>
      <CartContext>
        <CookiesProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </CookiesProvider>
      </CartContext>
    </ProductsContext>
  )
}

export default MyApp
