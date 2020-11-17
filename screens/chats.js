import React from 'react';
import {View,Text,FlatList,Image,StyleSheet, SafeAreaView} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import data from '../src/mensajes.json';

export default function Chats({navigation}){
        const renderItem = ({item})=>(
            
            <TouchableOpacity style={styles.Chatcontainter}  onPress={()=>{navigation.navigate('talk')}}>
                <View style={styles.imageContainer} >
                <Image style={styles.image} source={{uri:item.imagen}} />
                </View>
                <View style={styles.chat}>
                    <Text style={styles.nameContact} >
                        {item.nombre}               
                    </Text>
                    <Text style={styles.messegaeContact}>
                    {item.mensaje}
                    </Text>       
                </View>
            </TouchableOpacity>
            
        );
        return(
        <SafeAreaView style={{backgroundColor:'#24282d' ,width: 'auto', height: 1000}}>
            <FlatList  
            data={data}
            renderItem={renderItem}
            keyExtractor={(item,index) => index.toString()}>
                
            </FlatList>
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
        fontSize: 16,
        flex: .5,
        color: '#d3c9c3'
    }
})
