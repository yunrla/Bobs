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
import { useDispatch } from 'react-redux';
import { setMemberNo } from './store/userSlice';


function App() {

  const [getUser, setUser] = useState(null);
  const [loginStatus, setLoginStatus] = useState(false);
  const nav = useNavigate();
  const dispatch = useDispatch();


  const loginUser = async () => {
    await axios.get('/test/api/user')
        .then(response => {
          console.log(response.data.principal.member);
          const member = response.data.principal.member; 
            if (response.data.principal.member === undefined) {
                setUser(null);
                return;
            }
            setUser(response.data.principal.member);
            dispatch(setMemberNo(member.memberNo)); //Redux에 저장
            nav('/LoginSuccess');
        });
}

useEffect(() => {
  loginUser();
}, [loginStatus]);

useEffect( () => {
  if(getUser !== null && getUser.userState !== '온라인'){
      axios.get('/api/member/loginState?memberNo=' + getUser.memberNo)
          .then((response) => {
              console.log("loginState : " + response.data);
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
          <Route path="/login" element={<LoginPage setUser={setUser} setLoginStatus={setLoginStatus} />} />
          <Route path="/goJoin" element={<JoinPage />} />
          <Route path="/SuccessJoin" element={<LoginPage />} />
          <Route path="/LoginPage" element={<LoginPage />} />

        </Routes>
      </>
    ) : (
      <Routes>
        <Route path="/pwChange" element={<PwChange />} />
        <Route path="/finishPwChange" element={<LoginPage />} />
        <Route path="/goMissionList" element={<MissionList />} />
        <Route path="/LoginSuccess" element={<MissionList />} />
      </Routes>
    )}
  </>
);
}
export default App;
