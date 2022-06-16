import { createSlice } from "@reduxjs/toolkit";

export const librarySlice = createSlice({
  name: "library",
  initialState: [
    { id: 1, name: "Clap 1", uri: "clap_1.wav", type: "require"},
    { id: 2, name: "Clap 2", uri: "clap_2.wav", type: "require"},
    { id: 3, name: "Fx 1", uri: "fx_1.wav", type: "require"},
    { id: 4, name: "Fx 2", uri: "fx_2.wav", type: "require"},
    { id: 5, name: "Kick 1", uri: "kick_1.wav", type: "require"},
    { id: 6, name: "Kick 2", uri: "kick_2.wav", type: "require"},
    { id: 7, name: "Shaker 1", uri: "shaker_1.wav", type: "require"},
    { id: 8, name: "Shaker 2", uri: "shaker_2.wav", type: "require"},
    { id: 9, name: "Shaker 3",uri: "shaker_3.wav", type: "require"},
    { id: 10, name: "Snare 1",uri: "snare_1.wav", type: "require"},
    { id: 11, name: "Snare 2", uri: "snare_2.wav", type: "require"},
    { id: 12, name: "Tom 1", uri: "tom_1.wav", type: "require"},
    { id: 13, name: "Tom 2",uri: "tom_2.wav", type: "require"},
    { id: 14, name: "Tom 3", uri: "tom_3.wav", type: "require"},
    { id: 15, name: "Tom 4",uri: "tom_4.wav", type: "require"},
    
  ],
  reducers: {
    addLibrary: (state, action) => {
      let id = state.length ? state[state.length - 1].id + 1 : 0;
      return [
        ...state,
        {
          id: id,
          name: action.payload.name,
          uri: action.payload.uri,
          type: action.payload.type,
        },
      ];
    },
    removeLibrary: (state, action) => {
      return state.filter((item) => item.id != action.payload);
    },
  },
});

export const { addLibrary, removeLibrary } = librarySlice.actions;
export const librarySelector = (state) => state.library;
export default librarySlice.reducer;
