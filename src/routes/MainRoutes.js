import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Main from '../pages/Main'
import Details from '../pages/Details'


const Stack = createStackNavigator()

class MainRoutes extends Component {
    
    render() {
        return (
            <NavigationContainer independent={true}>
            
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Main" component={Main} />
                    <Stack.Screen name="Details" component={Details} />
                </Stack.Navigator>
            
            </NavigationContainer>
        )
    }
}

export default MainRoutes
