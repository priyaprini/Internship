import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Addmovie from './Movie/Addmovie';
import Viewmovie from './Movie/Viewmovie';
import Signup from './User/Signup';
import Login from './User/Login';
import Viewuser from './Movie/Viewuser';
import Updatemovie from './Movie/Updatemovie';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Routes>
           <Route path='/' element={<Addmovie/>}/>
           <Route path='/log' element={<Login/>}/>
           <Route path='/sign' element={<Signup/>}/>
           <Route path='/view' element={<Viewmovie/>}/>
           <Route path='/viewuser/:id' element={<Viewuser/>}/>
           <Route path='/updatemovie/:id' element={<Updatemovie/>}/>
          
         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
