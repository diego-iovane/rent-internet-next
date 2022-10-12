import { useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { GetCartContext } from '../../context/CartContext'
import CheckoutForm from '../forms/CheckoutForm/CheckoutForm'
import { BuyButton } from '../shared/BuyButton/BuyButton'
import {
    CheckoutContainer,
    CheckoutInner,
    ConfirmButton,
    EmptyCart,
} from './Elements'
import CartDetails from './CartDetails/CartDetails'


const Checkout = () => {

    const { cart, setCart } = GetCartContext()
    const [ loading, setLoading ] = useState(false)
    
    return (
        <CheckoutContainer>
            {
                Object.values(cart).length === 0 ?
                <EmptyCart>
                    <p>Cart is empty, nothing to checkout</p>
                </EmptyCart> :
                <CheckoutInner>
                    <CartDetails cart={cart} />
                    <CheckoutForm cart={cart} setCart={setCart} /> 
                    {/* <BuyButton event={handleEvent}>Pay with card</BuyButton> */}
                    {/* <button onClick={handleBankTransfer}>Bank Transfer</button> */}
                </CheckoutInner>
            }
        </CheckoutContainer>
    )
}

export default Checkout