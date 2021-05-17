import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './pages/Home';
import Detail from './pages/Detail';
import Search from './pages/Search';

import { Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function Routes(){
    return(
        <Tab.Navigator
            tabBarOptions={{
                style:{
                    borderTopColor: 'transparent'
                },
                activeTintColor: '#313131',
                inactiveTintColor: '#BFBEBF',
                tabStyle:{
                    paddingBottom: 5,
                    paddingTop: 5
                }
            }}
        >
            <Tab.Screen 
            name="Home" 
            component={Home}
            options={{
                tabBarIcon: ({size, color}) => (
                    <Feather name="home" size={size} color={color} />
                )
            }}
            />

            <Tab.Screen 
            name="Libraries" 
            component={Home}
            options={{
                tabBarIcon: ({size, color}) => (
                    <Feather name="book" size={size} color={color} />
                )
            }}
            />

            <Tab.Screen 
            name="Profile" 
            component={Home}
            options={{
                tabBarIcon: ({size, color}) => (
                    <Feather name="user" size={size} color={color} />
                )
            }}
            />
        </Tab.Navigator>
    );
}