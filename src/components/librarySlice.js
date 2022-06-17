import { createSlice } from "@reduxjs/toolkit";

export const librarySlice = createSlice({
  name: "library",
  initialState: [
    { id: 1, name: "Bra", uri: "kick1.wav", type: "require", color: "#800000" },
    { id: 2, name: "Clap 1", uri: "kick2.wav", type: "require", color: "#cc0000" },
    { id: 3, name: "Clap 2", uri: "kick3.wav", type: "require", color: "#ff0000" },
    { id: 4, name: "Fx 1", uri: "kick4.wav", type: "require", color: "#ff5050" },
    { id: 5, name: "Fx 2", uri: "snare1.wav", type: "require", color: "#cc6600" },
    { id: 6, name: "Kick 1", uri: "snare2.wav", type: "require", color: "#ff9900" },
    { id: 7, name: "Kick 2", uri: "snare3.wav", type: "require", color: "#ffcc66" },
    { id: 8, name: "Shaker 1", uri: "snare4.wav", type: "require", color: "#ccff33" },
    { id: 9, name: "Shaker 2", uri: "cymbals1.wav", type: "require", color: "#009900" },
    { id: 10, name: "Shaker 3", uri: "cymbals2.wav", type: "require", color: "#33cc33" },
    { id: 11, name: "Snare 1", uri: "hihat1.wav", type: "require", color: "#00cc66" },
    { id: 12, name: "Snare 2", uri: "hihat2.wav", type: "require", color: "#009999" },
    { id: 13, name: "Tom 1", uri: "clap1.wav", type: "require", color: "#0033cc" },
    { id: 14, name: "Tom 2", uri: "clap2.wav", type: "require", color: "#0066ff" },
    { id: 15, name: "Tom 3", uri: "synth1.wav", type: "require", color: "#6666ff" },
    { id: 16, name: "Tom 4", uri: "synth2.wav", type: "require", color: "#9966ff" },
    
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
