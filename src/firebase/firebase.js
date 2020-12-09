import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config= {
    apiKey: "AIzaSyD2kAJJNr6EQ8dsay_0-7wnPpxDcSvc9ak",
    authDomain: "shopping-app-emk.firebaseapp.com",
    projectId: "shopping-app-emk",
    storageBucket: "shopping-app-emk.appspot.com",
    messagingSenderId: "379085274831",
    appId: "1:379085274831:web:b3322266ffd297f29101ba",
    measurementId: "G-XVW3KSEDD3"
  };

export const createUserProfileDocument =async(userAuth,...additionalData)=>{
      if(!userAuth) return;

        const userRef=firestore.doc(`users/${userAuth.uid}`);
        const snapShot=await userRef.get();
       if(!snapShot.exists){
         const {displayName,email}=userAuth;
         const createdAt=new Date();
         try{
           await userRef.set({
             displayName,
             email,
             createdAt,
             ...additionalData
           });
         }catch(error){
                console.log('error creating user',error.message);
         }
        
         }
       
       return userRef;
        }
  firebase.initializeApp(config);

  export const auth=firebase.auth();

  export const firestore=firebase.firestore();
  const provider=new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});

  export const signInWithGoogle=()=> auth.signInWithPopup(provider);
  export default firebase;
