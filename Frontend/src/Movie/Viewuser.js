import React, { useEffect, useState } from 'react'
import { getmovie, getsignbyid, getsignup } from '../service/api';
import { useNavigate, useParams } from 'react-router-dom';

const Viewuser = () => {
    const navigate=useNavigate();
    const {id}=useParams();
    const [movie,setMovie]=useState([]);
    const fetchmovie=async()=>{
        try{
            const res=await getsignbyid(id);
            setMovie(res.data)
        }
        catch(error){
            console.log("error")
        }
    }
    useEffect(()=>{
        fetchmovie()
    },[])
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
        </tr>
                <tr>
                    <td>{movie.id}</td>
                    <td>{movie.mtitle}</td>
                    <td>{movie.mdname}</td>
                    <td>{movie.maname}</td>
                    <td>{movie.maaname}</td>
                    <td>{movie.mtype}</td>
                    <td>{movie.mrdate}</td>
                    <td>{movie.mlanguage}</td>
                    <td>{movie.mdescription}</td>
                </tr>
    </div>
  )
}

export default Viewuser