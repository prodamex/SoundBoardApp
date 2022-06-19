import { configureStore, combineReducers } from "@reduxjs/toolkit";
import libraryReducer from "../components/librarySlice";
import samplerReducer from "../components/SamplerSlice";
import thunk from 'redux-thunk';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';



const allReducers = combineReducers({
  library: libraryReducer,
    sampler: samplerReducer
});

const persistance = {
  key: "root",
  storage: AsyncStorage,
};

const Reducer = persistReducer(persistance, allReducers);


const store = configureStore ({
  
  reducer: Reducer,
  middleware: [thunk],
})


export default store;