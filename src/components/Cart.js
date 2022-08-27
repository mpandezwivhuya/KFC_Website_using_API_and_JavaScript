import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { clearCart,addToCart, decreaseCart,removeFromCart, getTotals } from '../features/cartSlice';



const Cart = () => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getTotals());

    }, [cart, dispatch]);
    const handleRemoveFromCart = (cartItem) =>{
        dispatch(removeFromCart(cartItem))

    };
    const handleDecreaseCart = (cartItem) =>{
        dispatch(decreaseCart(cartItem));

    };
    const handleClearCart = () =>{
        dispatch(clearCart());

    };
    const handleIncreaseCart = (cartItem) =>{
        dispatch(addToCart(cartItem));

    };

  return (
    <div className='cart-container'>
        <h2>Shopping Cart</h2>
        {cart.cartItems.length === 0 ?(
            <div className='cart-empty'>
                <p>Your Cart is currently Empty</p>
                <div className='start-shopping'>
                    <Link to='/Menu'>
                    <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
                        <span>Start Shopping</span>
                    </Link>

                </div>
            </div>

        ) : (
            <div>
                <div className='titles'>
                    <h3 className='menu-title'>Menu</h3>
                    <h3 className='price'>Price</h3>
                    <h3 className='quantity'>Quantity</h3>
                    <h3 className='total'>Total</h3>
                </div>
                <div className='cart-items'>
                    {cart.cartItems.map(cartItem => (
                        <div className='cart-item' key = {cartItem.id}>
                            <div className='cart-menu'>
                             
                            <div>
                            <h3>{cartItem.meat}</h3>
                            <h3>{cartItem.name}</h3>
                            <button onClick={() => handleRemoveFromCart(cartItem)}>Remove</button>
                        </div>
                        </div>
                        <div className='cart-menu-price'>R{cartItem.price}</div>
                        <div className='cart-menu-quantity'>
                            <button onClick= { () => handleDecreaseCart(cartItem)}>-</button>
                            <div className='count'>{cartItem.cartQuantity}</div>
                            <button onClick={() => handleIncreaseCart(cartItem)}>+</button>
                        </div>
                        <div className='cart-menu-total-price'>
                            R{cartItem.price * cartItem.cartQuantity}
                        </div>
                        </div>

                    
                    ))}
                </div>
                <div className='cart-summary'>
                    <button className='clear-cart' onClick= { () => handleClearCart()}>Clear Cart</button>
                    <div className='cart-checkout'>
                        <div className='subtotal'>
                            <span>Subtotal</span>
                            <span className='amount'>R{cart.cartTotalAmount}</span>
                        </div>
                        <p>Taxes and shopping amount is calculated to checkout</p>
                        <button><Link to='/'>Checkout</Link></button>
                        <div className='continue-shopping'>
                    <Link to='/Menu'>
                    <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
                        <span>Continue Shopping</span>
                    </Link>
                    </div>
                    </div>
                </div>
            </div>
        )}

    </div>
  );
};

export default Cart