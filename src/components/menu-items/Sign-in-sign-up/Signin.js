import React from 'react';
import {auth, signInWithGoogle } from '../../../firebase/firebase';
import CustomButton from '../custom-button/custom-button';
import FormInput from './form-input';


import './Signin.scss';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state={
            email:'',
            password:''
        };
    }
    handleSubmit=async event=>{
        event.preventDefault();
        const {email, password}=this.state;
        try{
            await auth.signInWithEmailAndPassword(email,password);

        
        this.setState({email:'',password:''});
        }catch(error){
            console.log(error);
        }
    };
    handleChange=event=>{
        const {value,name}=event.target;
        this.setState({[name]:value});
    }
    render(){
        return(
            <div className="signin">
            <h2>I already have a account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={this.handleSubmit}>
            <FormInput type="email" name="email" 
            onChange={this.handleChange}
            label="Email"
            value={this.state.email} required/>
            
            <FormInput type="password" name="password" 
                onChange={this.handleChange}
                label="Password"
            value={this.state.password} required/>
            <div className="c-buttons">
               <CustomButton type="submit"> SIGN IN</CustomButton>
                <CustomButton onClick={signInWithGoogle} isGoogleSignIn>SIGN IN WITH GOOGLE</CustomButton>
           
            </div>
              </form>
            </div>
        )
    }
}
export default SignIn;