import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "app/store";

import { IPayloadReportPhoneNumber, IPhoneReportInitialState, ISearchPhonePayload, ISearchPhoneCommentPayload, IPayloadComment } from 'models/phone-report';
import phoneReportApi from "./services/phone-report-api";

const SLICE_NAME = 'phoneReport';
export const GET_LIST_PHONE_REPORT = 'GET_LIST_PHONE_REPORT';
export const GET_SEARCH_PHONE_REPORT = 'GET_SEARCH_PHONE_REPORT';
export const UPDATE_PHONE_SEARCH = 'UPDATE_PHONE_SEARCH';
export const GET_DETAIL_PHONE_NUMBER = 'GET_DETAIL_PHONE_NUMBER';
export const GET_CHART_PHONE_NUMBER = 'GET_CHART_PHONE_NUMBER';
export const CREATE_CHART_PHONE_NUMBER = 'CREATE_CHART_PHONE_NUMBER';
export const GET_LIST_COMMENT_PHONE = 'GET_LIST_COMMENT_PHONE';
export const CREATE_COMMENT_PHONE = 'CREATE_COMMENT_PHONE';


export const getPhoneReportList = createAsyncThunk(GET_LIST_PHONE_REPORT, async (payload: ISearchPhonePayload, { rejectWithValue }) => {
   
    try {
        const response = await phoneReportApi.getListPhoneReport(payload)
        return response.data
    } catch (err: any) {
        if (!err.response) {
            throw err
        }
        return rejectWithValue(err.response.data)
    }
});
export const getSearchReportList = createAsyncThunk(GET_SEARCH_PHONE_REPORT, async (payload: ISearchPhonePayload, { rejectWithValue }) => {
    try {
        const response = await phoneReportApi.getSearchPhoneNumber(payload)
        return response.data
    } catch (err: any) {
        if (!err.response) {
            throw err
        }
        return rejectWithValue(err.response.data)
    }
});

export const updatePhoneSearch = createAsyncThunk(UPDATE_PHONE_SEARCH, async (payload: any, { rejectWithValue }) => {
    try {
        const response = await phoneReportApi.updatePhoneSearch(payload)
        return response.data
    } catch (err: any) {
        if (!err.response) {
            throw err
        }
        return rejectWithValue(err.response.data)
    }
})
export const getChartPhoneNumber = createAsyncThunk(GET_CHART_PHONE_NUMBER, async (payload: any, { rejectWithValue }) => {
    try {
        const response = await phoneReportApi.getCharPhoneNumber(payload)
        return response.data
    } catch (err: any) {
        if (!err.response) {
            throw err
        }
        return rejectWithValue(err.response.data)
    }
})

export const getDetailPhoneNumber = createAsyncThunk(GET_DETAIL_PHONE_NUMBER, async (payload: any, { rejectWithValue }) => {
    try {
        const response = await phoneReportApi.getDetailPhoneNumber(payload)
        return response.data
    } catch (err: any) {
        if (!err.response) {
            throw err
        }
        return rejectWithValue(err.response.data)
    }
})
export const createChartPhoneNumber = createAsyncThunk(CREATE_CHART_PHONE_NUMBER, async (payload: IPayloadReportPhoneNumber, { rejectWithValue }) => {
    try {
        const response = await phoneReportApi.createChartPhoneNumber(payload)
        return response.data
    } catch (err: any) {
        if (!err.response) {
            throw err
        }
        return rejectWithValue(err.response.data)
    }
})
export const getListCommentPhone = createAsyncThunk(GET_LIST_COMMENT_PHONE, async (payload: ISearchPhoneCommentPayload, { rejectWithValue }) => {
    try {
        const response = await phoneReportApi.getListCommentPhone(payload)
        return response.data.data
    } catch (err: any) {
        if (!err.response) {
            throw err
        }
        return rejectWithValue(err.response.data)
    }
})
export const createCommentPhone = createAsyncThunk(CREATE_COMMENT_PHONE, async (payload: IPayloadComment, { rejectWithValue }) => {
    try {
        const response = await phoneReportApi.createCommentPhone(payload)
        return response.data.data
    } catch (err: any) {
        if (!err.response) {
            throw err
        }
        return rejectWithValue(err.response.data)
    }
})
const initialState: IPhoneReportInitialState = {
    phoneReportList: [],
    phoneCommentList: [],
    loading: false,
    loadingCreateChart: false,
    error: false, 
    phoneDetailList : [],
    loadingCreateCommentPhone:false
}

const phoneReportSlice = createSlice({
    name:SLICE_NAME,
    initialState,
    reducers:{},
    extraReducers: builder => {
        builder
        .addCase(getPhoneReportList.pending, state => {
            state.loading = true;
        })
        .addCase(getPhoneReportList.fulfilled, (state, { payload }) => {
            state.phoneReportList = payload.data;
            state.loading = false;
        })
        .addCase(getPhoneReportList.rejected, (state, error) => {
            state.loading = false;
            state.error = true;
        })
        .addCase(getSearchReportList.pending, state => {
            state.loading = true;
        })
        .addCase(getSearchReportList.fulfilled, (state, { payload }) => {
            state.phoneReportList = payload;
            state.loading = false;
        })
        .addCase(getSearchReportList.rejected, (state, error) => {
            state.loading = false;
            state.error = true;
        })
        .addCase(updatePhoneSearch.pending, state => {
            // state.loading = true;
        })
        .addCase(updatePhoneSearch.fulfilled, (state, { payload }) => {
            state.loading = false;
        })
        .addCase(updatePhoneSearch.rejected, (state, error) => {
            state.loading = false;
            state.error = true;
        })
        .addCase(getChartPhoneNumber.pending, state => {
            state.loading = true;
        })
        .addCase(getChartPhoneNumber.fulfilled, (state, { payload }) => {
            state.loading = false;
        })
        .addCase(getChartPhoneNumber.rejected, (state, error) => {
            state.loading = false;
            state.error = true;
        })
        .addCase(getDetailPhoneNumber.pending, state => {
            state.loading = true;
        })
        .addCase(getDetailPhoneNumber.fulfilled, (state, { payload }) => {
            state.phoneDetailList = payload;
            state.loading = false;
        })
        .addCase(getDetailPhoneNumber.rejected, (state, error) => {
            state.loading = false;
            state.error = true;
        })
        .addCase(createChartPhoneNumber.pending, state => {
            state.loadingCreateChart = true;
        })
        .addCase(createChartPhoneNumber.fulfilled, (state, { payload }) => {
            state.loadingCreateChart = false;
        })
        .addCase(createChartPhoneNumber.rejected, (state, error) => {
            state.loadingCreateChart = false;
            state.error = true;
        })
        .addCase(getListCommentPhone.pending, state => {
            state.loading = true;
        })
        .addCase(getListCommentPhone.fulfilled, (state, { payload }) => {
            state.phoneCommentList = payload
            state.loading = false;
        })
        .addCase(getListCommentPhone.rejected, (state, error) => {
            state.loading = false;
            state.error = true;
        })
        .addCase(createCommentPhone.pending, state => {
            state.loadingCreateCommentPhone = true;
        })
        .addCase(createCommentPhone.fulfilled, (state, { payload }) => {
            state.loadingCreateCommentPhone = false;
        })
        .addCase(createCommentPhone.rejected, (state, error) => {
            state.loadingCreateCommentPhone = false;
            state.error = true;
        })
    }
});

const { reducer, actions } = phoneReportSlice;
export const selectPhoneReport = (state: RootState) => state.phoneReport;
export default reducer;