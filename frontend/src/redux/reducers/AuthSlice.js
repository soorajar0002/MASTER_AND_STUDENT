import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'token',
  initialState: [],
  reducers: {
    setToken: (state, action) => {
        const token = {
         
            access_token:action.payload.access,
            refresh_token:action.payload.refresh,
        };
        console.log("store",token)
      
        // return a new data
        return {...state, token};
      },
      removeToken: (state) => {
        // Remove the token from the state
        return {
          ...state,
          token: null,
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
    console.log("master",user)

    return {
      ...state,user,
    };
},
 
},
});

// this is for dispatch
export const { setToken,studentData,masterData,removeToken } = userSlice.actions;

// this is for configureStore
export default userSlice.reducer;