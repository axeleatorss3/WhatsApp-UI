import React from 'react';
import {View,Text,ScrollView,FlatList, StyleSheet,Image, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import data from '../src/estados.json';
export default class Estados extends React.Component{
    
    render(){
        const renderItem = ({item})=>(
            
            <View style={styles.estadoContainer} >
                <View style={styles.imageContainer} >
                <Image style={styles.image} source={{uri:item.imagen}} />
                </View>
                <View style={styles.chat}>
                    <Text style={styles.nameContact}>
                        {item.Nombre}               
                    </Text>
                    <Text style={styles.messegaeContact}>
                    hace {`${item.Tiempo}`} minutos
                    </Text>       
                </View>
            </View>
        
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
        
        };
}
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
        borderWidth:1,
        borderColor: 'white',
        borderRadius: 100,
        marginRight: 20

        
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
    }}
    
)