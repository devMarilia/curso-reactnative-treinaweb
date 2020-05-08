import React, { Component } from 'react';
import { View, Text, FlatList,StyleSheet} from 'react-native';


class TodoList extends Component{
    static defaultProps = {
        list: [
            {id: '1', text: 'ABC'},
            {id: '2', text: 'DEF'},
        ]
    };

    handleRow = ({item, index}) => {
        return(
            <View>
                <Text>
                    {this.formatListNumber(index)} - {item.text}
                </Text>
            </View>
        )
    }

    formatListNumber(number){
        const digits = 2;
        return ('0'.repeat(digits) + (number + 1)).slice(-digits)
    }

    render(){
        const {props} = this;
        const keyExtractor = item => item.id;
        console.log(props.list)
        return(
            <FlatList
            data={props.list}
            keyExtractor={keyExtractor}
            renderItem={this.handleRow}
            />
        );
    };
}

export default TodoList;