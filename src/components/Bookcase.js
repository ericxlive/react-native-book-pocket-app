import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Bookcase extends Component {
    render(){
        return(
            <View>
                <Text>
                    Bookcase.js
                </Text>
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCCF',
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
}

export default Bookcase;