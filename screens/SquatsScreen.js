import { View, Text, SafeAreaView, StatusBar, Image, TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import React from 'react';
import styles from '../layouts/SquatsLayout';

const SquatsScreen = ({navigation}) => {

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
            <Text style={styles.title}>Squats</Text>
        </View>

        <ScrollView
        showsVerticalScrollIndicator={false}>
            <View style={styles.basicSquat}>
                <View style={styles.basicTextContent}>
                    <Text style={styles.basicTitle}>Basic Squat</Text>
                    <Text style={styles.basicDesc}>Feet shoulder-width apart, back straight, lower your hips until your thighs are parallel to the ground, then push back up.</Text>
                    <View style={styles.line}/>
                </View>
                <Image source={(require('../images/gif/basicSquat.gif'))} style={styles.basicSquatGif}/>
            </View>

            <View style={styles.jumpSquat}>
                <View style={styles.jumpTextContent}>
                    <Text style={styles.jumpTitle}>Jump Squat</Text>
                    <Text style={styles.jumpDesc}>Perform a basic squat, but explode up into a jump. Great for building power.</Text>
                    <View style={styles.line}/>
                </View>
                <Image source={(require('../images/gif/jumpSquat.gif'))} style={styles.jumpSquatGif}/>
            </View>

            <View style={styles.sumoSquat}>
                <View style={styles.sumoTextContent}>
                    <Text style={styles.sumoTitle}>Sumo Squat</Text>
                    <Text style={styles.sumoDesc}>Feet wider than shoulder-width, toes pointed out. Focuses more on the inner thighs.</Text>
                    <View style={styles.line}/>
                </View>
                <Image source={(require('../images/gif/sumoSquat.gif'))} style={styles.sumoSquatGif}/>
            </View>

            <View style={styles.gobletSquat}>
                <View style={styles.gobletTextContent}>
                    <Text style={styles.gobletTitle}>Goblet Squat</Text>
                    <Text style={styles.gobletDesc}>Hold a weight (like a dumbbell or kettlebell) close to your chest. Adds a core workout to your squats</Text>
                    <View style={styles.line}/>
                </View>
                <Image source={(require('../images/gif/gobletSquat.gif'))} style={styles.gobletSquatGif}/>
            </View>
        </ScrollView>

    </SafeAreaView>
  )
}

export default SquatsScreen