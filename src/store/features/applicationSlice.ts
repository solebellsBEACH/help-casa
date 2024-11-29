import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IRootState } from '..';

export interface ApplicationState {
  loading: boolean;
  error: string | null;
  theme: 'light' | 'dark';
  language: string; // Exemplo: "en", "pt-BR"
  data: any;
}

const initialState: ApplicationState = {
  loading: false,
  error: null,
  data: {},
  theme: 'light',
  language: 'en',
};

const applicationSlice = createSlice({
  name: 'application',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    setTheme: (state, action: PayloadAction<'light' | 'dark'>) => {
      state.theme = action.payload;
    },
    setLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
    },
    setData: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
    },
  },
});

export const { setLoading, setError, setTheme, setLanguage, setData } = applicationSlice.actions;

// Selectores para acessar partes do estado
export const selectLoading = (state: IRootState) => state.application.loading;
export const selectError = (state: IRootState) => state.application.error;
export const selectTheme = (state: IRootState) => state.application.theme;
export const selectLanguage = (state: IRootState) => state.application.language;
export const selectData = (state: IRootState) => state.application.data;

export default applicationSlice.reducer;
