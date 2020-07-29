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
            confrimPassword : ''
        }
    }
    render(){
        return{
            .sign
        }
    }
}

export default SignUp