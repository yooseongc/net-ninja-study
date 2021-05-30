import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { Image } from 'react-native';
import About from '../screens/About';
import Header from '../shared/Header';

const Stack = createStackNavigator();

export default function AboutStack() {
    return (
        <Stack.Navigator
            initialRouteName="About"
            screenOptions={ {
                headerStyle: {
                    backgroundColor: '#eee',
                    height: 60
                },
                headerBackground: () => (
                    <Image
                        source={ require('../assets/game_bg.png') }
                        style={ { height: 60 } }
                    />
                ),
                headerTintColor: '#444'
            } }
        >
            <Stack.Screen
                name="About"
                component={ About }
                options={
                    ({ navigation }) => ({
                        headerTitle: () => <Header navigation={ navigation } title='About GameZone' />
                    })
                }
            />
        </Stack.Navigator>
    )
}
