import { CartActionTypes } from './cart.types';


export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN,
})

export const addNewItemToCart = (item) => ({
    type: CartActionTypes.ADD_NEW_ITEM,
    payload: item
})