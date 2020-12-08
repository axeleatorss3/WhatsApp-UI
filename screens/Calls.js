import React, {useEffect,useState} from 'react';
import {View,Text,ScrollView,FlatList, StyleSheet,Image, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
//import data from '../src/calls.json';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function Llamadas (){
    const[data, setData] = useState([]);
    
    
    useEffect(() => {
        AsyncStorage.getItem('usrtelefono')
        .then((value) => {
            let d = new FormData();
            d.append('idusuario', JSON.parse(value).idusuarios);
            console.log("** MOSTRANDOOOO ***");
            console.log(JSON.stringify(d));
            fetch('http://192.168.1.71/loginapp/llamadas.php',
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
            
            <View style={styles.estadoContainer} >
                <View style={styles.imageContainer} >
                <Image style={styles.image} source={{uri:item.foto}} />
                </View>
                <View style={styles.chat}>
                    <Text style={styles.nameContact}>
                        {item.nombre}               
                    </Text>
                    <Text style={styles.messegaeContact}>
                    (2) {`${item.fechahora}`} 
                    </Text> 

                </View>
                <View style={styles.phoneContainer}>
                <Icon name="phone" size={32} color="#28eb8d" style={{marginTop:30,marginRight:10}} ></Icon>
                </View>
                
            </View>
            
        );
        return(
        <SafeAreaView  style={{backgroundColor:'#24282d' ,width: 'auto',height:1000}}>
            <FlatList  
            data={data}
            renderItem={renderItem}
            keyExtractor={(item,index) => index.toString()}>

            </FlatList>
        </SafeAreaView> 
        )
        };

const styles = StyleSheet.create(
    {
        estadoContainer:{
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
        fontSize: 13,
        flex: .5,
        color: '#d3c9c3'
    },
    phoneContainer:{
        width: "auto",
        height:"auto",
        alignItems :'center',
        borderBottomWidth:.1,
        borderColor: '#4a4a4ad6',
        marginRight:10

    }
}
    
)