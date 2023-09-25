// @flow strict

import * as React from 'react';
import {getAuth, onAuthStateChanged, signInWithPopup, signOut} from 'firebase/auth';
import app from '../../firebase/Firebase.config';



export const AuthContext = React.createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = React.useState();

    const providerLogin = (provider) =>{
        return signInWithPopup(auth, provider);
    };

    const logOut = () =>{
        return signOut(auth);
    };


    React.useEffect( () =>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser) =>{
            console.log("user inside state change", currentUser)
            setUser(currentUser);
            return () =>{
                unSubscribe();
            }
        })
    } ,[])

    const authInfo = {user, providerLogin, logOut};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;