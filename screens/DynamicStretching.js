import { Text, View, ActivityIndicator, SafeAreaView, StatusBar, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useFonts } from 'expo-font';
import styles from '../layouts/DynamicLayout';

export default function DynamicStretching({navigation}) {

    const [fontsLoaded] = useFonts({
        'Rubik-Black': require('../assets/fonts/Rubik-Black.ttf'),
        'Rubik-Bold': require('../assets/fonts/Rubik-Bold.ttf'),
        'Rubik-Regular': require('../assets/fonts/Rubik-Regular.ttf'),
        'Rubik-Medium': require('../assets/fonts/Rubik-Medium.ttf'),
        'Rubik-SemiBold': require('../assets/fonts/Rubik-SemiBold.ttf'),
      });

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
            <Text style={styles.title}>Dynamic Stretching</Text>
        </View>

        <View style={styles.legSwings}>
            <View style={styles.textContent}>
                <Text style={styles.legSwingsTitle}>Leg Swings</Text>
                <Text style={styles.legSwingsDesc}>Do this 10 times on each leg.</Text>
                <View style={styles.line}/>
            </View>
            <Image source={(require('../images/gif/legSwings.gif'))} style={styles.legSwingsGif}/>
        </View>

        <View style={styles.armCircle}>
            <View style={styles.textContent}>
                <Text style={styles.armCircleTitle}>Arm Circle</Text>
                <Text style={styles.legSwingsDesc}>Make small circles forward for 30 seconds, then backward for 30 seconds.</Text>
                <View style={styles.line1}/>
            </View>
            <Image source={(require('../images/gif/armCircles.gif'))} style={styles.armCircleGif}/>
        </View>

        <View style={styles.walkingLunges}>
            <View style={styles.textContent}>
                <Text style={styles.walkingLungesTitle}>Walking Lunges</Text>
                <Text style={styles.walkingLungesDesc}>sjfjsi sj sfsfa sgawrhiqwrh hfjhfsdjfhshew gdhusgus qwrt3 3ikf.</Text>
                <View style={styles.line1}/>
            </View>
            <Image source={(require('../images/gif/walkingLunges.gif'))} style={styles.walkingLungesGif}/>
        </View>

    </SafeAreaView>
  )
}
