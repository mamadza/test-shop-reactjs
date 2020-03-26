import React from 'react';
import './header.styles.scss';


import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/image/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon-component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import { connect } from 'react-redux';

const Header = ({ currentUser, hidden }) => (
    <div className="header">
        <Link to="/" className="logo-container">
             <Logo className="logo"></Logo>
        </Link>

        <div className="options">
            <Link to="/shop" className="option">
                Shop
            </Link>
            <Link to="/" className="option">
                Contact
            </Link>
            {
                currentUser ? 
                <div className="option" onClick={() => auth.signOut() }>signout</div>
                :
                <Link to="/signin" className="option">sign in</Link>
            }
            <CartIcon/>
        </div>
        {
            !hidden ?
            <CartDropDown /> 
            : 
            ''
        }
    </div>
)

const mapStateToProps = ({user: {currentUser}, cart: { hidden }}) => ({
    currentUser,
    hidden

})

export default connect(mapStateToProps)(Header);