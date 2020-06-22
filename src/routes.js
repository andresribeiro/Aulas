import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './Pages/Home'
import Segunda from './Pages/Day/Segunda'
import Terca from './Pages/Day/Terca'
import Quarta from './Pages/Day/Quarta'
import Quinta from './Pages/Day/Quinta'
import Sexta from './Pages/Day/Sexta'

const AppStack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        headerMode="none"
        screenOptions={{
          cardStyle: {
            backgroundColor: '#F0F0F5'
          }
        }}
      >
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="Segunda" component={Segunda} />
        <AppStack.Screen name="Terca" component={Terca} />
        <AppStack.Screen name="Quarta" component={Quarta} />
        <AppStack.Screen name="Quinta" component={Quinta} />
        <AppStack.Screen name="Sexta" component={Sexta} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
