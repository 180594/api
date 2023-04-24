import {createSlice } from "@reduxjs/toolkit"

const UserList = createSlice ({
     name:"user",
     initialState:[],
     reducers:{
SetUsers:(state,action)=>{
    return action.payload
}
     }
})
export  const{SetUsers}= UserList.actions;
export default UserList.reducer