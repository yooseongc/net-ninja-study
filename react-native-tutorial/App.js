import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

    const [name, setName] = useState('shaun');
    const [age, setAge] = useState('30');
    
    return (
        <View style={ styles.container }>
            <Text>Enter name:</Text>
            <TextInput 
                multiline
                style={ styles.input }
                placeholder='e.g. John Doe'
                defaultValue={ name }
                onChangeText={ (text) => setName(text) }
            />
            <Text>Enter age:</Text>
            <TextInput
                keyboardType='numeric'
                style={ styles.input }
                placeholder='e.g. 99'
                defaultValue={ age }
                onChangeText={ (val) => setAge(val) }
            />
            <Text>name: { name }, age: { age }</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }, 
    input: {
        borderWidth: 1,
        borderColor: '#777',
        padding: 8,
        margin: 10,
        width: 200
    }
});
