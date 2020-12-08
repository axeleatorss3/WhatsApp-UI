import React, {useState,useEffect}from 'react';
import {View,Text,FlatList,Image,StyleSheet, SafeAreaView } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import data from '../src/mensajes.json';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import { FloatingAction } from 'react-native-floating-action';
import AsyncStorage from '@react-native-async-storage/async-storage';

const actions = [{
    text: 'agregar un contacto',
    icon: <Icon name="phone" size={32} color="#28eb8d" ></Icon>,
    name: 'bt_accessib',
    position: 2
  }, {
    text: 'crear un grupo',
    icon: <Icon name="phone" size={32} color="#28eb8d" ></Icon>,
    name: 'bt_language',
    position: 1
  }];

export default function Chats({navigation}){
    const[data, setData] = useState([]);
    useEffect(() => {
        AsyncStorage.getItem('usrtelefono')
        .then((value) => {
            let d = new FormData();
            d.append('idusuario', JSON.parse(value).idusuarios);
            console.log("** MOSTRANDOOOO ***");
            console.log(JSON.stringify(d));
            fetch('http://192.168.1.71/loginapp/chats.php',
            {
                method : 'POST',
                body : d
            })
            .then((response) => response.json())
            .then((datos) => {
                console.log('parte 2',datos);
                if(datos.estado == 1){
                    setData(datos.datos);
                }else{
                    console.log("El usuario no existe");
                }
            })
            .catch((error) => console.log(error));
        })
    },[]); 
        const renderItem = ({item})=>(
            
            <TouchableOpacity style={styles.Chatcontainter}  onPress={()=>{navigation.navigate('talk')}}>
                <View style={styles.imageContainer} >
                <Image style={styles.image} source={{uri:item.foto}} />
                </View>
                <View style={styles.chat}>
                    <Text style={styles.nameContact} >
                        {item.nombre}               
                    </Text>
                    <Text style={styles.messegaeContact}>
                    {item.informacion}
                    </Text>       
                </View>
            </TouchableOpacity>
            
        );
        return(
        <SafeAreaView style={{backgroundColor:'#24282d',flex:1 }}>
            <FlatList  
            data={data}
            renderItem={renderItem}
            keyExtractor={(item,index) => index.toString()}>
                
            </FlatList>
            <View style={{flex:1}}>         
                <FloatingAction
                    color={"#15d5a5"}                
                    floatingIcon={<Icon2 name="android-messages" size={27} color="white" style={{transform: [{scaleX:-1}]}} ></Icon2>}
                    actions={actions}
                    onPressItem={
                    (name) => {
                          console.log(`selected button: ${name}`);
                     }
                          }
                 />
            </View>
        </SafeAreaView> 
        )
        
}

const styles = StyleSheet.create({
    Chatcontainter: {
        flex: 1,
        width: 'auto',
        height: 'auto',
        flexDirection: "row",
        marginBottom: 4,
        marginTop: 4
    },
    chat:{
        flexWrap: 'wrap',
        height: 'auto',
        borderBottomWidth:.01,
        borderColor: '#4a4a4ad6',
        alignItems: 'baseline',
        flex:1
    },
    image:{
        margin:2,
        marginRight:20,
        width: 70,
        height:70,
        borderRadius: 100,
        backgroundColor: '#4a4a4a8f',
        
        
    },
    imageContainer:{
        margin: 3,

        
    },
    nameContact:{
        fontWeight:'bold',
        fontSize: 20,
        flex: .5,
        color: 'white'

    },
    messegaeContact:{
        fontSize: 14,
        flex: 1,
        color: '#d3c9c3',
        flexGrow: 0,
        padding: 3,

    }
})
