import { Action, configureStore, ThunkAction  } from "@reduxjs/toolkit";
import phoneReportSlice from 'features/phone-report-slice';
import appReportSlice from 'features/app-report-slice';
import messageSlice from 'features/message-slice';
import { createWrapper } from "next-redux-wrapper";

const rootReducer = {
    phoneReport:phoneReportSlice,
    appReport:appReportSlice,
    message:messageSlice
}

const makeStore = () =>store

export const store = configureStore({
    reducer: rootReducer
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState,unknown,Action<string>>;
export type AppStore = ReturnType<typeof makeStore>;

export const wrapper = createWrapper<AppStore>(makeStore);
