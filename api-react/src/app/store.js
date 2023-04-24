import { configureStore } from "@reduxjs/toolkit";
import UserList from "./userList";



export default  configureStore({
    reducer:{
        user:UserList
    }
})
