import React, { useState } from 'react'
import getStripe from '../../utils/getStripe'
import styled from 'styled-components'
import formatPrice from '../../utils/formatMoney'

const CardStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  padding: 1rem;
  margin-bottom: 1rem;
  box-shadow: 5px 5px 25px 0 rgba(46, 61, 73, 0.2);
  background-color: #fff;
  border-radius: 6px;
  max-width: 300px;
`

const ImageStyles = styled.img`
  width: 100%;
`

const ButtonStyles = styled.button`
  display: block;
  font-size: 13px;
  text-align: center;
  color: #000;
  padding: 12px;
  box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.1);
  background-color: rgb(255, 178, 56);
  border-radius: 6px;
  letter-spacing: 1.5px;
`

const buttonDisabledStyles = {
  opacity: '0.5',
  cursor: 'not-allowed',
}

const ProductCard = ({ product }) => {
  const [loading, setLoading] = useState(false)

  console.log(product)
  const handleSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)

    const price = new FormData(event.target).get('priceSelect')
    const stripe = await getStripe()
    const { error } = await stripe.redirectToCheckout({
      mode: 'payment',
      lineItems: [{ price, quantity: 1 }],
      successUrl: `${window.location.origin}/thankyou`,
      cancelUrl: `${window.location.origin}/products`,
    })

    if (error) {
      console.warn('Error:', error)
      setLoading(false)
    }
  }

  return (
    <CardStyles>
      <form onSubmit={handleSubmit}>
        <fieldset style={{ border: 'none' }}>
          <legend>
            <h4>{product.name}</h4>
          </legend>
          <ImageStyles src={product.images} alt={product.name} />
          <label>
            Price{' '}
            <span name="priceSelect">
              {product.prices.map((price) => (
                <span key={price.id} value={price.id}>
                  {formatPrice(price.unit_amount, price.currency)}
                </span>
              ))}
            </span>
          </label>
        </fieldset>
        <ButtonStyles>Add to Cart</ButtonStyles>
      </form>
    </CardStyles>
  )
}

export default ProductCard
