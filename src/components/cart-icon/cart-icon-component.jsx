import React from 'react';
import './cart-item.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/image/shopping-bag.svg';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';


const CartItem = ( {toggleCartHidden, itemCount} ) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon"/>

        <span className="item-count"> {itemCount} </span>
    </div>
)

const mapDispatchToProps = (dispatch) =>  ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProp = (state) => ({
    itemCount: selectCartItemsCount(state)
})

export default connect(mapStateToProp, mapDispatchToProps)(CartItem);