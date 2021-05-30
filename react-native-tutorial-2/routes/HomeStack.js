import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { Image } from 'react-native';
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';
import Header from '../shared/Header';

const Stack = createStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={ {
                headerStyle: {
                    backgroundColor: '#eee',
                    height: 60,

                },
                headerBackground: () => (
                    <Image
                        source={ require('../assets/game_bg.png') }
                        style={{ height: 58 }}
                    />
                ),
                headerTintColor: '#444'
            } }
        >
            <Stack.Screen
                name="Home"
                component={ Home }
                options={ 
                    ({ navigation }) => ({
                        headerTitle: () => <Header navigation={ navigation } title='GameZone' />
                    }) 
                }
            />
            <Stack.Screen
                name="ReviewDetails"
                component={ ReviewDetails }
                options={ {
                    title: 'Review Details'
                } }
            />
        </Stack.Navigator>
    )
}
