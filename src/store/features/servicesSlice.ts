import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { IRootState } from '..';
import { apiInstance } from '@/pages/shared/api/axios';
import { ServiceService } from '@/pages/shared/services/service.service';
import { Service } from '@/pages/shared/entities/Service';

export interface ServicesState {
    loading: boolean;
    error: string | null;
    data: Service[];
}

const initialState: ServicesState = {
    loading: false,
    error: null,
    data: [],
};

export const fetchServices = createAsyncThunk<any[], string | undefined, { rejectValue: string }>(
    'services/fetchServices',
    async (search, { rejectWithValue }) => {
        try {
            const services = search ? await ServiceService.getServicesByName(search) : await ServiceService.getAllServices()
            return services;
        } catch (error: any) {
            return rejectWithValue(error.message || 'Erro desconhecido');
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
        console.log(fetchServices.pending)
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
export const selectServicesLoading = (state: IRootState) => state.services.loading;
export const selectServicesError = (state: IRootState) => state.services.error;
export const selectServicesData = (state: IRootState) => state.services.data;
export const selectServicesState = (state: IRootState) => state.services;

export default servicesSlice.reducer;
