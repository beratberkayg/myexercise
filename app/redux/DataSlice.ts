import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface DataState {
  isim: string;
  soyisim: string;
}

interface InitialState {
  data: DataState[];
}

const initialState: InitialState = {
  data: [],
};

export const DataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    kullanıcıEkle: (state, action: PayloadAction<DataState>) => {
      state.data.push(action.payload);
    },
  },
});

export const { kullanıcıEkle } = DataSlice.actions;

export default DataSlice.reducer;
