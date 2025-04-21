import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    memberNo: null,
    // 필요한 경우 다른 정보도 저장 가능
  };

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        setMemberNo:(state, action) =>{
            state.memberNo = action.payload;
        },
        logoutUser: (state) => {
            state.memberNo = null;
        }
    },
});

export const { setMemberNo, logoutUser} = userSlice.actions;
export default userSlice.reducer;