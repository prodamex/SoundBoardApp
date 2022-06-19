import React from "react";
import { Button, FlatList, View, StyleSheet, Text } from "react-native";
import { useSelector } from "react-redux";
import { librarySelector } from "./librarySlice";
import { createStackNavigator } from "@react-navigation/stack";
import LibraryPad from "./LibraryPad";

const LibraryView = ({ route, navigation }) => {
  const pads = useSelector(librarySelector);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Library</Text>
      <FlatList style={styles.flatlist}
      numColumns={3}
        renderItem={({ item }) => <LibraryPad {...item} />}
        keyExtractor={(item) => item.id.toString()}
        data={pads}
      />
      <View style={styles.button}><Button
        title="Record a new sound"
        
        color="#967bd2"
        
        onPress={() => {
          navigation.navigate("Record", {});
        }}
      ></Button></View>
      <View style={styles.button2}><Button
        title="Search a sound on web"
        
        color="#967bd2"
        
        onPress={() => {
          navigation.navigate("Search", {});
        }}
      ></Button></View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fffff",
    flex: 1,
    paddingTop: 30,
    width: "100%",
  },
  title: {
    color: "#967bd2",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 20,
  },
  button:{
  marginTop:"20px",
  },
  button:{
  marginTop:"20px",
  },
  button2:{
    marginTop:"5px",

    marginBottom:"20px",
    }
});

export default LibraryView;
