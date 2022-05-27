import React, {useState} from 'react';

import { StyleSheet, Text, View } from 'react-native';
import Sampler from "./src/screens/Sampler"
import data from "./src/screens/data"




export default function App() {

  // states
  const [songs,setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[1]);

  //functions

  
  return (
    <View style={styles.container}>
      <Sampler currentSong={currentSong} songs={songs}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
