import Link from 'next/link'
import React from 'react'
import { Segment, Button } from 'semantic-ui-react'

type CartSummaryProps = {
  totalAmount: number
}

const CartSummary = ({ totalAmount }: CartSummaryProps) => {
  return (
    <Segment clearing size="large" as="section">
      <span>
        <strong>Sub total:</strong>
        {` ${totalAmount}`}
      </span>
      <Link href="https://sandbox.checkout.payulatam.com/ppp-web-gateway-payu/">
        <Button color="black" floated="right">
          Check out
        </Button>
      </Link>
    </Segment>
  )
}

export default CartSummary
