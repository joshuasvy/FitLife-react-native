import "react-native-gesture-handler"; 
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react'
import HomeScreen from "../screens/HomeScreen";
import ExercisesScreen from '../screens/ExercisesScreen';
import DrawerNavIcons from "../routes/DrawerNavIcons";
import AboutScreen from "../screens/AboutScreen";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
  
      <Drawer.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false,
        swipeEnabled: true,
        drawerStyle: {
          backgroundColor: '#9BB5E6',
          width: 257,
        },
      }}
      drawerContent={props => <DrawerNavIcons {...props} />}>
        <Drawer.Screen name="Home" component={HomeScreen}/>
        <Drawer.Screen name="Exercises" component={ExercisesScreen}/>
        <Drawer.Screen name="About" component={AboutScreen}/>
      </Drawer.Navigator>
  
  )
}

export default DrawerNavigator;