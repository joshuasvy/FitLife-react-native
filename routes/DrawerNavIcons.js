import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';
import React from 'react';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { useFonts } from 'expo-font';

const DrawerNavIcons = (props) => {

  const [fontsLoaded] = useFonts({
    'Rubik-Black': require('../assets/fonts/Rubik-Black.ttf'),
    'Rubik-Bold': require('../assets/fonts/Rubik-Bold.ttf'),
    'Rubik-Regular': require('../assets/fonts/Rubik-Regular.ttf'),
    'Rubik-Medium': require('../assets/fonts/Rubik-Medium.ttf'),
    'Rubik-SemiBold': require('../assets/fonts/Rubik-SemiBold.ttf'),
    })

    if (!fontsLoaded) {
      return (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <ActivityIndicator size="large" color="#0000ff" />
          </View>
      );
  }

  return (
    <DrawerContentScrollView {...props} >
      <View style={{width: 130, height: 130, borderRadius: 70, backgroundColor: 'white', borderWidth: 1, borderColor: 'black', alignSelf: 'center', marginTop: 40}}>
        <Image source={require('../images/developers/joshua.png')} style={{width: 120, height: 125, borderRadius: 60, alignSelf: 'center', marginTop: 5}}/>
      </View>
      <Text style={{fontSize: 22, marginLeft: 10, marginTop: 20, fontFamily: 'Rubik-SemiBold', color: 'black', alignSelf: 'center'}}>Welcome, Group 4</Text>
       
      <View style={styles.drawerContainer}>
        <DrawerItem label="Home"
        labelStyle={{fontSize: 18, fontFamily: 'Rubik-Medium', color: 'black'}}
        onPress={() => {props.navigation.navigate('Home')}}
        icon={() => (
            <Image 
              source={require('../images/svg/home.png')} 
              style={styles.icons} 
            />
          )} style={styles.drawerItem}/>

        <DrawerItem label="Exercises"
        labelStyle={{fontSize: 18, fontFamily: 'Rubik-Medium', color: 'black'}}
        onPress={() => {props.navigation.navigate('Exercises')}}
        icon={() => (
            <Image 
              source={require('../images/svg/exercises.png')} 
              style={styles.exercisesIcon} 
            />
          )}style={styles.drawerItem}/>  



        <DrawerItem label="About"
        labelStyle={{fontSize: 18, fontFamily: 'Rubik-Medium', color: 'black'}}
        onPress={() => {props.navigation.navigate('About')}}
        icon={() => (
            <Image 
              source={require('../images/svg/about.png')} 
              style={styles.aboutIcon} 
            />
          )}style={styles.drawerItem}/> 

        <DrawerItem label="Logout"
        labelStyle={{fontSize: 18, fontFamily: 'Rubik-Medium', color: 'black'}}
        onPress={() => {props.navigation.navigate('Login')}}
        icon={() => (
            <Image 
              source={require('../images/svg/logout.png')}
              style={styles.aboutIcon} 
            />
          )}style={styles.drawerItem}/>





      </View>
            

    </DrawerContentScrollView>
  )
}

export default DrawerNavIcons

const styles = StyleSheet.create({

    icons: {
        width: 25,
        height: 25,
        marginRight: 5,
    },
    drawerContainer: {
      marginTop: 30,
      marginLeft: 30,
    },
    drawerItem: {
      marginTop: 0,
    },
    exercisesIcon: {
      width: 28,
      height: 28,
      marginRight: 5,
    },
    aboutIcon: {
      width: 30,
      height: 30,
      marginRight: 5,
    },
})