import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    loading: true,
}


//it takes two paramater: one is for initializing and the 2nd one is to define the conditions
export const userReducer = createReducer(initialState,{
    GET_USER_REQUEST: (state)=>{
        state.loading = true
    },
    GET_USER_SUCCESS:(state,action)=>{
        state.loading = false
        state.user = action.payload

        //payload = user's data
    },
    GET_USER_FAILURE:(state,action)=>{
        state.loading = false
        state.error = action.payload
    },

    CLEAR_ERRORS: (state)=>{
        state.error = null
    },
})


export const loginReducer = createReducer({},{
    LOGIN_REQUEST: (state)=>{
        state.loading = true
        state.isAuthenticated = false
    },
    LOGIN_SUCCESS:(state,action)=>{
        state.loading = false
        state.isAuthenticated = true
        state.message = action.payload

    },
    LOGIN_FAILURE:(state,action)=>{
        state.isAuthenticated = false
        state.loading = false
        state.error = action.payload

    },

    LOAD_USER_REQUEST: (state)=>{
        state.loading = true
        state.isAuthenticated = false
    },
    LOAD_USER_SUCCESS:(state,action)=>{
        state.loading = false
        state.isAuthenticated = true
        state.user = action.payload

    },
    LOAD_USER_FAILURE:(state,action)=>{
        state.isAuthenticated = false
        state.loading = false
        state.error = action.payload

    },

    LOGOUT_REQUEST: (state)=>{
        state.loading = true
    },
    LOGOUT_SUCCESS:(state,action)=>{
        state.loading = false
        state.isAuthenticated = false
        state.user = null
        //if there is any user present make it null
        state.message = action.payload

    },
    LOGOUT_FAILURE:(state,action)=>{
        state.loading = false
        state.isAuthenticated = true
        state.error = action.payload

    },
    CLEAR_ERRORS: (state)=>{
        state.error = null
    },
    CLEAR_MESSAGE: (state)=>{
        state.message = null
    },
    
})


export const updateReducer = createReducer({},{
    UPDATE_USER_REQUEST: (state)=>{
        state.loading = true
    },
    UPDATE_USER_SUCCESS:(state,action)=>{
        state.loading = false
        state.message = action.payload

        //payload = user's data
    },
    UPDATE_USER_FAILURE:(state,action)=>{
        state.loading = false
        state.error = action.payload
    },

    ADD_TIMELINE_REQUEST: (state)=>{
        state.loading = true
    },
    ADD_TIMELINE_SUCCESS:(state,action)=>{
        state.loading = false
        state.message = action.payload

        //payload = user's data
    },
    ADD_TIMELINE_FAILURE:(state,action)=>{
        state.loading = false
        state.error = action.payload
    },
    DELETE_TIMELINE_REQUEST: (state)=>{
        state.loading = true
    },
    DELETE_TIMELINE_SUCCESS:(state,action)=>{
        state.loading = false
        state.message = action.payload

        //payload = user's data
    },
    DELETE_TIMELINE_FAILURE:(state,action)=>{
        state.loading = false
        state.error = action.payload
    },

    CLEAR_ERRORS: (state)=>{
        state.error = null
    },
    CLEAR_MESSAGE: (state)=>{
        state.message = null
    },
    
    ADD_PROJECT_REQUEST: (state) => {
      state.loading = true;
    },
    ADD_PROJECT_SUCCESS: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    ADD_PROJECT_FAILURE: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    DELETE_PROJECT_REQUEST: (state) => {
      state.loading = true;
    },
    DELETE_PROJECT_SUCCESS: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    DELETE_PROJECT_FAILURE: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    CONTACT_US_REQUEST: (state) => {
      state.loading = true;
    },
    CONTACT_US_SUCCESS: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    CONTACT_US_FAILURE: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    
    
})
