import { v4 as uuidv4 } from 'uuid';
function data() {
  return [
    {
      cover:
        "https://avatars.slack-edge.com/2017-02-16/141907577648_f5409e64ce3b77854d6a_512.png",
      audio: "./samples/clap_1.wav",
      id: uuidv4(),
      active: true,
    },
    {
        cover:
          "https://images.emojiterra.com/twitter/512px/1f44f.png",
        audio: "./samples/clap_2.wav",
        id: uuidv4(),
        active: true,
      },
    //ADD MORE HERE
  ];
}

export default data;