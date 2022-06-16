import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Sampler from "./src/screens/Sampler"

export default function App() {

   // Creation of tabs variable
   const Tabs = createBottomTabNavigator();

  
  return (
     <NavigationContainer>
     <Tabs.Navigator
     screenOptions={({ route }) => ({
       tabBarIcon: ({ focused, color, size }) => {
         let iconName;
         switch (route.name) {
           
          case "Sampler":
             iconName = focused
               ? "musical-notes"
               : "musical-notes-outline";
             break;
          case "Library":
             iconName = focused ? "library" : "library-outline";
             break;
          case "Search":
             iconName = focused ? "search" : "search-outline";
             break;
          default:
             iconName = "ban";
             break;
         }
         return <Ionicons name={iconName} size={size} color={color} />;
       },
     })}
     tabBarOptions={{
       activeTintColor: "#6641D4",
       inactiveTintColor: "#967bd2",
     }}
   >
     {/* // Screen For Sampler view where to play and change pads(music)*/}
     <Tabs.Screen name="Sampler">{(props) => <Sampler />}</Tabs.Screen>
  {/*   // Screen for Local Library and also future music added from API */}
     <Tabs.Screen name="Library">{(props) => <Library />}</Tabs.Screen>
  {/*   // Screen for the FreeSound API, where to search for music  */}
     <Tabs.Screen name="Search">{(props) => <Search />}</Tabs.Screen>


   </Tabs.Navigator>
   </NavigationContainer>
  );
}  
