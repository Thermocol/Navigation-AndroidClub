/*import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
//import RootStackNav from './navigation/rootstacknav';
export default function App() {
  return (
    <NavigationContainer>
    
      <RootStackNav/>
      <StatusBar style="auto" />
   
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
/*import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>PAGE1 !!!!!!!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>PAGE2 !!!!!!!!!!!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="PAGE 1" component={HomeScreen} />
        <Tab.Screen name="PAGE 2" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );

}*/
import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

function Page1({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Page2')}
        title="Page1"
      />
    </View>
  );
}

function Page2({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Page2" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Page1">
        <Drawer.Screen name="Page 1" component={Page1} />
        <Drawer.Screen name="Page 2" component={Page2} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}