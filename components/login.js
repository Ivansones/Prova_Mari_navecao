import { StyleSheet,View,Button,TextInput,Text } from "react-native";
import React from 'react';


export default function Login(){
    const [email, onChangeText1] = React.useState();
    const [senha, onChangeText2] = React.useState();

    return(

        <View>
        <TextInput value={email} placeholder="Qual é sua senha"onChangeText={onChangeText1}/>

        <TextInput value={senha} placeholder="Qual é seu email" onChangeText={onChangeText2}/>

        <Button title="Entre" onPress={() => navigation.navigate}/>
        </View>

    )

}