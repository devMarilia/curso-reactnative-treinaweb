import React from 'react';
import { StyleSheet, View } from 'react-native';
import TexCounter from './Components/TextCounter'
import TodoList from './Components/TodoList';

export default class App extends React.Component {
  render() {
    return(
      <>
      <View style={styles.container}>
        <TexCounter/>
        <TodoList/>
      </View>
      </>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    
     backgroundColor: "#333"
  },
})

 