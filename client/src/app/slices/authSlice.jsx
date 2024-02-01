import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createAccountApi, getSavedData, saveAllInfoApi } from '../../services/userServices';
import { saveTokens } from '../../utils/token';

const initialState = {
    Details:[],
    user:[],
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: "",
    error: ""
}

export const userData = createAsyncThunk(
    "/create-account",
    async (data) => {
        try {
            const response = await createAccountApi(data);
            console.log(response, "response")
            const accessToken = response?.data?.accessToken;
            const refreshToken = response?.data?.refreshToken;
            saveTokens(accessToken, refreshToken);
            return response.data
        } catch (error) {
            console.log(error)
            throw error.response.data.message;
        }
    }
);

export const saveAllData = createAsyncThunk(
    "/save-all-info",
    async (data) => {
        try {
            const response = await saveAllInfoApi(data);
            console.log(response)
            return response.data
        } catch (error) {
            throw error.response.data.message;
        }
    }
);


export const getSubmittedData = createAsyncThunk(
    "/get-submitted-data/:id",
    async (id) => {
        try {
            const response = await getSavedData(id);
            console.log(response)
            return response.data
        } catch (error) {
            throw error.response.data.message;
        }
    }
);



export const personalInfoSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        storeUserData: (state, action) => {
            state.user = action.payload;
            state.isSuccess = true;
        },
    },
});

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(userData.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.error = '';
            })
            .addCase(userData.fulfilled, (state, action) => {
                console.log(action, "in fulfiled")
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload;
                state.message = action?.payload?.message;
            })
            .addCase(userData.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error.message;
                state.message = action.payload;
            })
            .addCase(saveAllData.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.error = '';
            })
            .addCase(saveAllData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload;
                state.message = action?.payload?.message;
            })
            .addCase(saveAllData.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error.message;
                state.message = action.payload;
            })
            .addCase(getSubmittedData.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.error = '';
            })
            .addCase(getSubmittedData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.Details = action.payload;
                state.message = action?.payload?.message;
            })
            .addCase(getSubmittedData.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error.message;
                state.message = action.payload;
            })
    },
});

export const { storeUserData } = personalInfoSlice.actions;

export default personalInfoSlice.reducer;