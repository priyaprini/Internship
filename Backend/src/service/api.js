import axios from "axios"
const URI="http://localhost:8080";

const getmovie=()=>axios.get(`${URI}/get/movie`)
const addmovies=(mov)=>axios.post(`${URI}/post/movie`,mov)
const editmovie=(id,mov)=>axios.put(`${URI}/save/movie/${id}`,mov)
const deletemovie=(id)=>axios.delete(`${URI}/delete/movie/${id}`)

const getsignup=()=>axios.get(`${URI}/get/signup`)
const getsignbyid=(id)=>axios.get(`${URI}/getsign/${id}`)
const addsignup=(mov)=>axios.post(`${URI}/post/signup`,mov)
const viewnameandpass=(mdname,password)=>axios.get(`${URI}/viewuserandpass/${mdname}/${password}`)
const editsignup=(id,mov)=>axios.put(`${URI}/save/signup/${id}`,mov)
const deletesignup=(id)=>axios.delete(`${URI}/delete/signup/${id}`)

export{getmovie,addmovies,editmovie,deletemovie,getsignup,addsignup,editsignup,deletesignup,viewnameandpass,getsignbyid}
