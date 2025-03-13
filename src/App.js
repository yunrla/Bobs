import logo from './logo.svg';
import './App.css';
import MainPage from './Components/MainPage/MainPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './Components/Member/LoginPage';
import Header from './Components/Layout/Header';
import PwChange from './Components/Member/PwChange';
import JoinPage from './Components/Member/JoinPage';
import MissionList from './Components/MissionListPage/MissionList';


function App() {
  return (
    <BrowserRouter>
    <Header/>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/pwChange" element={<PwChange/>}/>
          <Route path="/finishPwChange" element={<LoginPage/>}/>
          <Route path="/goJoin" element={<JoinPage/>}/>
          <Route path="/SuccessJoin" element={<LoginPage/>}/>
          <Route path="/goMissionList" element={<MissionList/>}/>
          
        
          
        </Routes>
    </BrowserRouter>
  );
}

export default App;
