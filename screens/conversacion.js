import React, {useEffect, useState} from 'react';
import {View,Text, ImageBackground, StyleSheet,KeyboardAvoidingView, Platform} from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Svg from 'react-native-svg';
export default function Talk(){
    const [varMessage, setMessage] = useState('');
    const [Vardata, setData] = useState([{mensaje: ''}]);
    const [mine,setMine] = useState(true);
    const data = [{mensaje: 'hola'}];
    const renderItem = ({item})=>(
    <BubbleMesagge>
        <Text style={{marginHorizontal: 10, color: 'white'}}>{item.mensaje}</Text>
    </BubbleMesagge>
    );
    const Sendmessage =(message)=>{
        data.push(message);
        console.log('arreglo',data);

    }
    return(
        <ImageBackground source={{uri:'https://www.xda-developers.com/files/2019/11/default_wallpaper.jpg'}} style={{flex: 1, padding:10, position: 'relative'}}>
            <ChatContainer style={ {maxHeight: 1000, minHeight: 370 }}>
            <ListMessages data={data} renderItem={renderItem}></ListMessages>
            </ChatContainer>
        <KeyboardAvoidingView behavior={Platform.OS === 'android' ? 'padding': null} style={{flexDirection: 'row'}}>
            <InputContainer>         
                <ContainerForm >
                    <ButtonCamera ><Icon  name="mood" size={30} color="grey" style={{alignSelf: 'center'}} ></Icon></ButtonCamera>
                        <FormMessage placeholder="escribe un mensaje" textAlignVertical="auto" multiline={true} onChangeText={(message)=> {setMessage(message); console.log(message)}}/>
                    <ButtonCamera ><Icon  name="camera-alt" size={30} color="grey" style={{alignSelf: 'center'}} ></Icon></ButtonCamera>
                </ContainerForm >
                <ButtonContainer>
                <ButtonBox onPress={()=>{Sendmessage({varMessage})}}><Icon  name="send" size={30} color="white" style={{alignSelf: "center", paddingTop:10}}></Icon></ButtonBox>
                </ButtonContainer>                 
            </InputContainer>          
        </KeyboardAvoidingView>
        </ImageBackground>         
    )
}
const styles = StyleSheet.create({
mine:{
 backgroundColor: 'red'
},
notMine:{
    backgroundColor: 'blue'

}
});
const ChatContainer = styled.ScrollView`
height: 92%;
width: 100%;
display: flex;
flex: 1;
`;
const InputContainer = styled.View`
height: 50px;
width: 100%;

flex-direction: row;
flex: 1;

`;
const ContainerForm = styled.View`
width: 80%;
height: 50px;
border-radius: 50px;
background-color: #4F585E;
flex-direction: row;
display: flex;
`;
const FormMessage = styled.TextInput`
width: auto;
height: auto;
margin: 10px;
color: white;
font-weight: bold;
flex: 8;
`;
const ButtonContainer = styled.View`
width: auto;
height: 50px;
align-self:  center;
margin-left: 10px;
`;
const ButtonBox = styled.TouchableHighlight`
width: 50px;
height: 50px;
border-radius: 25px;
background-color: #28eb8d;
`;
const BubbleMesagge = styled.View`
width: 80%;
height: 50px;
display: flex;
justify-content: center;
border-width: 1px;
border-color: #000;
border-radius: 40px;
background-color: #4F585E;
margin: 10px
`;
const ButtonCamera = styled.TouchableOpacity`
width: auto;
height: 50px;
align-self:  center;
flex: 2;
display: flex;
justify-content: center;
`;
const ListMessages = styled.FlatList`
border-width: 1px;
border-color: #000;
width: auto;
height: 500px;
flex: 1;
`;