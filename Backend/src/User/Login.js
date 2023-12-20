import React, { useState } from 'react'
import './Login.css'
import { viewnameandpass } from '../service/api';
import { Navigate, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate=useNavigate();
    const[login,setLogin]=useState({
        mdname:'',password:''
    })
    const handleChange=(e)=>{
        setLogin({...login,[e.target.id]:[e.target.value]});
    }
    const handleSubmit=async(e)=>{
         const res=await viewnameandpass(login.mdname,login.password)
         console.log(res.data);
         console.log(res.data[0].role);
         setLogin({mdname:'',password:''})
         if(res.data[0].role==="Admin")
         {
            navigate("/view")
         }
         else{
            navigate(`/viewuser/${res.data[0].id}`)
         }
    }

  return (
    <>
    <div className='login-box'>
    <h1 className='login-box-text'>Login</h1>
    <div className="login-container">
        <div className="login-inputs">
            <h4>Director Name<span>*</span></h4>
            <input name='mdname'type="text" placeholder='Director Name' id='mdname' value={login.mdname} onChange={handleChange} />
            <h4>Password<span>*</span></h4>
              <input name='password' type="text" placeholder='Password' id='password'value={login.password} onChange={handleChange} />
            {/* <p>I have already an Account! <u onClick={gotoRegister}>Register Now</u></p> */}
        </div>
        <div className="login-button">
        <button onClick={handleSubmit}>Login</button>
        </div>

    </div>
    </div>
    </>
    // <div style={{height:" 300px",
    // width:" 400px",
    
    // marginTop:" 50px",
    // marginLeft: "50px",
    // border: "2px solid #5ac2ab",
    // borderRadius: "20px",
    // display:" flex",
    // flexDirection: "column",}}>
    //     <div style={{height:" 30px",
    // width: "270px",
    // borderRadius: "4px",
    // border: "2px solid #3bbfd8"}}>
    //                 <input name='mdname'type="text" placeholder='Director Name' id='mdname' value={login.mdname} onChange={handleChange} style={{ padding: "1%" }} />
    //             </div>  
    //     <div style={{ padding: "0.3%" }}>
    //                 <input name='password' type="text" placeholder='Password' id='password'value={login.password} onChange={handleChange} style={{ padding: "1%" }} />
    //             </div>
    //             <div><button onClick={handleSubmit}>Login</button></div>      
    // </div>
  )
}

export default Login