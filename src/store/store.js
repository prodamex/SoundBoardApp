import { configureStore } from "@reduxjs/toolkit";
import libraryReducer from "../components/librarySlice";
import samplerReducer from "../components/SamplerSlice";

export default configureStore({
  reducer: {
    library: libraryReducer,
    sampler: samplerReducer
  },
});
