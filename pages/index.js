import { useState, useEffect } from 'react'
import Head from 'next/head'
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api"
import axios from 'axios'

//Woo Api keys
// public> ck_80a2664a198dce072225a7850dcf185e53bbd77a
// secret> cs_9abd63dc1ede4fda0e2ef4182a46e6a2023a91df

export default function Home(props) {

  // const [ expos, setExpos ] = useState([])
  // const url = 'https://hub.dummyapis.com/ImagesList?text=Test&noofimages=10&height=120&width=120'


  // useEffect(() => {
  //   fetch(url, {appId: '0JyYiOQXQQr5H9OEn21312'})
  //   .then(res => console.log(res.json()))
  // }, [])


  
  const [ products, setProducts ] = useState([])

  useEffect(() => {

    const api = new WooCommerceRestApi({
      url: "https://rent-internet.com",
      consumerKey: "ck_80a2664a198dce072225a7850dcf185e53bbd77a",
      consumerSecret: "cs_9abd63dc1ede4fda0e2ef4182a46e6a2023a91df",
      version: "wc/v3"
    });

    api
    .get("orders")
    .then((response) => {
      if (response.status === 200) {
        console.log(response.data);
      }
    })
    .catch((error) => {});

  }, [])
  
  return (
    <>
      <Head>
        <title>Rent Internet</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  )
}