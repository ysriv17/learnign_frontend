import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: {
        firstName: '',
        lastName: '',
        sub: '',
        userName: '',
        email: '',
    },
    token: null,
    isAuthenticated: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.user = {
                firstName: action.payload.user.firstName || '',
                lastName: action.payload.user.lastName || '',
                sub: action.payload.user.sub || '',
                userName: action.payload.user.userName || '',
                email: action.payload.user.email || '',
            };
            state.token = action.payload.token;
            state.isAuthenticated = true;
        },
        logout: (state) => {
            state.user = {
                firstName: '',
                lastName: '',
                sub: '',
                userName: '',
                email: '',
            };
            state.token = null;
            state.isAuthenticated = false;
        },
        updateUser: (state, action) => {
            const updatedFields = action.payload;
            state.user = {
                ...state.user,
                ...updatedFields,
            };
        },
    },
});

export const { loginSuccess, logout, updateUser } = authSlice.actions;
export default authSlice.reducer;






// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//     user: null,
//     token: null,
//     isAuthenticated: false,
// };

// const authSlice = createSlice({
//     name: 'auth',
//     initialState,
//     reducers: {
//         loginSuccess: (state, action) => {
//             state.user = action.payload.user;
//             state.token = action.payload.token;
//             state.isAuthenticated = true;
//         },
//         logout: (state) => {
//             state.user = null;
//             state.token = null;
//             state.isAuthenticated = false;
//         },
//     },
// });

// export const { loginSuccess, logout } = authSlice.actions;
// export default authSlice.reducer;