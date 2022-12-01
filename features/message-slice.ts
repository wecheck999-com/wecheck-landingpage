import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { IMessageInitialState, IMessagePayload } from 'models/message';
import messageApi from './services/message-api';

const MESSAGE= 'message';
export const GET_LIST_MESSAGE = 'GET_LIST_MESSAGE';

export const getMessageList = createAsyncThunk(
  GET_LIST_MESSAGE,
  async (payload: IMessagePayload, { rejectWithValue }) => {
    try {
      const response = await messageApi.getListMessages(payload);
      return response.data;
    } catch (err: any) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);

const initialState: IMessageInitialState = {
  messageList: [],
  loading: false,
  error: false,
};

const messageSlice = createSlice({
  name: MESSAGE,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMessageList.pending, (state) => {
        state.loading = true;
      })
      .addCase(getMessageList.fulfilled, (state, { payload }) => {
        state.messageList = payload.data;
        state.loading = false;
      })
      .addCase(getMessageList.rejected, (state, error) => {
        state.loading = false;
        state.error = true;
      });
  },
});

const { reducer, actions } = messageSlice;
export const selectMessage = (state: RootState) => state.message;
export default reducer;
