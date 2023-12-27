import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {missionslice} from "./redux/slice/MissionsSlice";
import {dragonslice} from "./redux/slice/DragonsSlice";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import NavBar from './components/Navbar';
import MissionsSlice from './redux/slice/MissionsSlice';
import DragonsSlice from './redux/slice/DragonsSlice';

function App() {
  return (
    <Router>
    <NavBar/>
    <Routes>
    <Route exact path="/missions" element={<MissionsSlice/>} />
    <Route exact path="/" element={<Home/>} />
    <Route exact path="/dragons" element={<DragonsSlice/>} />
    </Routes>
    </Router>
  );
}

export default App;

