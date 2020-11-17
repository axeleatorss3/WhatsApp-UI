import React from 'react';
import {View,Text, StatusBar,StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from'@react-navigation/material-top-tabs';
import Chats from './chats';
import Estados from './estados';
import Calls from './Calls';
import Photos from './Photo';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createMaterialTopTabNavigator();

export default function Main(){
    return(
    
        <Tab.Navigator   initialRouteName="chats"
        screenOptions={({route})=>({
            tabBarIcon:({focused,color,size})=>{
              let tamanoIcono = 23  
              let nombreIcono = "camera";

              if(route.name === "photos"){
                return <Icon style={{marginTop:20}} name={nombreIcono} color={color} size={tamanoIcono}/>        
              }
             
            
           }
          })}

            tabBarOptions={{showIcon: true,activeTintColor: '#28eb8d',labelStyle:styles.tabFont ,inactiveTintColor:'grey',style:{backgroundColor:'#2a2f32',height:'auto',height:'auto'}}} >
            
            <Tab.Screen  name='photos' options={{tabBarLabel: ""}}  component={Photos}/>
            <Tab.Screen name='chats' component={Chats}/>
            <Tab.Screen name='estados' component={Estados}/>
            <Tab.Screen name='Calls ' component={Calls}/>
        </Tab.Navigator> 
       
    );

}
const styles = StyleSheet.create(
    {
        tabFont:{
            fontWeight: 'bold',
            fontSize: 12,
            textAlign: 'center'
        }
    }
)