import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Text,View, TouchableOpacity, Button} from 'react-native';
import Secondscreen from "./secondscreen";
import { NavigationContainer } from "@react-navigation/native";
import { NavigationAction } from "@react-navigation/native";


export default function Firstscreen({ navigation })
{
    return(
        <View>
    <Text>First page!!!</Text>
    <Button
  onPress={navigation.navigate('Second')}
  title="Page 2"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
    </View>
    );
    
}