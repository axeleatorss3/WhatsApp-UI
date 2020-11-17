import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';
const Stack = createStackNavigator();
import Main from '../screens/main';
import Talk from '../screens/conversacion';
export default function stackContainer({navigation}){
    return(
        <Stack.Navigator screenOptions={{headerStyle:{backgroundColor: '#2a2f32'},title:"WhatsApp",headerTintColor:'grey'}}>
            <Stack.Screen name="main" component={Main}/>
            <Stack.Screen name="talk" component={Talk}/>
        </Stack.Navigator>
    )
}