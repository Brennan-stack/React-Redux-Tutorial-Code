import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { AppRegistry, Button, StyleSheet, Text, View } from 'react-native';

export default function Counter() {

  const handleAdd = () => {
    Store.dispatch({type : 'ADD'});
  }

  const handleSub = () => {
    Store.dispatch({type: 'SUB'});
    console.log(Store.getState());
  }
  
  return (
    <View style={styles.container}>
      <Button onPress={handleAdd} title="Click to Add!"/>
      <Button onPress={handleSub} title="Click to Subtract!"/>
      <Text>{}</Text>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});