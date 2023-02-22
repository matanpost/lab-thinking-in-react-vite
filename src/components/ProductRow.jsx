import React from 'react'

function ProductRow({product}) {
  return (
    <tr>
       
        {product.inStock ? <td>{product.name}</td> : <td style={{'color': 'red'}}>{product.name}</td>}
       
        <td>{product.price}</td>
   </tr>  
  )
}

export default ProductRow