import React, { useState, useEffect } from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { editSampler } from "./samplerSlice";
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
 
];

const EditPad = ({ id, item, navigation}) => {
  const [sound, setSound] = useState();

  const dispatch = useDispatch();

  const edit = () => {
    dispatch(editSampler({id: id, item:item}));
    navigation.pop();
  };


  async function playSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(requiredSound[id - 1]);
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
      <Text style={styles.heading}>{item.name}</Text>
      <Button color="#967bd2"
       onPress={edit}
        title="Choisir ce son"
        ></Button>
    </View>
  );
};
const styles = StyleSheet.create({
  result: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fffff",
    flex: 1,
    paddingTop: 30,
    width: "100%",
  },
  heading: {
    color: "#FFF",
    backgroundColor: "#445565",
    padding: 20,
    fontSize: 18,
    fontWeight: "700",
  },
});

export default EditPad;
