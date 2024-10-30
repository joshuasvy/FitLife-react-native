import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, Image, ScrollView, ActivityIndicator } from 'react-native';
import React from 'react';
import { useFonts } from 'expo-font';
import styles from '../layouts/PushUpsLayout';

const PushUps = ({navigation}) => {

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
    <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="white"/>
        <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <View style={styles.goBack}>
                    <Image source={require('../images/svg/goBack.png')} style={styles.backIcon} />
                </View>
            </TouchableOpacity>
            <Text style={styles.title}>Push Ups</Text>
        </View>
        <ScrollView
        showsVerticalScrollIndicator={false}>
        <View style={styles.pushUp}>
            <View style={styles.textContent}>
                <Text style={styles.pushUpTitle}>Standard Push Ups</Text>
                <Text style={styles.pushUpDesc}>Hands shoulder-width apart, body in a straight line. Lower yourself until your chest nearly touches the floor, then push back up.</Text>
                <View style={styles.line}/>
            </View>
            <Image source={(require('../images/gif/standardPushUp.gif'))} style={styles.pushUpGif}/>
        </View>

        <View style={styles.pushUp}>
            <View style={styles.diamondTextContent}>
                <Text style={styles.diamondTitle}>Diamond Push Ups</Text>
                <Text style={styles.diamondDesc}>Form a diamond shape with your hands under your chest. Really works your triceps.</Text>
                <View style={styles.line}/>
            </View>
            <Image source={(require('../images/gif/diamondPushUp.gif'))} style={styles.diamondPushUpGif}/>
        </View>

        <View style={styles.pushUp}>
            <View style={styles.diamondTextContent}>
                <Text style={styles.plyometricTitle}>Plyometric Push Ups</Text>
                <Text style={styles.diamondDesc}>Explode off the ground and clap your hands before landing. Great for power and explosiveness.</Text>
                <View style={styles.line}/>
            </View>
            <Image source={(require('../images/gif/plyometricPushUp.gif'))} style={styles.plyometricPushUpGif}/>
        </View>

        <View style={styles.oneArmPushUp}>
            <View style={styles.oneArmTextContent}>
                <Text style={styles.oneArmTitle}>One-Arm Push Ups</Text>
                <Text style={styles.diamondDesc}>Feet wider than shoulder-width, one arm behind your back. Lower and lift with one arm. Ultimate test of strength and balance.</Text>
                <View style={styles.line}/>
            </View>
            <Image source={(require('../images/gif/oneHandPushUp.gif'))} style={styles.plyometricPushUpGif}/>
        </View>

        </ScrollView>
    </SafeAreaView>
  )
}

export default PushUps