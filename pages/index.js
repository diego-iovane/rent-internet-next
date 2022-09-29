import { useState, useEffect } from 'react'
import Head from 'next/head'
import ProductDetail from './product-detail'
import { api } from '../services/wocommerce'

export default function Home(props) {
  
 const [ products, setProducts ] = useState([])
 const [ loading, setLoading ] = useState(true)

  useEffect(() => {
    api.get("products")
    .then((res) => {
      if (res.status === 200) {
        setProducts(res.data)
        console.log(res.data)
      }
    })
    .catch(err => console.log(err))
    .finally(() => setLoading(false))
  }, [])

  return (
    <>
      <Head>
        <title>Rent Internet</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {
        loading ?
        '...loading' :
        <ProductDetail data={products[0]}/>
      }
    </>
  )
}