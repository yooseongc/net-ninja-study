
import React, { useState } from 'react';
import { Alert, FlatList, Keyboard, StatusBar, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import AddTodo from './components/AddTodo';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import uuid from 'react-native-uuid';

export default function App() {

    const [todos, setTodos] = useState([
        { text: 'buy coffee', key: uuid.v4() },
        { text: 'create an app', key: uuid.v4() },
        { text: 'play on the switch', key: uuid.v4() }
    ]);

    const pressHandler = (key) => {
        setTodos((prevTodos) => {
            return prevTodos.filter(todo => todo.key !== key);
        });
    };

    const submitHandler = (text) => {
        if (text.length > 3) {
            setTodos((prevTodos) => {
                const key = uuid.v4();
                return [
                    { text: text, key: key },
                    ...prevTodos, 
                ];
            });
            Keyboard.dismiss();
        } else {
            Alert.alert(
                'OOPS!', 
                'Todos must be over 3 characters long.', 
                [{ text: 'Understood', onPress: () => console.log('alert closed.') }]
            );
        }
    }
    
    return (
        <TouchableWithoutFeedback
            onPress={ () => Keyboard.dismiss() }
        >
            <View style={ styles.container }>
                <Header />
                <View style={ styles.content }>
                    <AddTodo submitHandler={ submitHandler } />
                    <View style={ styles.list }>
                            <FlatList 
                                data={ todos }
                                renderItem={ ({ item }) => (
                                    <TodoItem item={ item } pressHandler={ pressHandler } />
                                )}
                            />
                    </View>
                </View>
                <StatusBar />
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }, 
    content: {
        flex: 1,
        padding: 20
    },
    list: {
        flex: 1,
        marginTop: 20
    }
});
