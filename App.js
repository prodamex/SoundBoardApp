import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Sampler from "./src/screens/Sampler";
import { Provider } from "react-redux";
import store from "./src/store/store";
import Library from './src/screens/Library';
import Search from './src/components/Search';

export default function App() {

   // Creation of tabs variable
   const Tabs = createBottomTabNavigator();

  
  return (
   <Provider store={store}>
      <NavigationContainer>
     <Tabs.Navigator
     screenOptions={({ route }) => ({
       tabBarIcon: ({ focused, color, size }) => {
         let iconName;
         switch (route.name) {
           
          case "Sampler":
             iconName = focused
               ? "apps"
               : "apps";
             break;
          case "Library":
             iconName = focused ? "list" : "list";
             break;
          case "Search":
             iconName = focused ? "add-circle" : "add-circle";
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
     <Tabs.Screen options={{headerShown: false}} name="Sampler">{(props) => <Sampler />}</Tabs.Screen>
  {/*   // Screen for Local Library and also future music added from API */}
     <Tabs.Screen options={{headerShown: false}} name="Library">{(props) => <Library />}</Tabs.Screen>


   </Tabs.Navigator>
   </NavigationContainer>
   </Provider>
     
  );
}  
