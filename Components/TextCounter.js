import React, { Component } from 'react';
import { View , Text, TextInput, StyleSheet } from 'react-native';

class TextCounter extends Component {
    static defaultProps = {
        limit: 20
    }
    
    //Vai controlar o numero de caracteres
    state = {
        text: ''
    }

    handleChange = (text)  => {
        if(text.length <= this.props.limit){ 
        this.setState({text});
        }
    }


    render(){
        const { state, props } = this;
        return(
            <View>
                <TextInput 
                multiline={true}
                numberOfLines={5}
                value={state.text}
                onChangeText={this.handleChange}
                style={styles.caixa}
                />  
                <Text>
                    Total: { state.text.length }/{ props.limit }
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    caixa: {
      borderColor: 'gray',
      borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    
    
  })


export default TextCounter; 