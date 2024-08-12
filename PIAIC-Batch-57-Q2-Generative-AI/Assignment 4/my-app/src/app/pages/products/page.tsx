import React from 'react'
import Link from 'next/link'

function Products() {
  return (
    <>
      We have Multiple Products Here
      <div className='flex gap-10 bg-slate-200 p-7 mt-10'>
        <Link href={'/pages/products/product1'}>Product 1</Link>
        <Link href={'/pages/products/product2'}>Product 2</Link>
        <Link href={'/pages//products/product3'}>Product 3</Link>
        <Link href={'/pages//products/product4'}>Product 4</Link>
        <Link href={'/pages//products/product5'}>Product 5</Link>
      </div>
    </>
  )
}

export default Products
