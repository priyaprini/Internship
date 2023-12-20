import React from 'react'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useStates } from '../States';
import { addmovies, addsignup } from '../service/api';
import '../User/Login.css'

const Signup = () => {
    const navigate = useNavigate();
    const { setData, data } = useStates()
    const [addmovie, setAddmovie] = useState({
        id: "", mtitle: "", password: "", mdname: "", maname: "", maaname: "", mtype: "", mrdate: "", mlanguage: "", mdescription: "", role: ""
    });
    const handleChange = (e) => {
        // e.preventDefault();
        setAddmovie({ ...addmovie, [e.target.id]: e.target.value });
    }
    const handlesubmit = async (addmovie) => {
        console.log(addmovie)
        const mov = await addsignup(addmovie);
        console.log(mov.data);
        setAddmovie({
            id: "", mtitle: "", password: "", mdname: "", maname: "", maaname: "", mtype: "", mrdate: "", mlanguage: "", mdescription: "", role: ""
        });
    }


    return (

        <div className='sign'>
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

            <div style={{ marginTop: "9%", width: "40%", marginLeft: "30%" }}>
                <h2>Sign Up</h2>
                <div style={{ padding: "0.3%" }}>
                    <input name='mtitle' type="text" placeholder='Movie Title' id='mtitle' onChange={handleChange} style={{ padding: "1%" }} />
                </div>
                <div style={{ padding: "0.3%" }}>
                    <input name='password' type="text" placeholder='Password' id='password' onChange={handleChange} style={{ padding: "1%" }} />
                </div>
                <div style={{ padding: "0.3%" }}>
                    <input name='mdname'type="text" placeholder='Director Name' id='mdname' onChange={handleChange} style={{ padding: "1%" }} />
                </div>
                <div style={{ padding: "0.3%" }}>
                    <input name='maname'type="text" placeholder='Actor Name' id='maname' onChange={handleChange} style={{ padding: "1%" }} />
                </div>
                <div style={{ padding: "0.3%" }}>
                    <input name='maaname' type="text" placeholder='Actress Name' id='maaname' onChange={handleChange} style={{ padding: "1%" }} />
                </div>
                <div style={{ padding: "0.3%" }}>
                    <input name='mtype' type="text" placeholder='Movie Type' id='mtype' onChange={handleChange} style={{ padding: "1%" }} />
                </div>
                <div style={{ padding: "0.3%" }}>
                    <input name= 'mrdate'type="date" placeholder='Release Date' id='mrdate' onChange={handleChange} style={{ padding: "1%", width: "25%" }} />
                </div>
                <div style={{ padding: "0.3%" }}>
                    <input name='mlanguage' type="text" placeholder='Movie Language' id='mlanguage' onChange={handleChange} style={{ padding: "1%" }} />
                </div>
                <div style={{ padding: "0.3%" }}>
                    <input name='mdescription' type="text" placeholder='Movie Description' id='mdescription' onChange={handleChange} style={{ padding: "1%" }} />
                </div>
                <div style={{ padding: "0.3%" }}>
                    <select type="text" placeholder='Role' id='role' onChange={handleChange} style={{ padding: "1%" }}>
                        < option value={''}>Select Role</option>
                        <option value={'Admin'}>Admin</option>
                        <option value={'User'}>User</option>
                    </select>
                </div>
                <div>
                    <button onClick={() => { handlesubmit(addmovie) }} style={{ padding: "0.8%", width: "11%" }}>Sign up</button>
                </div>

            </div>
        </div>
    )
}


export default Signup