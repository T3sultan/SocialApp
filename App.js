// In App.js in a new project

import * as React from 'react';
//import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import OnboardingScreen from './screens/OnboardingScreen';
import LoginScreen from './screens/LoginScreen';


const AppStack = createStackNavigator();

const  App=()=> {
  return (
    <NavigationContainer>
      <AppStack.Navigator
       headerMode='none'
      >
        <AppStack.Screen name="Onboarding" component={OnboardingScreen} />
        <AppStack.Screen name="Login" component={LoginScreen}/>
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

export default App;