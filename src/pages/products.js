import React from 'react'

import Products from '../components/Products/Products'
import SEO from '../components/SEO'

export default function ProductsPage() {
  return (
    <>
      <SEO title="Products" />
      <p>Products Page</p>
      <Products />
    </>
  )
}
