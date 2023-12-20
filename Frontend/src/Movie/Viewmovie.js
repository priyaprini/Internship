import React, { useEffect, useState } from 'react'
import { deletesignup, getmovie, getsignup } from '../service/api';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Viewmovie = () => {
    const navigate=useNavigate();
    const [movie,setMovie]=useState([]);
    const fetchmovie=async()=>{
        try{
            const res=await getsignup();
            setMovie(res.data)
        }
        catch(error){
            console.log("error")
        }
    }
    useEffect(()=>{
        fetchmovie()
    },[])

    const edit=(m)=>{
       console.log(m);
       navigate(`updatemovie/${m.id}`)
    }
    const del=async(m)=>{
        console.log(m);              
        const movid=m.id;
        const ress=await deletesignup(movid);
        console.log(ress.data);
        if(ress.data==="deleted")
        {
            toast.success(`${m.mdname} in to bin`)
            fetchmovie();
        }
    }
  return (
    <div className='movie-table'>
        <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Director</th>
            <th>Actor</th>
            <th>Actress</th>
            <th>Type</th>
            <th>Date</th>
            <th>Language</th>
            <th>Description</th>
            <th>Role</th>
            <th>Edit</th>
            <th>Delete</th>
        </tr>
            {movie.map((m)=>(
                <tr>
                    <td>{m.id}</td>
                    <td>{m.mtitle}</td>
                    <td>{m.mdname}</td>
                    <td>{m.maname}</td>
                    <td>{m.maaname}</td>
                    <td>{m.mtype}</td>
                    <td>{m.mrdate}</td>
                    <td>{m.mlanguage}</td>
                    <td>{m.mdescription}</td>
                    <td>{m.role}</td>
                    <td onClick={()=>edit(m)}>edit</td>
                    <td onClick={()=>del(m)}>delete</td>
                </tr>
            ))}
    </div>
  )
}

export default Viewmovie