
import './App.css';

import Home from './Component/pages/home/Home'
import Login from '../src/Component/pages/login/Login'
import Settings from './Component/pages/settings/Settings';
import Single from './Component/pages/single/Single';
import Write from './Component/pages/Write/Write';
import TopBar from './Component/Utilies/TopBar'
import Register from './Component/pages/Register/Register';
import Header from './Component/Utilies/Header';
import Posts from './Component/pages/Post/Posts';
import Post from './Component/pages/Post/Post';
import SideBar from './Component/Utilies/SideBar';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
function App() {
  const user = false;
  return (
    <>
      <BrowserRouter>
         <TopBar></TopBar>
         <Routes>
           <Route path='/' element={<Home></Home>}></Route>
           <Route path='/about' element={user?<SideBar></SideBar>:<Login></Login>}></Route>
           <Route path='/register' element={
             user ? <Home></Home> :<Register></Register>
            }></Route>
           <Route path='/login' element=
            { user ? <Home></Home>: <Login></Login>
            }></Route>
           <Route path='/write' element={
             user?<Write></Write>:<Login></Login>}></Route>
           <Route path='/settings' element={
             user?<Settings></Settings>:<Login></Login>
            }></Route>

           <Route path='/post/:id' element={<Single></Single>}></Route>
         </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
