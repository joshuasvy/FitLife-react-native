import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import AboutScreen from '../screens/AboutScreen';
import DrawerNavigator from '../routes/DrawerNavigator';
import GetStarted from '../screens/GetStarted';
import DynamicStretching from '../screens/DynamicStretching';
import PushUps from '../screens/PushUps';
import FoamRolling from '../screens/FoamRolling';
import WarmupCardio from '../screens/WarmupCardio';
import SquatsScreen from '../screens/SquatsScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Start" screenOptions={{headerShown: false,
          animation: 'fade',
        }}>
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="About" component={AboutScreen}/>
            <Stack.Screen name="Drawer" component={DrawerNavigator}/>
            <Stack.Screen name="Start" component={GetStarted}/>
            <Stack.Screen name="Dynamic" component={DynamicStretching}/>
            <Stack.Screen name="FoamRolling" component={FoamRolling}/>
            <Stack.Screen name="Warmup" component={WarmupCardio}/>
            <Stack.Screen name="PushUps" component={PushUps}/>
            <Stack.Screen name="Squats" component={SquatsScreen}/>
       </Stack.Navigator>
     </NavigationContainer>
  )
}

export default StackNavigator