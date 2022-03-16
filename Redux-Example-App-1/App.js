import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import {store} from './Store';


export default class App extends React.Component {
  
  constructor()
  {
    super();
    this.state = {value : store.getState()};
    store.subscribe(() => {
      this.setState({value : store.getState()});
    })
  }

  handleAdd = () => {
    store.dispatch({type : 'ADD'});
  }

  handleSub = () => {
    store.dispatch({type: 'SUB'});
  }

  render() {

    return (    
      <View style={styles.container}>
        <Button onPress={this.handleAdd} title="Click to Add!"/>
        <Button onPress={this.handleSub} title="Click to Subtract!"/>
        <Text>{this.state.value}</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
