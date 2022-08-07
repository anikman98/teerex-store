import React from 'react'

function Card({item, key}) {

    const handleAddToCart = (id) => {
        console.log(id+"add to cart");
    }

  return (
    <div className='card-item'>
        <div className="card-item">
            <div className="card-image">
                <img src={item.imageURL} alt={item.name} height="100"/>
                <h3>{item.name}</h3>
            </div>
            <div className="card-content">
                <div className="card-price">
                    <h4>{item.currency}&nbsp;{item.price}</h4>
                </div>
                <div className="card-button">
                    <button className='add-item-button' onClick={handleAddToCart(item.id)}>Add to Cart</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card