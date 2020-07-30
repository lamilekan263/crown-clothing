import React, {Component} from 'react';
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import {auth, signInWithGoogle} from '../../firebase/firebase.util'

import './sign-in.style.scss'

class SignIn extends Component{
    constructor(props){
        super(props);
        this.state ={
            email : '',
            password : ''
        }
    }

    handleSubmit = async e =>{
        e.preventDefault(); 
        const {email, password} = this.state;

        try{

        }catch(error){
            
        }
        this.setState({
            email : '',
            password : ''
        })
    }
    handleChange = e =>{
        const {name, value } = e.target;

        this.setState({[name] : value })
    } 

    render(){
        return(
            <div className= 'sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' type='email' handleChange={this.handleChange} label = "email" value={this.state.email}  required/>
               
                    <FormInput name='password' type='number' handleChange={this.handleChange} label = "password" value={this.state.password} required/>
                     <div className="buttons">
                        <CustomButton type='submit' > Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn > 
                            {' '}
                            Sign In with Google
                            {" "}
                        </CustomButton>
                    </div>   
                </form>

            </div>
        )
    }

}


export default SignIn 