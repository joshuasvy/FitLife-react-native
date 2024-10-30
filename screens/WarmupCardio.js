import { View, Text, SafeAreaView, StatusBar, ActivityIndicator, ScrollView, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useFonts } from 'expo-font';
import styles from '../layouts/WarmupLayout';

const WarmupCardio = ({navigation}) => {

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
            <Text style={styles.title}>Warmup Cardio</Text>
        </View>

        <ScrollView>
            <View style={styles.skaters}>
                <View style={styles.skatersTextContent}>
                    <Text style={styles.skatersTitle}>Skaters</Text>
                    <Text style={styles.skatersDesc}>Leap sideways from one leg to the other, simulating a speed skater’s movement. Focus on balance and keeping the motion fluid.</Text>
                    <View style={styles.line}/>
                </View>
                <Image source={(require('../images/gif/skaters.gif'))} style={styles.skatersGif}/>
            </View>

            <View style={styles.mountainClimber}>
                <View style={styles.mountainClimberTextContent}>
                    <Text style={styles.mountainClimberTitle}>Mountain Climber</Text>
                    <Text style={styles.mountainClimberDesc}>Get into a push-up position, then alternate bringing your knees to your chest as quickly as you can. Great for core and cardio.</Text>
                    <View style={styles.line}/>
                </View>
                <Image source={(require('../images/gif/mountainClimber.gif'))} style={styles.mountainClimberGif}/>
            </View>

            <View style={styles.sideShuffle}>
                <View style={styles.sideShuffleTextContent}>
                    <Text style={styles.sideShuffleTitle}>Mountain Climber</Text>
                    <Text style={styles.sideShuffleDesc}>Get into a push-up position, then alternate bringing your knees to your chest as quickly as you can. Great for core and cardio.</Text>
                    <View style={styles.line}/>
                </View>
                <Image source={(require('../images/gif/sideShuffle.gif'))} style={styles.sideShuffleGif}/>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default WarmupCardio