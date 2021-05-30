
import React, { useState } from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './routes/HomeStack';
import AboutStack from './routes/AboutStack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StatusBar } from 'react-native';

const getFonts = () => Font.loadAsync({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
});

const RootDrawer = createDrawerNavigator();

export default function App() {

    const [fontsLoaded, setFontsLoaded] = useState(false);
    if (fontsLoaded) {
        return (
            <NavigationContainer>
                <StatusBar />
                <RootDrawer.Navigator
                    initialRouteName="Home"
                >
                    <RootDrawer.Screen
                        name="Home"
                        component={HomeStack}
                    />
                    <RootDrawer.Screen
                        name="About"
                        component={ AboutStack }
                    />
                </RootDrawer.Navigator>
            </NavigationContainer>
        );
    } else {
        return (
            <AppLoading 
                startAsync={ getFonts }
                onFinish={ () => setFontsLoaded(true) }
                onError={ console.warn }
            />
        );
    }

    
}

