import { View, Text, SafeAreaView, StatusBar, Image, TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native';
import React from 'react';
import { useFonts } from 'expo-font';
import styles from '../layouts/FoamRollingLayout';

const FoamRolling = ({navigation}) => {

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
            <Text style={styles.title}>Foam Rolling</Text>
        </View>

        <ScrollView
        showsVerticalScrollIndicator={false}>
            <View style={styles.foamRolling}>
                <View style={styles.backRollingTextContent}>
                    <Text style={styles.backRollingTitle}>Back Foam Rolling</Text>
                    <Text style={styles.backRollingDesc}>Lie on the foam roller with it placed horizontally under your upper back. Cross your arms over your chest and slowly roll from your upper back to mid-back.</Text>
                    <View style={styles.line}/>
                </View>
                <Image source={(require('../images/gif/backFoamRolling.gif'))} style={styles.backRollingGif}/>
            </View>

            <View style={styles.quadsRolling}>
                <View style={styles.quadsRollingTextContent}>
                    <Text style={styles.quadsRollingTitle}>Quads Foam Rolling</Text>
                    <Text style={styles.quadsRollingDesc}>Lie face down with the foam roller under your thighs. Use your arms to roll your body forward and backward, targeting your quadriceps.</Text>
                    <View style={styles.line}/>
                </View>
                <Image source={(require('../images/gif/quadsFoamRolling.gif'))} style={styles.quadsRollingGif}/>
            </View>

            <View style={styles.calvesRolling}>
                <View style={styles.calvesRollingTextContent}>
                    <Text style={styles.calvesRollingTitle}>Calves Foam Rolling</Text>
                    <Text style={styles.calvesRollingDesc}>Sit on the floor with the foam roller under your calves. Lift your hips off the ground and use your hands to roll back and forth from your ankles to just below your knees.</Text>
                    <View style={styles.line}/>
                </View>
                <Image source={(require('../images/gif/calvesFoamRolling.gif'))} style={styles.calvesRollingGif}/>
            </View>

        </ScrollView>
    </SafeAreaView>
  )
}

export default FoamRolling