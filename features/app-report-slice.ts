import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { IAppReportInitialState, IPhoneReportPayload } from 'models/app-report';
import appReportApi from './services/app-report-api';

const APP_REPORT = 'appReport';
export const GET_LIST_APP_REPORT = 'GET_LIST_APP_REPORT';

export const getAppReportList = createAsyncThunk(
  GET_LIST_APP_REPORT,
  async (payload: IPhoneReportPayload, { rejectWithValue }) => {
    try {
      const response = await appReportApi.getListAppReport(payload);
      return response.data;
    } catch (err: any) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);

const initialState: IAppReportInitialState = {
  appReportList: [],
  loading: false,
  error: false,
};

const appReportSlice = createSlice({
  name: APP_REPORT,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAppReportList.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAppReportList.fulfilled, (state, { payload }) => {
        state.appReportList = payload.data;
        state.loading = false;
      })
      .addCase(getAppReportList.rejected, (state, error) => {
        state.loading = false;
        state.error = true;
      });
  },
});

const { reducer, actions } = appReportSlice;
export const selectAppReport = (state: RootState) => state.appReport;
export default reducer;
