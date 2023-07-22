import './App.css';
import {BrowserRouter as Router , Route , Routes} from "react-router-dom"
import Header from './components/Header/Header';
import Home from './components/home/Home';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import { useEffect  } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, loadUser } from './actions/user';
import AdminPanel from './components/Admin/AdminPanel';
import Timeline from './components/Admin/Timeline';
import Project from './components/Admin/Project';
import './fonts/GlitchGoblin-2O87v.ttf'
import './fonts/GlitchInside-0Wjro.otf'
import Loader from './Loader/Loader';



function App() {  

  const dispatch = useDispatch()

  const {isAuthenticated} = useSelector((state)=>state.login)
  
  //temp Loader:
  const {loading , user} = useSelector((state)=>state.user)



  useEffect(() => {
    dispatch(getUser())
    dispatch(loadUser())
  }, [dispatch])

  //add proxy at server 4000 since our server is running on 4000
  

  return(
    <Router>
      {loading ? <Loader/> : (
        <>
          <Header/>
          <Routes>
      <Route path='/' element={<Home timelines={user?.timeline} skills={user?.skills} />} />


      <Route path='/about' element={<About about={user?.about}/>} />

      <Route path='/projects' element={<Projects projects={user?.projects}/>} />
      <Route path='/contact' element={<Contact/>} />
      
      <Route path='/account' element={isAuthenticated ? <AdminPanel /> : <Login/>} />
      <Route path='/admin/timeline' element={isAuthenticated ? <Timeline /> : <Login/>} />
      <Route path='/admin/project' element={isAuthenticated ? <Project /> : <Login/>} />
    </Routes>
          <Footer/>
        </>
      )}
    </Router>
  );
}

export default App;
