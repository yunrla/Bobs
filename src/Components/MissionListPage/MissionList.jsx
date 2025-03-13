import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";


const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;  
    flex-direction: column;
    padding-top:50px;
`
const H2 = styled.div`
    background-image:url('/img/할 일.png');
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
    background-image:url('/img/일기 쓰기.png');
    background-repeat:no-repeat;
    background-size:contain;
    width:70px;
    height:40px;
`
const ViewDiaryBtn = styled.div`
    background-image:url('/img/일기장 보기.png');
    background-repeat:no-repeat;
    background-size:contain;
    width:83px;
    height:40px;
    margin-left:3px;
`
const CompleteMission = styled.div`
    background-image:url('/img/완료한 일.png');
    background-repeat:no-repeat;
    background-size:contain;
    width:65px;
    height:40px;
    margin-top:1.5px;
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

const PlusMissionModal = styled.div`
    background-image: url('/img/66.png');
    width: 500px;
    height: 340px;
    background-size: contain;
    background-repeat: no-repeat;
    margin-top:30px;
    margin-left: 30px;
    cursor:text;
    align-items: center;
    display: ${({modalStatus}) => modalStatus ? "flex" : "none"};
    flex-direction: column;
    position:fixed;
    z-index: 1000; /* 배경보다 위에 위치 */
`
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(93, 93, 93, 0.5); /* 배경을 검정색으로 어둡게 */
  z-index: 999; /* 모달이 다른 내용 위에 오게 함 */
  display: ${({modalStatus}) => modalStatus ? "block" : "none"};

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

function MissionList(props) {

  const nav = useNavigate();
  const [inputGroups, setInputGroups] = useState([]);
  const [modalStatus, setModalStatus] = useState(false);
  const [missionDetail, setMissionDetail] = useState('');

  const toggleChecked = (id) => {
    setInputGroups((prevGroups) =>
      prevGroups.map((group) =>
        group.id === id ? { ...group, checked: !group.checked } : group
      )
    );
  };

  const handleAddMission  = (groupId) => {
    const mid = groupId

    // 모달 닫히고
    setModalStatus(false);

    //데이터베이스 연동
    axios.post(`/api/addToDo/${mid}`)
          .then(response => {

          })
          .catch()
    setInputGroups((prevGroups) => [
      ...prevGroups,
      { id: prevGroups.length + 1, checked: false },
    ]);
  };


  const openModal = () => {
    setModalStatus(true);

  }

  const deleteModal = () => {
    setModalStatus(false);
  }

  const handleMission = (e) => {
     
      setMissionDetail(e.target.value);
  }
  

  return (
    <Wrapper>
      <H2></H2>
      <H3>
        <WriteDiaryBtn />
        <ViewDiaryBtn />
        <CompleteMission />
      </H3>
      <AddContainer>
        <PlusBtn onClick={openModal}/>
        <Container>
          {inputGroups.map((group) => (
            <InputGroup key={group.id}>
              <Input type="checkbox" checked={group.checked} onChange={() => toggleChecked(group.id)} />
              <Label checked={group.checked}>Mission {group.id}</Label>
            </InputGroup>
          ))}

          {/* 미션 추가 모달창 */}
          <ModalOverlay modalStatus={modalStatus} />
            <PlusMissionModal modalStatus={modalStatus}>
              <PlusMissionModalDelete onClick={deleteModal}/>
              <InputField type='text' onChange={handleMission} value={missionDetail} placeholder='할 일을 입력하세요.'>
              </InputField>
              <PlusMissonModalBtn onClick={() => handleAddMission(group.id) }/>
            </PlusMissionModal>

        </Container>
      </AddContainer>

    </Wrapper>
  );
}

export default MissionList;