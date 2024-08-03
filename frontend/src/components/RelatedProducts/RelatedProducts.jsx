import React from 'react'
import './RelatedProducts.css'
import data_product from '../../assets/Assets/data';
import Item from '../Items/Item';
const RelatedProducts = () => {
  return (
    <div className='relatedproducts'>
        <h1>RelatedProducts</h1>
        <hr />
        <div className="relatedproducts-item">
    {data_product.map((item,index)=>{
        return( <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        )
    })}
        </div>
        </div>
  )
}

export default RelatedProducts;