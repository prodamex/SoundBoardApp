import React, {useState, useEffect} from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { removeLibrary } from "./librarySlice";
import { Audio } from "expo-av";

const requiredSound = [
    require("../../assets/sounds/bra.wav"),
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
];

const LibraryPad = ({ id, name, uri, type }) => {
  const [sound, setSound] = useState();
  const dispatch = useDispatch();

  const remove = () => {
    dispatch(removeLibrary(id));
  };

  async function playSound() {
    console.log("Loading Sound");
    console.log(uri);
    console.log(type);
    const { sound } = await Audio.Sound.createAsync(type == "require" ? requiredSound[id - 1] : {uri:uri});
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <View style={styles.result}>
      <Text style={styles.heading}>{name}</Text>
      <Button color="#3a00c4"style={styles.play} title="Play" onPress={playSound} />
      <Button color="#967bd2" style={styles.x} title="X" onPress={remove} />
    </View>
  );
};
const styles = StyleSheet.create({
  result: {
    flex: 1,
    width: "100%",
    marginBottom: 20,
    
    
  },
  heading: {
    color: "#FFF",
    backgroundColor: "#967bd2",
    padding: 20,
    fontSize: 18,
    fontWeight: "700",
  },
  play:{
    color: "#967bd2",
  },
  x:{
    backgroundColor: "#967bd2",
  }
});

export default LibraryPad;
