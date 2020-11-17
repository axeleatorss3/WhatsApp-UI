import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {createMaterialTopTabNavigator} from'@react-navigation/material-top-tabs';
import MainStack from '../whatsApp-UI/rutas/stack';
import Main from '../whatsApp-UI/screens/main';

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
