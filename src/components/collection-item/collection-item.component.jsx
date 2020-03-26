import React from 'react';
import './collection-item.styles.scss';

import CustomButton from '../custom-button/custom-button.components';

import {connect} from 'react-redux';
import { addNewItemToCart } from '../../redux/cart/cart.actions';

const CollectionItem = ({item, addNewItemToCart}) => {
    
    const {imageUrl, name, price} = item;
    return (
        <div className="collection-item">
            <div className="image"
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            >
            </div>

            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>

            <CustomButton onClick={() => addNewItemToCart(item)} inverted>Add to cart</CustomButton>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    addNewItemToCart: (item) => dispatch(addNewItemToCart(item))
})
export default connect(null, mapDispatchToProps)(CollectionItem);