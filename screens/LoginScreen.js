import React, { useState } from 'react';
import { View, Text, TouchableOpacity,StyleSheet, TextInput, ImageBackground} from 'react-native';
import { set } from 'react-native-reanimated';
import styled from 'styled-components/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const LoginScreen = ({navigation}) => {
    const wallpapaer = require('../assets/download.jpeg');
    const url = "http://192.168.1.71/loginapp/login.php";
    const[telefono,setTelefono] = useState('');
    var flag = false;
    const[hideText,setText] = useState(true);
    
    const login = () => {
        let data = new FormData();
        data.append('t',telefono);
        fetch(url,
        {
          method: 'POST',
          body: data
        })
        .then((response) => response.json())
        .then((datos) => {
            console.log(datos);
            
              if(datos.estado == 1){ 
                flag = true;
                setText(flag); 
              {/* Asi es como mandariamos el dato */} 
              AsyncStorage.setItem('usrtelefono', JSON.stringify(datos.datos));
  
              navigation.navigate('main');
              }else{
                flag = false;
              console.log("El usuario no existe");
              setText(flag);  
              }
          }).catch((error) => console.log(error));
  };
    return (
        <ImageBackground source={wallpapaer} style={styles.contenedor}>
        <View style={styles.contenedor}>
            <View style={{flexDirection: 'row',margin:20}}>
                <View style={styles.contenedorInputsText}>
                <Text style={styles.TextInputs}>Telefono:</Text>
                </View>
                <View style={styles.contenedorInputs}>
                <TextInput style={styles.entrada} placeholder="telefono" onChangeText={(telefono)=>{setTelefono(telefono)}}></TextInput>
               
                </View>
               
                </View>
                <View>
                {hideText ? <Text></Text>:<Text style={{ margin: 10,}}>Usuario no existe</Text>}
                <TouchableOpacity style={styles.button} onPress={login}>
                <Text style={styles.buttonText} onPress={login}>Login</Text>
                </TouchableOpacity>
                
                
                </View>
                
        </View>
        </ImageBackground>
    
        
    )
}

export default LoginScreen;
//styled components
const Conteiner = styled.View`
flex: 1;
border-width: 1;
border-color:#000 ; 
`;
 const styles = StyleSheet.create({
    contenedor:{
        display: "flex",
        flex: 1,
        justifyContent: "center",
        flexDirection: 'column',
        borderWidth: 2,
       
     },
     contenedorInputs:{
        borderRadius: 100,
        
        justifyContent: "center",
        flexDirection: 'column',
        
        flex:1
     },
     contenedorInputsText:{
       
        justifyContent: "center",
        flexDirection: 'column',
        alignItems: 'flex-start'
        
     },
    entrada:{
        fontSize:20,
        padding:10,
        backgroundColor: 'white',
        borderRadius: 100,
        margin: 10,
        borderWidth: 1,
    },
    button:{
        alignSelf: 'center',
        width:100,
        height: 50,
        margin:10,
        backgroundColor: 'black',
        alignItems: 'center'
    },
    buttonText:{
        marginTop: 10,
        alignSelf:'auto',
        fontSize: 20 ,
        color: 'white'       
    },
    TextInputs:{
        marginTop:12,
        marginBottom:10,
        fontSize: 23,
        fontWeight: "bold"
    }

 });
