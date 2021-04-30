import React, { useState,useContext } from 'react';
import {UserContext} from '../App';

export function Register(){
    const setUser = useContext(UserContext);
    const [authRegister,setAuthRegister] = useState({
        email: "", password: "", cpassword: ""
    })
    const authChange =(e)=>{
        e.preventDefault();
        setAuthRegister({
            ...authRegister,[e.target.name]: e.target.value
        })
    }
    const registerSubmit =(e)=>{
        e.preventDefault();
        console.log(authRegister);
        if(authRegister.password===authRegister.cpassword){
            setUser({
                userLogin: true, userId: ''
            })
        }else{
            alert("Password doesn't match")
        }
    }
    return (
        <div className="container">
         <div className="row loginRow">
          <div className="col-lg-8 loginForm p-3 col-12 col-md-8 m-auto">
            <form onSubmit={registerSubmit}>
                <div className="form-group">
                    <label htmlFor="emil">Email address</label>
                    <input type="email" name="email" value={authRegister.email} onChange={authChange} className="form-control" id="email" aria-describedby="email" placeholder="Enter your email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={authRegister.password} onChange={authChange} className="form-control" id="password" placeholder="Password" />
                </div>
                <div className="form-group">
                    <label htmlFor="cpassword">Confirm Password</label>
                    <input type="password" name="cpassword" value={authRegister.cpassword} onChange={authChange} className="form-control" id="cpassword" placeholder="Confirm Password" />
                </div>
                <button type="submit" className="btn btn-primary">SignUp</button>
            </form>
          </div>
         </div>
        </div>
    )
}
export function Login(){
    const setUser = useContext(UserContext);
    const [AuthLogin,setAuthLogin] = useState({
        email: "", password: ""
    })
    const authChange = (e)=>{
        e.preventDefault();
        setAuthLogin({
            ...AuthLogin,[e.target.name]: e.target.value
        })
    }
    const loginSubmit=(e)=>{
     e.preventDefault();
     console.log(AuthLogin)
         setUser({
             userLogin: true, userId: ''
         })
    }
    return (
        <div className="container">
         <div className="row loginRow">
          <div className="col-lg-8 loginForm p-3 col-12 col-md-8 m-auto">
            <form onSubmit={loginSubmit}>
                <div className="form-group">
                    <label htmlFor="emil">Email address</label>
                    <input type="email" onChange={authChange} name="email" value={AuthLogin.email} className="form-control" id="email" aria-describedby="email" placeholder="Enter your email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input name="password" onChange={authChange} value={AuthLogin.password} type="password" className="form-control" id="password" placeholder="Password" />
                </div>
                
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
          </div>
         </div>
        </div>
    )
}

export default function Auth() {
    const [authButton,setAuthButton]=useState('login');
    return (
        <div className="container auth">
         <h2 className="text-center">Create Your iQuiz</h2>
            <div className="authButtons mt-4">
            <button onClick={()=>setAuthButton('login')} className="btn mx-1 btn-outline-info">Login</button>
            <button onClick={()=>setAuthButton('signup')} className="btn mx-1 btn-outline-info">SignUp</button>
            </div>

          {authButton==='login'? <Login/> : <Register/> }
        </div>
    )
}
