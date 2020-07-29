import React, {Component} from 'react';

import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../components/custom-button/custom-button';

import {auth, createUserProfileDocument} from '../../firebase/firebase.util';
import './sign-up.styles'


class SignUp extends Component{
    constructor(){
        super();

        this.state ={
            displayName : '',
            email : '',
            password : '',
            confirmPassword : ''
        }
    }
    render(){
        const {displayName, email, password, confirmPassword} = this.state
        return(
            <div className="sign-up">
                <h2 className='title'>I do not have a account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit = {this.handleSubmit}>
                    <FormInput
                        type = 'test'
                        name = 'display name'
                        value = {displayName}
                        o
                    >

                    </FormInput>
                </form>
            </div>
        )
    }
}

export default SignUp