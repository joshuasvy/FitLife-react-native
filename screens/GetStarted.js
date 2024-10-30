import { View, Text, SafeAreaView, StatusBar, ActivityIndicator, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import { useState } from 'react';
import CheckBox from 'react-native-check-box';
import styles from '../layouts/GetStartedLayout';
  
const GetStarted = ({ navigation }) => {
    const [fontsLoaded] = useFonts({
      'Rubik-Black': require('../assets/fonts/Rubik-Black.ttf'),
      'Rubik-Bold': require('../assets/fonts/Rubik-Bold.ttf'),
      'Rubik-Regular': require('../assets/fonts/Rubik-Regular.ttf'),
      'Rubik-Medium': require('../assets/fonts/Rubik-Medium.ttf'),
      'Rubik-SemiBold': require('../assets/fonts/Rubik-SemiBold.ttf'),
    });
  
    const [isChecked, setChecked] = useState(false);
  
    if (!fontsLoaded) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    }
  
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent={true}/>
        <ImageBackground source={require('../images/background/getStartedbg.jpg')} style={styles.background}>
          <View style={{ flexDirection: 'row', marginTop: 10 }}>
            <Text style={styles.quickStart}>Quick Start</Text>
            <Image source={(require('../images/svg/quickStart.png'))} style={styles.quickStartImg}/>
          </View>
          <Text style={styles.title}>Welcome to FitLife</Text>
          <View>
            <View 
              style={{ 
                width: 2, 
                height: 172, 
                backgroundColor: '#646465', 
                marginTop: 13, 
                marginLeft: 30,
              }}/>
            <Text style={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
            </Text>
          </View>
          <TouchableOpacity style={styles.startBtn}
          onPress={() => navigation.navigate('Login')}>
            <Text style={styles.btnText}>Get Started</Text>
          </TouchableOpacity>
          <CheckBox 
            style={styles.checkBox}
            isChecked={isChecked} 
            onClick={() => setChecked(!isChecked)}
            rightText='I accept the terms and conditions'
            rightTextStyle={{ color: 'white', fontFamily: 'Rubik-Regular', fontSize: 13 }}
            checkBoxColor='white'
          />

        </ImageBackground>
      </SafeAreaView>
    );
  };
  
  export default GetStarted;
  