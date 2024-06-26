import {configureStore} from "@reduxjs/toolkit";
import {userReducer} from "./userReducer"


const store = configureStore({
    reducer:{
      user:userReducer  
    }
});

export default store;
export const server='http://localhost:5000/api/v1'
