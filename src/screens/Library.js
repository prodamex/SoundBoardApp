import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LibraryView from "../components/LibraryView";
import Record from "../components/Record";

const SearchStack = createStackNavigator();

const Library = () => {
  return (
    <SearchStack.Navigator initialRouteName="Library">
      <SearchStack.Screen
        name="Library"
        component={LibraryView}
        options={{
          title: "My library - Records",
          headerStyle: {
            backgroundColor: "#ffffff",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontSize: 32,
            color:"#000000",
            fontWeight: "700",
            textAlign: "center",
          },
        }}
      />
      <SearchStack.Screen
        name="Record"
        component={Record}
        options={{
          title: "Record",
          headerStyle: {
            backgroundColor: "#ffffff",
          },
          
          headerTitleStyle: {
            fontSize: 32,
            fontWeight: "700",
            textAlign: "center",
          },
        }}
      />
    </SearchStack.Navigator>
  );
};

export default Library;
