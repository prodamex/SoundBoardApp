import React, {useState, useEffect} from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity} from 'react-native';
import { Audio } from 'expo-av';


const Sampler = ({currentSong, songs}) => {
    
    const [sound, setSound] = useState();

    async function playSound() {
        
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(
            
           require('../samples/clap_2.wav')

        );
        setSound(sound);
    
        console.log('Playing Sound');
        await sound.playAsync(); }
    
      useEffect(() => {
        return sound
          ? () => {
              console.log('Unloading Sound');
              sound.unloadAsync(); }
          : undefined;
      }, [sound]);

    return(

    <View style ={styles.container}>


        <TouchableOpacity onPress={playSound}>
            <ImageBackground source={{uri:currentSong.cover}}  style={styles.image}>
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
export default Sampler;