import { configureStore } from '@reduxjs/toolkit';
import applicationReducer, { ApplicationState } from './features/applicationSlice';
import servicesReducer, { ServicesState } from './features/servicesSlice';

const store = configureStore({
  reducer: {
    application: applicationReducer,
    services: servicesReducer
  },
});
export interface IRootState {
  application: ApplicationState,
  services: ServicesState
}


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
