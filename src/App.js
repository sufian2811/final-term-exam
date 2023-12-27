import './App.css';
import Dragon from './components/Dragon';
import NavBar from './components/NavBar';
import Mission from './components/Mission';
import MyProfile from './components/MyProfile';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div>
      <Router>
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<Dragon/>}/>
        <Route exact path='/missions' element={<Mission/>}/>
        <Route exact path='/myprofile' element={<MyProfile/>}/>
      </Routes>
     
      </Router>
     
    </div>
  );
}

export default App;