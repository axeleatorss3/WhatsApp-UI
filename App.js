import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainStack from '../whatsApp-UI/rutas/stack';
import Main from '../whatsApp-UI/screens/main';
import Login from '../whatsApp-UI/screens/LoginScreen';
const Stack = createStackNavigator();
export default function App() {
  return (
    
    <NavigationContainer>
     
      <MainStack/>
      
      
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
});
