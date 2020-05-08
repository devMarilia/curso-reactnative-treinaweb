import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import TexCounter from './Components/TextCounter'
import TodoList from './Components/TodoList';
import Form from './Components/Form';

export default class App extends React.Component {
  state= {
    list: [
      {id: '1', text: 'ABC'},
      {id: '2', text: 'DEF'},
      {id: '3', text: 'HIJ'},
      {id: '4', text: 'KLM'}
    ]
  }

  render() {
    const {state} = this;
    return(
      <>
      <View>
        <TexCounter/>
        <TodoList list={state.list} />
        <Form/>
      </View>
      </>
    );
  }
}