import React from 'react';
import './Oders.css'
import { Link, useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    const navigate = useNavigate();

    const removeProduct = product => {
        const rest = cart.filter(item => item.id !== product.id);
        setCart(rest);
        removeFromDb(product.id)
    }


    return (
        <div className='shop-container'>
            <div className='products-item-container'>
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        removeProduct={removeProduct}
                    ></ReviewItem>)
                }

            </div>
            <div className='cart-container'>
                <Cart cart={cart}>
                    <button onClick={() => navigate('/shipment')}>Proceed Shipping </button>

                </Cart>

            </div>

        </div>
    );
};

export default Orders;