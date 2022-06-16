import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import data from "./data";
import Pad from './Pad';




export default function Sampler() {

  // states
  const [songs,setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[4]);

  //functions

  
  return (
    <View style={styles.library}>
      <Text style={styles.title}>The Sampler</Text>
        <View style={styles.libraryPads}>
{/* on utilise .map pour afficher tous les pads qui existe dans le fichier data.js */} 
            {songs.map(song => 
            <Pad key={song.id} song={song}/>
            )}
        </View>
        
    </View>
  );
}

const styles = StyleSheet.create({
  library: {
    marginTop:75,
    backgroundColor: '#fff',
    width:'100%',
    height:'50%'
  },
  libraryPads:{
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: 'center',
    justifyContent:'center',

  },
  title:{
    marginLeft:30,
    color: '#BA91FC',
    fontSize: 24,
    marginBottom:5,

},
});
