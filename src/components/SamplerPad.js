import React from "react";
import { Button, Text, View, TouchableHighlight } from "react-native";
import { useDispatch } from "react-redux";
import { removeSampler } from "./samplerSlice";
import { Audio } from "expo-av";


const requiredSound = [
    require("../../assets/sounds/clap_1.wav"),
    require("../../assets/sounds/clap_2.wav"),
    require("../../assets/sounds/fx_1.wav"),
    require("../../assets/sounds/fx_2.wav"),
    require("../../assets/sounds/kick_1.wav"),
    require("../../assets/sounds/kick_2.wav"),
    require("../../assets/sounds/shaker_1.wav"),
    require("../../assets/sounds/shaker_2.wav"),
    require("../../assets/sounds/shaker_3.wav"),
    require("../../assets/sounds/snare_1.wav"),
    require("../../assets/sounds/snare_2.wav"),
    require("../../assets/sounds/tom_1.wav"),
    require("../../assets/sounds/tom_2.wav"),
    require("../../assets/sounds/tom_3.wav"),
    require("../../assets/sounds/tom_4.wav"),
]

const SamplerPad = ({ id, name, type, uri, color, navigation }) => {
  const [sound, setSound] = React.useState();
  async function playSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(type == "require" ? requiredSound[id - 1] : {uri:uri});
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <View style={{ margin: 20 }}>
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        onPress={playSound}
        onLongPress={() => {
          navigation.navigate("Edit", {
            id: id,
            name: name
          });
        }}
      >
        <View style={{ backgroundColor: color, height: 50, width: 50 }} />
      </TouchableHighlight>
    </View>
  );
};

export default SamplerPad;
