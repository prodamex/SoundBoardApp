import React, { useState, useEffect } from "react";
import {View, StyleSheet } from "react-native";
import Trimmer from 'react-native-trimmer';
import { useDispatch } from "react-redux";


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

  const dispatch = useDispatch();

  const [trimmerLeftHandlePosition, setTrimmerLeftHandlePosition] = useState('0');
  const [trimmerRightHandlePosition, setTrimmerRightHandlePosition] = useState('10000');
  
  const edit = () => {
    dispatch(editSampler({id: id, item:item}));
    navigation.pop();
  };

  const onLeftHandleChange = (newLeftHandleValue) => {
    setSound({ setTrimmerLeftHandlePosition: newLeftHandleValue })
  }
 
  const onRightHandleChange = (newRightHandleValue) => {
    setSound({ setTrimmerRightHandlePosition: newRightHandleValue })
  }

  
  return (
    
    <View>
    <Trimmer
      onHandleChange={item.onHandleChange}
      totalDuration={60000}
      trimmerLeftHandlePosition={trimmerLeftHandlePosition}
      trimmerRightHandlePosition={trimmerRightHandlePosition}
    />
    </View>
  );
};
const styles = StyleSheet.create({
  result: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fffff",
    flex: 1,
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
