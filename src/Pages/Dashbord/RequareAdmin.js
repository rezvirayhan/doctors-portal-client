import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import Loading from '../Shared/Loading';
import { signOut } from "firebase/auth";


const RequareAdmin = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const [admin, adminLoding] = useAdmin(user)
    const location = useLocation()

    if(loading || adminLoding){ 
        return <Loading></Loading>
    }
    if(!user | !admin){
        return <Navigate to="/login" state={{from: location}} replace></Navigate>
    }

    return children
};

export default RequareAdmin;