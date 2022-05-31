import React, {useState} from 'react';

import { StyleSheet, Text, View } from 'react-native';
import data from "./data";
import Pad from './Pad';




export default function Sampler() {

  // states
  const [songs,setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[1]);

  //functions

  
  return (
    <View style={styles.library}>
      <Text>Vue</Text>
        <View style={styles.libraryPads}>
            {songs.map(song => 
            <Pad key={song.id} song={song}/>
            )}
        </View>
        
    </View>
  );
}

const styles = StyleSheet.create({
  library: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  libraryPads:{
      
  }
});
