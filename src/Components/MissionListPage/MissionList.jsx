import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useSelector } from 'react-redux';


const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;  
    flex-direction: column;
    padding-top:50px;
`
const H2 = styled.div`
    background-image:url('/img/tasks.png');
    background-repeat:no-repeat;
    background-size:contain;
    width:70px;
    height:40px;
    margin-bottom:10px;
`
const H3 = styled.div`
    display:flex;
    flex-direction:row;
    gap:20px;
`

const WriteDiaryBtn = styled.div`
    background-image:url('/img/writeDiary2.png');
    background-repeat:no-repeat;
    background-size:contain;
    width:70px;
    height:40px;
    cursor: pointer;
`
const ViewDiaryBtn = styled.div`
    background-image:url('/img/viewDiary.png');
    background-repeat:no-repeat;
    background-size:contain;
    width:83px;
    height:40px;
    margin-left:3px;
    cursor: pointer;

`
const CompleteMission = styled.div`
    background-image:url('/img/completedtasks.png');
    background-repeat:no-repeat;
    background-size:contain;
    width:65px;
    height:40px;
    margin-top:1.5px;
    cursor: pointer;

`

const PlusBtn = styled.div`
    background-image: url('/img/plusmission.png');
    background-repeat: no-repeat;
    background-size: contain;
    width: 33px;
    height: 33px;
    display: grid;
    align-self: flex-end;
    cursor: pointer;
    position: absolute;    
    top: 5px;  /* 화면 하단에서 20px 거리 */
    right: 40px;   /* 화면 오른쪽에서 20px 거리 */
    z-index: 1000;
`

const Container = styled.div`
    width: 600px;
    height: 430px;
    display: flex; 
    flex-direction: column;
    margin-top: 30px;
    align-items: center; 
    overflow:auto;
  
`

const AddContainer = styled.div`
    width: 610px;
    height: 500px;
    position: relative; 
    padding-top:15px;
`

const InputGroup = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-direction: row;
    position: relative; 
`

const Label = styled.label`
    background-image:${(props) => (props.checked ? 'url(/img/successMission.png)' : 'url(/img/MissionRactangle2.png)')};
    background-repeat: no-repeat;
    background-size: 100% 100%; 
    width: 550px;
    height: 120px; 
    min-height: 100px; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
    margin-left:30px;
    margin-bottom:10px;
`

const Input = styled.input`
    display:block;
    width: 40px;
    height: 50px; 
    display:flex;
    align-self: flex-start;
    margin-left:57px;
    position: absolute;  
    margin-top:35px;
    cursor:pointer;
`


const InputField = styled.input`
    outline: none;
    width: 370px;
    height: 170px;
    background: none;
    caret-color: #afafb0;
    font-size: 22px;
    border: 1px solid black;
    margin-bottom: 8px;
    margin-top: 5px;
    margin-left: -10px;
    border: none;
    text-align: center; 
`

const DiaryInputField = styled.textarea`
    outline: none;
    width: 370px;
    height: 170px;
    background: none;
    caret-color: #afafb0;
    font-size: 22px;
    border: 1px solid black;
    margin-bottom: 8px;
    margin-top: 115px;
    margin-left: -10px;
    border: none;
    text-align: center; 
    white-space: pre-wrap;
    font-family: inherit;
`

const PlusMissionModal = styled.div`
    background-image: url('/img/PlusMissionModal.png');
    width: 500px;
    height: 340px;
    background-size: contain;
    background-repeat: no-repeat;
    margin-top:30px;
    margin-left: 30px;
    cursor:text;
    align-items: center;
    flex-direction: column;
    position:fixed;
    z-index: 1000; 

    display : none;

    &.visible {
      display:flex;
    }
`
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(93, 93, 93, 0.5); 
  z-index: 999;
  
  /* 기본적으로 안 보이게 설정 */
  display: none;

  /* visible 클래스가 추가되면 보이도록 변경 */
  &.visible {
    display: block;
  }

`;
const PlusMissonModalBtn = styled.div`
    background-image: url('/img/plusMissionModalBtn.png');
    background-size: contain;
    background-repeat: no-repeat;
    width: 60px;
    height: 40px;
    margin-right: 20px;
    cursor: pointer;
`

const PlusMissionModalDelete = styled.div`
    background-image: url('/img/deleteBtn.png');
    background-size: contain;
    background-repeat: no-repeat;
    width: 20px;
    height: 20px;
    align-self: flex-end;
    margin-right: 23px;
    margin-top:20px;
    cursor:pointer;
`

const PlusDiaryModal = styled.div`
    background-image: url('/img/diaryModal.png');
    width: 500px;
    height: 340px;
    background-size: contain;
    background-repeat: no-repeat;
    margin-top:30px;
    margin-left: 30px;
    cursor:text;
    align-items: center;
    flex-direction: column;
    position:fixed;
    z-index: 1000; /* 배경보다 위에 위치 */
    display: none;

    &.visible {
      display : flex;
    }
`

const PlusDiaryModalDelte = styled.div`
  
`

const PlusDiaryModalBtn = styled.div`
  
`
function MissionList(props) {
  const nav = useNavigate();
  const [inputGroups, setInputGroups] = useState([]);
  const [modalStatus, setModalStatus] = useState(false);
  const [missionDetail, setMissionDetail] = useState('');
  const [diaryModalStatus, setDiaryModalStatus] = useState(false);
  const [diaryDetail, setDiaryDetail] = useState('');
  const memberNo = useSelector((state) => state.user.memberNo);

  const toggleChecked = (id) => {
    setInputGroups((prevGroups) =>
      prevGroups.map((group) =>
        group.id === id ? { ...group, checked: !group.checked } : group
      )
    );
  };

  const handleAddMission = () => {
    setModalStatus(false);

    setInputGroups((prevGroups) => [
      ...prevGroups,
      { id: prevGroups.length + 1, checked: false,  text: missionDetail  },
    ]);

     const missionData = {
      memberNo : memberNo,
      mission : missionDetail
     }
    
    axios
      .post('/api/mission/addMission', missionData)
      .then(res => {
        if (res.data === 'addMissionSuccess') {
          console.log("미션 테이블에 저장 성공");
        }else {
          console.log("미션 테이블에 저장 실패");

       }
      })
      setMissionDetail('');


  };

  const openModal = () => {
    setModalStatus(true);
  }

  const deleteModal = () => {
    setModalStatus(false);
    setDiaryModalStatus(false);
    setMissionDetail('');
  }

  const handleMission = (e) => {
    setMissionDetail(e.target.value);
  }

  const openDiaryModal = () => {
    setDiaryModalStatus(true);
  }

  const handleDiary = (e) => {
    setDiaryDetail(e.target.value);
  }

  const addDiary = () => {
    // 일기 추가 로직 구현 예정
  }

  return (
    <Wrapper>
      <H2></H2>
      <H3>
        <WriteDiaryBtn onClick={openDiaryModal} />
        <ViewDiaryBtn />
        <CompleteMission />
      </H3>
      <AddContainer>
        <PlusBtn onClick={openModal}/>
        <Container>
          {inputGroups.map((group) => (
            <InputGroup key={group.id}>
              <Input type="checkbox" checked={group.checked} onChange={() => toggleChecked(group.id)} />
              <Label checked={group.checked}>{group.text}</Label>
            </InputGroup>
          ))}

          {/* 미션 추가 모달창 */}
          <ModalOverlay className={modalStatus ? "visible" : ""} />
          <PlusMissionModal className={modalStatus ? "visible" : ""}>
            <PlusMissionModalDelete onClick={deleteModal}/>
            <InputField type='text' onChange={handleMission} value={missionDetail}  autoFocus />
            <PlusMissonModalBtn onClick={handleAddMission} />
          </PlusMissionModal>

          {/* 일기 쓰기 모달창 */}
          <ModalOverlay className={diaryModalStatus ? "visible" : ""} />
          <PlusDiaryModal className={diaryModalStatus ? "visible" : ""}>
            <PlusDiaryModalDelte onClick={deleteModal}/>
            <DiaryInputField type='text' onChange={handleDiary} value={diaryDetail} placeholder='오늘 고양이와 어떤 하루를 보내셨나요?' />
            <PlusDiaryModalBtn onClick={addDiary}/>
          </PlusDiaryModal>
        </Container>
      </AddContainer>
    </Wrapper>
  );
}

export default MissionList;