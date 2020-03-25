import React from 'react';
import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.components';

import { singInWithGoogle, auth } from '../../firebase/firebase.utils'

class SingIn extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            email: '',
            password: '',
        }
    }
    
    handleSubmit = async event => {
        event.preventDefault();
        const {email, password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: ''});

        } catch (err) {
            console.log(err.message);
        }
        
    }

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({[name]: value});
    }
     
    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>sing in with your email and password</span>

                <form action="" onSubmit={this.handleSubmit}>
                    <FormInput 
                        type="email"
                        name="email" 
                        value={this.state.email} 
                        handleChange={this.handleChange}
                        required
                        label="Email"
                    />
                    
                    <FormInput 
                        type="password" 
                        name="password" 
                        value={this.state.password} 
                        handleChange={this.handleChange}
                        required
                        label="password"
                    />

                    <CustomButton type="submit">sign in </CustomButton>

                    <CustomButton onClick={singInWithGoogle} isGoogleSignIn>sign in with google</CustomButton>
                </form>
            </div>
        );
    }
}


export default SingIn;