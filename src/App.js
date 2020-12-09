import React from 'react';

import {Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/homepage/homepage';
import ShopPage from './Pages/shop/shop';
import Header from './components/menu-items/Header/Header.js';
import SignInAndSignUpPage from './components/menu-items/Sign-in-sign-up/sign-in-sign-up';
import { auth ,createUserProfileDocument} from './firebase/firebase';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      currentUser:null
    }
  }
  unsubscribeFromAuth=null

  componentDidMount(){
      this.unsubscribeFromAuth=  auth.onAuthStateChanged(async userAuth=>{
        // this.setState({currentUser:user});
        if (userAuth){
            const userRef =await createUserProfileDocument(userAuth);
            userRef.onSnapshot(Snapshot =>{
              this.setState({currentUser:{
                id:Snapshot.id,
                ...Snapshot.data()
              }},()=>{
                console.log(this.state);
              });
            });
        }
        this.setState({currentUser:userAuth});
      })
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
render(){
  return (
    <div className="App">
    <Header currentUser={this.state.currentUser}/>
    <Switch>
    <Route exact path='/' component={HomePage}/>
    <Route  path="/shop"  component={ShopPage}/>
    <Route  path="/signin"  component={SignInAndSignUpPage}/>
      </Switch>
   </div>
  );
}
}

export default App;
