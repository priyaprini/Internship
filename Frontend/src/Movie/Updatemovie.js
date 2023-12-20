import React, { useEffect, useState } from 'react'
import { editsignup, getmovie, getsignbyid, getsignup } from '../service/api';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Updatemovie = () => {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const {id}=useParams();
    const [up,setUp]=useState({
        id:"",mtitle:"",mdname:"",maname:"",maaname:"",mtype:"",mrdate:"",mlanguage:"",mdescription:"",role:""
    })
    const fetchid=async()=>{
        try{
            const moviee=await getsignbyid(id);
            setUp(moviee.data)
            console.log(moviee.data);
        }
        catch(error){
            console.log("error")
        }
    }
    useEffect(()=>{
        fetchid()
    },[])

    const handleChange = (e) => {
        e.preventDefault();
        setUp({ ...up, [e.target.id]: e.target.value });
      };
      const handleSubmit = async(up) => {
        // e.preventDefault();
        console.log(up);
        const res=await editsignup(up.id,up);
        console.log(res.data);
        if(res.data==="Updated Successfully")
        {
           navigate("/view");
        }
      };

  
  return (
    <div >
            {/* <ToastContainer
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
            /> */}

            <div >
                <div >
                    <input name='mtitle' type="text" placeholder='Movie Title'value={up.mtitle} id='mtitle' onChange={handleChange} style={{ padding: "1%" }} />
                </div>
                <div >
                    <input name='password' type="text" placeholder='Password' value={up.password} id='password' onChange={handleChange} style={{ padding: "1%" }} />
                </div>
                <div >
                    <input name='mdname'type="text" placeholder='Director Name'value={up.mdname} id='mdname' onChange={handleChange} style={{ padding: "1%" }} />
                </div>
                <div >
                    <input name='maname'type="text" placeholder='Actor Name' value={up.maname} id='maname' onChange={handleChange} style={{ padding: "1%" }} />
                </div>
                <div >
                    <input name='maaname' type="text" placeholder='Actress Name'value={up.maaname} id='maaname' onChange={handleChange} style={{ padding: "1%" }} />
                </div>
                <div style={{ padding: "0.3%" }}>
                    <input name='mtype' type="text" placeholder='Movie Type'value={up.mtype} id='mtype' onChange={handleChange} style={{ padding: "1%" }} />
                </div>
                <div style={{ padding: "0.3%" }}>
                    <input name= 'mrdate'type="date" placeholder='Release Date' value={up.mrdate} id='mrdate' onChange={handleChange} style={{ padding: "1%", width: "25%" }} />
                </div>
                <div style={{ padding: "0.3%" }}>
                    <input name='mlanguage' type="text" placeholder='Movie Language'value={up.mlanguage} id='mlanguage' onChange={handleChange} style={{ padding: "1%" }} />
                </div>
                <div style={{ padding: "0.3%" }}>
                    <input name='mdescription' type="text" placeholder='Movie Description' value={up.mdescription} id='mdescription' onChange={handleChange} style={{ padding: "1%" }} />
                </div>
                <div style={{ padding: "0.3%" }}>
                    <input type="text" placeholder='Role' id='role' onChange={handleChange} value={up.role} style={{ padding: "1%" }}>
                    </input>
                </div>
                <div>
                    <button onClick={() => { handleSubmit(up) }} style={{ padding: "0.8%", width: "6%" }}>Sign up</button>
                </div>

            </div>
        </div>
  )
}

export default Updatemovie