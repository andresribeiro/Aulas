import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './Pages/Home'
import LessonsList from './Pages/LessonsList'

const Stack = createStackNavigator()

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="LessonsList" component={LessonsList}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
