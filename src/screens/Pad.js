import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity} from 'react-native';
import {Audio} from 'expo-av';


const Pad = ({currentSong, songs, song}) => {

    const playSound = async () => {
        await Audio.Sound.createAsync(
          {uri:(song.audio)},
          {shouldPlay:true}
        )
     }

    return(

    <View style ={styles.container}>

        

        <TouchableOpacity onPress={playSound}>
            <ImageBackground source={{uri:song.cover}}  style={styles.image}>
            </ImageBackground>
        </TouchableOpacity>

    </View> 
    )
}


const styles = StyleSheet.create({
    container:{
        resizeMode: "cover",
    },

    image:{
    width: 50,
    height: 50,
    padding: 10,
    borderRadius: 70,
    justifyContent: "center"

    }
})
export default Pad;