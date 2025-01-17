import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import { Bredcrum } from '../Components/Breadcum/Bredcrum';
import {ProductDisplay} from '../Components/ProductDisplay/ProductDisplay'
import { Description } from '../Components/DescriptionBox/Description';
import { RelatedProducts } from '../Components/RelatedProducts/RelatedProducts';

export const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e) => e.id === Number(productId))
  return (
    <div>
      <Bredcrum product ={product}/>
      <ProductDisplay product = {product}/>
      <Description/>
      <RelatedProducts/>
    </div>
  )
}
