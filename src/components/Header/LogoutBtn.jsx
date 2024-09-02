import React from 'react'
import { useDispatch  } from "react-redux";
import authService from '../../appwrite/auth';//ye ek baar check krna 
import { logout } from '../../store/authSlice';
import { useNavigate } from "react-router-dom";
function LogoutBtn() {
    const dispatch=useDispatch()
    const navigate = useNavigate();
    const logoutHandler=()=>{
        authService.logout().then(()=>{
            dispatch(logout())
            navigate('/signup');
        })
    }
  return (
    <button className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
    onClick={logoutHandler}>
        Logout
    </button>
  )
}

export default LogoutBtn


//ye check kr liya hai
//isme chatgpt sey change kiya hai yaad rkhna