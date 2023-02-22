import React from 'react'
import ProductRow from './ProductRow'

function ProductTable({products, search}) {
  return (
    <div>
        <table>
            <thead>
                <td>
                    <th>Name</th> 
                </td>
                <td>
                    <th>Price</th>
                </td>               
            </thead>
            <tbody>
               {products
                .filter(product => {
                if (search === "") return products
                return product.name.toLowerCase().includes(search.toLowerCase())
                })
               .map(product => {
                return (
                 <ProductRow product={product}/> 
                )
               })}  
                 
            </tbody>
        </table>
    </div>
  )
}

export default ProductTable