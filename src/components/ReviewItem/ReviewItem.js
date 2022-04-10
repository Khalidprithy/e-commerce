import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css';

const ReviewItem = (props) => {
    const { product, removeProduct } = props
    const { name, img, price, shipping, quantity } = product;
    return (
        <div className='review-item'>
            <img className='review-img' src={img} alt="" />
            <div className='review-details'>
                <div>
                    <h4 title={name}>  {name.length > 20 ? name.slice(0, 20) + '...' : name}</h4>
                    <p>Price: ${price}</p>
                    <p>Shipping Charge: ${shipping}</p>
                    <p>Quantity: {quantity}</p>
                </div>
            </div>
            <div className='review-delete-btn'>
                <button onClick={() => removeProduct(product)} className='delete-btn'>
                    <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};

export default ReviewItem;