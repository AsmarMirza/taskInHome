import React from 'react'
import { Helmet } from 'react-helmet-async'

function Detail() {
  return (
    <>
          <Helmet>
              <title>detail</title>
              <link rel="notImportant" href="https://www.chipotle.com" />
              <meta name="whatever" value="notImportant" />
              <link rel="canonical" href="https://www.tacobell.com" />
              <meta property="og:title" content="A very important title" />
            </Helmet>
      <h1>detail</h1>
    </>
  )
}

export default Detail