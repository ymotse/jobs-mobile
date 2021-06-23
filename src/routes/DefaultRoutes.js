import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import MainRoutes from './MainRoutes'
import Home from '../pages/Home'
import About from '../pages/About'


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
                                case 'Home':
                                    iconName = 'home'
                                break
                                case 'Jobs':
                                    iconName = 'briefcase'
                                break
                                case 'About':
                                    iconName = 'ellipsis-v'
                                break
                            }
            
                            return <Icon name={iconName} size={20} color={color} />;
                        }
                    })}
                    initialRouteName="Jobs"
                >
                    <Tab.Screen name="Home" component={Home} />
                    <Tab.Screen name="Jobs" component={MainRoutes} />
                    <Tab.Screen name="About" component={About} />
                </Tab.Navigator>
            </NavigationContainer>
        ) 
    }
}