import React from 'react';

import './sign-in-sign-up.scss';
import SignIn from './Signin';
import SignUp from '../Sign-in-sign-up/signup'

const SignInAndSignUpPage =()=>(

    <div className="sign-in-and-sign-up">
        <SignIn/>
        <SignUp/>
    </div>
);

export default SignInAndSignUpPage;