import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';


import Login from './components/login';
import Estoque from './components/estoque';
import Fale from './components/fale';
import * as React from 'react';


export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Fale/>
      </View>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  },
});
