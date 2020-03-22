import React from 'react';

import './sign-up.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.components';

import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';


class SignUp extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = { 
            displayName: '',
            email: '',
            password: '',
        }
    }
    
    handeSubmit = async (event) => {
        event.preventDefault();
        const { displayName, email, password } = this.state;
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, { displayName });

            this.setState({
                displayName: '',
                email: '',
                password: '',
            })
        } catch (err) {
            console.log(err.message);
        }
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    } 

    render() {
        return (
            <div className="sing-up">
                <h2 className="title">I don't have an account </h2>

                <form action="" onSubmit={this.handeSubmit}>

                    <FormInput
                        type="text"
                        name="displayName"
                        value={this.state.displayName}
                        onChange={this.handleChange}
                        label="display name"
                        required
                    />

                    <FormInput
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        label="email"
                        required
                    />


                    <FormInput
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        label="password"
                        required
                    />


                    <CustomButton
                        type="submit"
                    >
                        register
                    </CustomButton>
                </form>
            </div>
        );
    }
}

export default SignUp;