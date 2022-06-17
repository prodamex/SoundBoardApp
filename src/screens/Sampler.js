import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SamplerEdit from "../components/SamplerEdit";
import SamplerView from "../components/SamplerView";

const SearchNavigation = createStackNavigator();

export default function Sampler  ()  {
  return (
    <SearchNavigation.Navigator initialRouteName="Sampler">
      <SearchNavigation.Screen
      
        name="Sampler"
        component={SamplerView}
        options={{
          
          title: "Click or hold the pads !",
          headerStyle: { backgroundColor: "#ffffff", 
          },
          headerTitleStyle: {
            fontSize: 32,
            fontWeight: "700",
            textAlign: "center",
          },
        }}
      />
      <SearchNavigation.Screen
        name="Edit"
        component={SamplerEdit}
        options={{
          title: "Edit",
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
    </SearchNavigation.Navigator>
  );
};

