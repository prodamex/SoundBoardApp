import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Sampler from "./src/screens/Sampler";
import { Provider } from "react-redux";
import store from "./src/store/store";
import Library from './src/screens/Library';
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function App() {

   // Creation of tabs variable
   const Stack = createBottomTabNavigator();
   let persistor = persistStore(store);
  
  return (
   <Provider store={store}>
            <PersistGate persistor={persistor} loading={null}>
            <NavigationContainer>
     <Stack.Navigator
     
   >
     {/* // Screen For Sampler view where to play and change pads(music)*/}

     <Stack.Screen 
     options={
      {headerShown: false,
      tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="music" color={'#2a1b6d'} size={size} />
        ),
      }} 
      name="Sampler">{(props) => <Sampler />}
      </Stack.Screen>

  {/*   // Screen for Local Library and also future music added from API */}

      <Stack.Screen 
     options={
      {headerShown: false,
      tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="bookmark-box-multiple" color={'#5b45bc'} size={size} />
        ),
      }} 
      name="Library">{(props) => <Library />}
      </Stack.Screen>


   </Stack.Navigator>
   </NavigationContainer>
            </PersistGate>
      
   </Provider>
     
  );
}  
