import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View,StyleSheet } from 'react-native';
const Stack = createStackNavigator();
import {createMaterialTopTabNavigator} from'@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();
import Main from '../screens/main';
import Talk from '../screens/conversacion';
import Icon from 'react-native-vector-icons/FontAwesome';
import LoginScreen from '../screens/LoginScreen';
export default function stackContainer({navigation}){
    return(
        <Stack.Navigator initialRouteName="login" screenOptions={{headerStyle:{backgroundColor: '#2a2f32'},title:"WhatsApp",headerTintColor:'grey'}}>
            <Stack.Screen name="main" component={Main} options={{ 
                headerTitle:'WhatsApp', headerBackground:()=> <View style={styles.header}><View style={styles.iconContainer}><Icon style={styles.icon} name='search' size={27} color={'grey'}></Icon><Icon style={styles.icon} name='ellipsis-v' size={27} color='grey'></Icon></View></View>
            }}/>
            <Stack.Screen name="talk" component={Talk} options={{headerShown:true,headerTitle:"Chat"}}/>
            <Stack.Screen name="login" component={LoginScreen} options={{headerShown:false}}  />
        </Stack.Navigator>
    )
}
const styles = StyleSheet.create({
    header:{
        flex:1,
        backgroundColor: '#2a2f32',
        flexDirection:'row',


    },
    icon:{
        flex: 0,
        alignSelf: 'flex-end',
        flexWrap: 'nowrap',
       
        margin: 10
        
    },
    iconContainer:{
        flex: 1,
        justifyContent: 'flex-end',
        flexDirection: 'row',
        
    }
})