import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import SamplerPad from "./SamplerPad";
import { samplerSelector } from "./samplerSlice";

export default function SamplerView ({ route, navigation }) {
  const sampler = useSelector(samplerSelector);
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={4}
        renderItem={({ item }) => <SamplerPad navigation={navigation} {...item} />}
        keyExtractor={(item) => item.id.toString()}
        data={sampler}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: "#ffffff",
        flex: 1,
        paddingTop:30
        },
    title: {
      color: "#FFF",
      fontSize: 32,
      fontWeight: "700",
      textAlign: "center",
      marginBottom: 20,
    },
  });

