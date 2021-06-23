import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import MainRoutes from './MainRoutes'


const Tab = createBottomTabNavigator()

export default class DefaultRoutes extends Component {
    render() {
        return (
            <NavigationContainer independent={true}>
                <Tab.Navigator 
                    tabBarOptions={{
                        activeTintColor: '#777',
                        inactiveTintColor: '#ccc',
                        labelStyle: { fontSize: 20, }
                    }} 
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                            let iconName
            
                            switch (route.name) {
                                case 'Jobs':
                                    iconName = 'briefcase'
                                break
                            }
            
                            return <Icon name={iconName} size={20} color={color} />;
                        }
                    })}
                    initialRouteName="Jobs"
                >
                    <Tab.Screen name="Jobs" component={MainRoutes} />
                </Tab.Navigator>
            </NavigationContainer>
        ) 
    }
}