import React from 'react';

import './checkout.styles.scss';

import { connect }  from 'react-redux';
import { createStructuredSelector} from 'reselect';
import { selectCartItems, selectCartTotalPrice } from '../../redux/cart/cart.selectors';
import CheckoutItem  from '../../components/checkout-item/checkout-item.component'

const CheckoutPage = ({ cartItems, cartItemsTotalPrice }) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span className="">product</span>
            </div>
            <div className="header-block">
                <span className="">description</span>
            </div>
            <div className="header-block">
                <span className="">quantity</span>
            </div>
            <div className="header-block">
                <span className="">price</span>
            </div>
            <div className="header-block">
                <span className="">remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem => 
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            )
        }

        <div className="total">
            <span>total: ${cartItemsTotalPrice} </span>
        </div>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartItemsTotalPrice: selectCartTotalPrice
})

export default connect(mapStateToProps)(CheckoutPage);