import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Secondscreen from "./secondscreen";
import Firstscreen from "./firstscreen";
const Stack= createNativeStackNavigator();
export default function RootStackNav()


{return(
    <Stack.Navigator>
        <Stack.Screen name='First' component={Firstscreen}></Stack.Screen>
        <Stack.Screen name='Second' component={Secondscreen}></Stack.Screen>
        
    </Stack.Navigator>);
}   