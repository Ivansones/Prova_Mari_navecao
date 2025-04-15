
import { StyleSheet,View,Button,TextInput,Text } from "react-native";
import React from 'react';


export default function Fale(){
    const [nome, onChangeText1] = React.useState();
    const [email, onChangeText2] = React.useState();

    return(

        <View style={styles.tenta}>
        <Text>Ola, bem vindo ao grupo das frutas, gostamos bastante de comelas, para se juntar bote seu email e nome ali embaixo:</Text>
        <TextInput value={nome} placeholder="Qual é o sue nome"onChangeText={onChangeText1}/>

        <TextInput value={email} placeholder="Qual é seu email" onChangeText={onChangeText2}/>

        </View>

    )

}

const styles = StyleSheet.create({
    tenta:{
        alignItems:'center',
        justifyContent:'center',
    }


});