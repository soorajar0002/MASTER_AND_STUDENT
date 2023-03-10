import { createSlice } from '@reduxjs/toolkit';

export const AuthSlice = createSlice({
  name: 'token',
  initialState: [],
  reducers: {
    setToken: (state, action) => {
        const token = {
         
            access_token:action.payload.access,
            refresh_token:action.payload.refresh,
        };
        
      
        // return a new data
        return {...state, token};
      },
      removeToken: (state) => {
        // Remove the token from the state
        console.log("Removing token and user data...");
        return {
          ...state,
          token: null,
          user: null,
        };
      },
   
    studentData: (state, action) => {
      const user = {
        id: action.payload.id,
        username:action.payload.username,
        email: action.payload.email,
        first_name: action.payload.first_name,
        last_name: action.payload.last_name,
        phone_number: action.payload.phone_number,
        
        isStudent: true,
      };
      console.log("student",user)

      return {
        ...state,user,
      };
  },
  masterData: (state, action) => {
    const user = {
      id: action.payload.id,
      username:action.payload.username,
      email: action.payload.email,
      first_name: action.payload.first_name,
      last_name: action.payload.last_name,
      phone_number: action.payload.phone_number,
      
      isMaster: true,
    };
   

    return {
      ...state,user,
    };
},
 
},
});

// this is for dispatch
export const { setToken,studentData,masterData,removeToken } = AuthSlice.actions;

// this is for configureStore
export default AuthSlice.reducer;