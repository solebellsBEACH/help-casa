import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';

export interface Service {
    id: number;
    name: string;
    description: string;
    price: number;
}

export interface ServicesState {
    loading: boolean;
    error: string | null;
    data: Service[];
}

const initialState: ServicesState = {
    loading: false,
    error: null,
    data: [
        { "id": 1, "name": "Manutenção", "description": "Serviço de manutenção geral", price: 0.4 },
        { "id": 2, "name": "Limpeza", "description": "Serviço de limpeza profissional", price: 10.4 },
        { "id": 3, "name": "Consultoria", "description": "Consultoria técnica especializada", price: 10.4 },
        { "id": 1, "name": "Manutenção", "description": "Serviço de manutenção geral", price: 0.4 },
        { "id": 2, "name": "Limpeza", "description": "Serviço de limpeza profissional", price: 10.4 },
        { "id": 3, "name": "Consultoria", "description": "Consultoria técnica especializada", price: 10.4 },
        { "id": 1, "name": "Manutenção", "description": "Serviço de manutenção geral", price: 0.4 },
        { "id": 2, "name": "Limpeza", "description": "Serviço de limpeza profissional", price: 10.4 },
        { "id": 3, "name": "Consultoria", "description": "Consultoria técnica especializada", price: 10.4 },
    ],
};

// Thunk para buscar serviços (simulação de chamada assíncrona)
export const fetchServices = createAsyncThunk<Service[], void, { rejectValue: string }>(
    'services/fetchServices',
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch('/api/services'); // Substitua pela URL da sua API
            if (!response.ok) {
                throw new Error('Erro ao buscar serviços');
            }
            return await response.json();
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

const servicesSlice = createSlice({
    name: 'services',
    initialState,
    reducers: {
        clearError: (state) => {
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchServices.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchServices.fulfilled, (state, action: PayloadAction<Service[]>) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchServices.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || 'Erro desconhecido';
            });
    },
});

export const { clearError } = servicesSlice.actions;

// Selectores
export const selectServicesLoading = (state: RootState) => state.services.loading;
export const selectServicesError = (state: RootState) => state.services.error;
export const selectServicesData = (state: RootState) => state.services.data;

export const selectServicesState = (state: RootState) => state.services;

export default servicesSlice.reducer;
