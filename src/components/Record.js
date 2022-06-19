import React, { useState, useEffect } from "react";
import { Text, Button, View, StyleSheet, TextInput } from "react-native";
import { useDispatch } from "react-redux";
import { Audio } from "expo-av";
import { addLibrary } from "../components/librarySlice";

const Record = ({ route, navigation }) => {
  const [recording, setRecording] = useState();
  const [uri, setUri] = useState();
  const [sound, setSound] = useState();
  const [state, setState] = useState({samplee: ""});
  const dispatch = useDispatch();

  const add = () => {
    
    dispatch(addLibrary({ name: state.samplee, uri: uri, type: "uri" }));
    navigation.navigate("Library", {});
  };
// Async function to play sound
  async function playRecordedSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync({ uri: uri });
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

// Async function to start recording

const BeginRecording = async () => {
  try {
    console.log('Requesting permissions..');
    await Audio.requestPermissionsAsync();
    // await Audio.setAudioModeAsync({
    //   allowsRecordingIOS: true,
    //   playsInSilentModeIOS: true,
    // });
    console.log('Starting recording..');
    const { recording } = await Audio.Recording.createAsync(
      Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
    );
    setRecording(recording);
    console.log('Recording started');
  } catch (err) {
    console.error('Failed to start recording', err);
  }
}

const StopRecording = async () => {
  console.log('Stopping recording..');
  setRecording(undefined);
  await recording.stopAndUnloadAsync();
  const uri = recording.getURI();
// console log pour voir le lien de l'enregistrement
  console.log('Recording stopped and stored at', uri);
}

  return (

    //button to record
    <View style={styles.container}>
      <Button
      color="#3a19c4"
      onPress={recording ? StopRecording : BeginRecording}
      title={recording ? "Stop the recording" : "Begin the recording"}
        
      />
    {/*Component to add to library*/} 
        <View style={styles.save}>
          <Text style={styles.text}>Add to library after you stop recording</Text>
          <TextInput
          style={styles.name}
          placeholder="Choisir un nom .."
          value={state.s}
          onChangeText={(text) =>
            setState((prevState) => {
              return { ...prevState, samplee: text };
            })
          }
            
          />
          <Button color="#967bd2" title="Add to Library" onPress={state.samplee ? add : null} />
        </View>
      
        <View></View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  text:{
    color:"#ffffff",
    alignItems:"center",
    textAlign: "center"
  },
  container: {
    alignItems: "center",
    backgroundColor: "#ffffff",
    flex: 1,
    paddingTop: 30,
  },
  
  save: {
    fontSize: 20,
    fontWeight: "200",
    padding: 20,
    width: "80%",
    backgroundColor: "#3a19c4",
    marginTop: 70,
    marginBottom: 40,
  },
  name: {
    fontSize: 15,
    fontWeight: "300",
    padding: 20,
    width: "100%",
    backgroundColor: "#FFF",
    borderRadius: 8,
    marginTop: 40,
    marginBottom: 40,
  },
});

export default Record;
