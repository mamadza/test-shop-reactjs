import React from 'react';
import './cart-item.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/image/shopping-bag.svg';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';

const CartItem = ( {toggleCartHidden} ) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon"/>

        <span className="item-count"> 0 </span>
    </div>
)

const mapDispatchToProps = (dispatch) =>  ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(CartItem);