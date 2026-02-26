import {
  configureStore,
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import { fetchOfferAPI } from "../api/fakeApi";
import cartReducer from "./cartSlice";
export const fetchOffer = createAsyncThunk("offer/fetchOffer", async () => {
  const data = await fetchOfferAPI();
  return data;
});

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    cartCount: 0,
    wishlistCount: 0,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchOffer.fulfilled, (state, action) => {
      state.cartCount = action.payload.cartCount;
      state.wishlistCount = action.payload.wishlistCount;
    });
  },
});

const countdownSlice = createSlice({
  name: "countdown",
  initialState: {
    offerName: "",
    endTime: null,
    timeLeft: null,
  },
  reducers: {
    updateTime: (state) => {
      if (!state.endTime) return;

      const difference = state.endTime - new Date().getTime();

      if (difference <= 0) {
        state.timeLeft = null;
        return;
      }

      state.timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchOffer.fulfilled, (state, action) => {
      state.offerName = action.payload.offerName;
      state.endTime = new Date(action.payload.endDate).getTime();
    });
  },
});

export const { updateTime } = countdownSlice.actions;

export const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    countdown: countdownSlice.reducer,
    cart: cartReducer,
  },
});
