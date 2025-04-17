import logo from './logo.svg';
import './App.css';
import MainPage from './Components/MainPage/MainPage';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import LoginPage from './Components/Member/LoginPage';
import Header from './Components/Layout/Header';
import PwChange from './Components/Member/PwChange';
import JoinPage from './Components/Member/JoinPage';
import MissionList from './Components/MissionListPage/MissionList';
import { useEffect, useState } from 'react';
import axios from 'axios';


function App() {

  const [getUser, setUser] = useState(null);
  const [loginStatus, setLoginStatus] = useState(false);
  const nav = useNavigate();


  const loginUser = async () => {
    await axios.get('/test/api/user')
        .then(response => {
            if (response.data.principal.member === undefined) {
                setUser(null);
                return;
            }
            setUser(response.data.principal.member);
            nav('/');
        });
}

useEffect(() => {
  loginUser();
}, [loginStatus]);

useEffect( () => {
  if(getUser !== null && getUser.userState !== '온라인'){
      axios.get('/user/api/loginState?userCode=' + getUser.userCode)
          .then((response) => {
              console.log(response.data);
          })
          .catch(err => console.log('update err : ' + err));
  }
}, [getUser]);

return (
  <>
    {getUser === null ? (
      <>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage setUser={setUser} loginStatus={setLoginStatus} />} />
        </Routes>
      </>
    ) : (
      <Routes>
        <Route path="/pwChange" element={<PwChange />} />
        <Route path="/finishPwChange" element={<LoginPage />} />
        <Route path="/goJoin" element={<JoinPage />} />
        <Route path="/SuccessJoin" element={<LoginPage />} />
        <Route path="/goMissionList" element={<MissionList />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/LoginSuccess" element={<MissionList />} />
      </Routes>
    )}
  </>
);
}
export default App;
