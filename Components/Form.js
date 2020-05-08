import React, {Component} from 'react';
import { View, TextInput, Button } from 'react-native';

class Form extends Component{

    static defaultProps = {
        onAdd: () => {}
    }

    state = {
        text: ''
    }

     //verificar se tem algo escrito (função)
     add = () => {
        const {state} = this;
        if (state.text){
            this.onAdd(state.text); 
            this.handleChenge('');
        }
     }

    handleChenge = (text) => {
        this.setState({text});
    }

    render(){
        const { state } = this;
        return(
            <View>
                <TextInput value={state.text} onChangeText={this.handleChenge}/>
                <Button
                    title='add'
                    color='#006a'
                    onPress={this.add}
                />
            </View>
        );
    }
}

export default Form;