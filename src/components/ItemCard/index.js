import React from 'react'
import { ItemCardStyled } from './ItemCardStyled';

const ItemCard = ({image, name, old_price, new_price}) => {
  return (
    <ItemCardStyled>
        <div className='itemCard'>
            <img src={image} alt='' className='img-class'/>
            <div className='Item-name my-2'>{name}</div>
            <div className='Item-price'>
                <div className='new-price-class mx-1'>
                    ${new_price}
                </div>
                <div className='old-price-class mx-2'>
                    ${old_price}
                </div>
            </div>
        </div>
    </ItemCardStyled>
  )
}

export default ItemCard;