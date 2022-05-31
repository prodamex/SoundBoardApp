import { v4 as uuidv4 } from 'uuid';
function data() {
  return [
    {
      cover: 
        "https://ak.picdn.net/shutterstock/videos/1025943683/thumb/2.jpg",
      audio: "./samples/clap_1.wav",
      id: uuidv4(),
      active: true,
    },
    {
        cover:
          "https://thumbs.dreamstime.com/b/clap-hands-colored-line-icon-simple-yellow-brown-element-illustration-clap-hands-concept-outline-symbol-design-emoji-clap-128886962.jpg",
        audio: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/Yodel_Sound_Effect.mp3",
        id: uuidv4(),
        active: true,
      },
    //ADD MORE HERE
  ];
}

export default data;