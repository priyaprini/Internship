import React from 'react'
import  { useState } from 'react'
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useStates } from '../States';
import { addmovies } from '../service/api';


const Addmovie = () => {
    const navigate=useNavigate();
    const {setData,data} = useStates()
    const [addmovie,setAddmovie]=useState({
        id:"",mtitle:"",mdname:"",maname:"",maaname:"",mtype:"",mrdate:"",mlanguage:"",mdescription:""
    });
     const handleChange=(e)=>{
        // e.preventDefault();
        setAddmovie({...addmovie,[e.target.id]:e.target.value});
     }
     const handlesubmit=async(e)=>{
        e.preventDefault();
        //  if(addmovie.mtitle===''||addmovie.mtitle===''||addmovie.mdname===''||addmovie.maname===''||addmovie.maaname===''||addmovie.mtype===''||addmovie.mrdate===''||addmovie.mlanguage===''||addmovie.mdescription==='')
        //  {
        //      toast.error("Enter all fields");
        //  }
         
        //    setData((prev)=>[...prev,addmovie])


        const mov = await addmovies(addmovie);
        console.log(mov.data);
        if (mov.data === "posted") {
          toast.success("Product added");
          // Clear input fields by resetting the state
          setAddmovie({
            id:"",mtitle:"",mdname:"",maname:"",maaname:"",mtype:"",mrdate:"",mlanguage:"",mdescription:""
          });
          setTimeout(()=>{
            navigate("/view");
          },2000);

}
     };


  return (
    
        <div >
            <ToastContainer
              position="top-center"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
    
    <div style={{marginTop:"9%",border:"2px solid black",width:"40%",marginLeft:"30%"}}>
        <div style={{padding:"0.3%"}}>
            <input type ="text" placeholder='Movie Title' id='mtitle'onChange={handleChange} style={{padding:"1%"}}/>
        </div>
        <div style={{padding:"0.3%"}}>
            <input type ="text" placeholder='Director Name' id='mdname'onChange={handleChange}style={{padding:"1%"}}/>
        </div>
        <div style={{padding:"0.3%"}}>
            <input type ="text" placeholder='Actor Name' id='maname'onChange={handleChange}style={{padding:"1%"}}/>
        </div>
        <div style={{padding:"0.3%"}}>
            <input type ="text" placeholder='Actress Name' id='maaname'onChange={handleChange}style={{padding:"1%"}}/>
        </div>
        <div style={{padding:"0.3%"}}>
            <input type ="text" placeholder='Movie Type'id='mtype'onChange={handleChange}style={{padding:"1%"}}/>
        </div>
        <div style={{padding:"0.3%"}}>
            <input type ="date" placeholder='Release Date' id='mrdate'onChange={handleChange}style={{padding:"1%",width:"25%"}}/>
        </div>
        <div style={{padding:"0.3%"}}>
            <input type ="text" placeholder='Movie Language' id='mlanguage'onChange={handleChange}style={{padding:"1%"}}/>
        </div>
        <div style={{padding:"0.3%"}}>
            <input type ="text" placeholder='Movie Description'id='mdescription'onChange={handleChange}style={{padding:"1%"}}/>
        </div>
        <div>
            <button onClick={handlesubmit} style={{padding:"0.8%",width:"6%"}}>ADD</button>
        </div>

    </div>
    </div>
  )
}


export default Addmovie