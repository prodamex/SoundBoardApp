import React, { Component, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import {
  StyleSheet,
  Text,
  TextInput,
  Button,
  View,
  FlatList,
  Image,
} from "react-native";
import { addLibrary } from "../components/librarySlice";


const Search = ({ route, navigation }) => {

  
  const [uri, setUri] = useState();
  const [state, setState] = useState({
    samplee: "",
    results: [],
    selected: {},
  });
  const dispatch = useDispatch();
  

  const add = () => {
    
    dispatch(addLibrary({ name: state.samplee, uri: uri, type: "uri" }));
    navigation.navigate("Library", {});
  };

  const getMusic = () =>
    axios("https://freesound.org/apiv2/search/text/?query=piano&token=tCQu8YPpeTTck0MOBWRcELYgHeuTqgHYuk8JBMP4").then(({ data }) => {
      let results = data.results;

      setState((prevState) => {
        return { ...prevState, results: results };
      });
      console.log(state.results);
    });


  return (
    <View style={styles.container}>
      <TextInput
        style={styles.search}
        onChangeText={(text) =>
          setState((prevState) => {
            return { ...prevState, samplee: text };
          })
        }
        placeholder="Entrez un nom..."
        onSubmitEditing={getMusic}
        value={state.s}
      />

      <FlatList
        data={state.results}
        renderItem={(result) => (
          <View style={styles.result}>
            <Text style={styles.heading}> {result.item.name}</Text>
            <Button color="#967bd2" title="Add to Library" onPress={state.samplee ? add : ""}></Button>
          </View>
        )}
        keyExtractor={(result) => result.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 70,
    paddingHorizontal: 20,
  },
  search: {
    fontSize: 20,
    fontWeight: "300",
    padding: 20,
    width: "100%",
    backgroundColor: "#3A19C4",
    borderRadius: 8,
    marginBottom: 40,
  },
  result: {
    flex: 1,
    width: "100%",
    marginBottom: 20,
    backgroundColor: "#3A19C4"
  },
  heading: {
    color: "#FFF",
    backgroundColor: "#3A19C4",
    padding: 20,
    fontSize: 18,
    fontWeight: "700",
  },
});


export default Search;
