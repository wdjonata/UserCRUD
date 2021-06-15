import React from 'react'

import UserList from './pages/UserList'
import UserForm from './pages/UserForm'
import Splash from './pages/Splash'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

export default () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Splash"
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="UserList" component={UserList} />
                <Stack.Screen name="UserForm" component={UserForm} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
