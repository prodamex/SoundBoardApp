import { createSlice } from "@reduxjs/toolkit";



export const saloSlices = createSlice({
  name: "sampler",
  initialState: [
    { id: 1, name: "Bra", uri: "kick1.wav", type: "require", color: "#967bd2" },
    { id: 2, name: "Clap 1", uri: "kick2.wav", type: "require", color: "#44258e" },
    { id: 3, name: "Clap 2", uri: "kick3.wav", type: "require", color: "#967bd2" },
    { id: 4, name: "Fx 1", uri: "kick4.wav", type: "require", color: "#44258e" },
    { id: 5, name: "Fx 2", uri: "snare1.wav", type: "require", color: "#967bd2" },
    { id: 6, name: "Kick 1", uri: "snare2.wav", type: "require", color: "#44258e" },
    { id: 7, name: "Kick 2", uri: "snare3.wav", type: "require", color: "#967bd2" },
    { id: 8, name: "Shaker 1", uri: "snare4.wav", type: "require", color: "#44258e" },
    { id: 9, name: "Shaker 2", uri: "cymbals1.wav", type: "require", color: "#967bd2" },
    { id: 10, name: "Shaker 3", uri: "cymbals2.wav", type: "require", color: "#44258e" },
    { id: 11, name: "Snare 1", uri: "hihat1.wav", type: "require", color: "#967bd2" },
    { id: 12, name: "Snare 2", uri: "hihat2.wav", type: "require", color: "#44258e" },
    { id: 13, name: "Tom 1", uri: "clap1.wav", type: "require", color: "#967bd2" },
    { id: 14, name: "Tom 2", uri: "clap2.wav", type: "require", color: "#44258e" },
    { id: 15, name: "Tom 3", uri: "synth1.wav", type: "require", color: "#967bd2" },
    { id: 16, name: "Tom 4", uri: "synth2.wav", type: "require", color: "#44258e" },
  
  ],
  reducers: {
    // to add a sampler when a new one is choosed
    addSampler: (state, action) => {
      let id = state.length ? state[state.length - 1].id + 1 : 0;
      return [
        ...state,
        {
          id: id,
          assetName: action.payload,
        },
      ];
    },
  
    // remplace the music in the pad onlongpress
    editSampler: (state, action) => {
      var id = action.payload.id;
      var item = action.payload.item;
      var color = state[id-1].color;
      var Pad = {
        ...item,
        color: color
      };
      state[id-1]=Pad;
      return state;
    },
  },
});

export const { addSampler, editSampler } = saloSlices.actions;
export const samplerSelector = (state) => state.sampler;
export default saloSlices.reducer;
