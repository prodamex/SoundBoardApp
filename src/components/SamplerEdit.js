import React from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { librarySelector } from "./librarySlice";
import EditPad from "./EditPad";
import { samplerSelector } from "./SamplerSlice";

export default function SamplerEdit ({ route, navigation, item }) {
  const library = useSelector(librarySelector);
  const name = route.params.name;
  return (
    <View style={styles.container}>
      <Text style={styles.title}> What you choised : {name} </Text>
      <FlatList
        numColumns={1}
        renderItem={({ item }) => (
          <EditPad id={route.params.id} item={item} navigation={navigation}></EditPad>
        )}
        keyExtractor={(item) => item.id.toString()}
        data={library}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    flex: 1,
    paddingTop: 30,
  },
  title: {
    color: "#00000",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 20,
  },
  choice: {
    margin: 10,
    backgroundColor: "#445565",
  },
  choiceText: {
    color: "#FFF",

    padding: 20,
    fontSize: 14,
    fontWeight: "700",
  },
});

