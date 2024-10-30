import { View, Text, ImageBackground, SafeAreaView, Image, TextInput, ActivityIndicator, TouchableOpacity } from 'react-native';
import React from 'react';
import { StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import styles from '../layouts/LoginLayout';

export default function LoginScreen({navigation}) {

    const [fontsLoaded] = useFonts({
        'Rubik-Black': require('../assets/fonts/Rubik-Black.ttf'),
        'Rubik-Bold': require('../assets/fonts/Rubik-Bold.ttf'),
        'Rubik-Regular': require('../assets/fonts/Rubik-Regular.ttf'),
        'Rubik-Medium': require('../assets/fonts/Rubik-Medium.ttf'),
        'Rubik-SemiBold': require('../assets/fonts/Rubik-SemiBold.ttf'),
        })
    
        const [username, setUsername] = useState("");
        const [password, setPassword] = useState("");
        const [showPassword, setShowPassword] = useState(false);

        if (!fontsLoaded) {
            return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
            );
        }

  return (
    <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true}/>
        <ImageBackground source={require('../images/background/loginbg.jpg')} style={styles.background} >

            <View style={styles.login}>

                <Text style={styles.title}>Login to FitLife</Text>

                <TouchableOpacity style={styles.googlebtn} 
                activeOpacity={0.1}
                onPress = {() => navigation.navigate('Drawer')}>
                    <Image source={require('../images/svg/google.png')} style={styles.icon1}/>

                        <View style={styles.googletxt}>
                            <Text styles={{
                            fontFamily: 'Rubik-SemiBold', color: 'white'}}>
                                Continue with Google</Text>
                        </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.facebookbtn} 
                activeOpacity={0.1}
                onPress = {() => navigation.navigate('Drawer')}>

                    <Image source={require('../images/svg/facebook.png')} style={styles.icon2}/>

                        <View style={styles.googletxt}>
                            <Text styles={{
                            fontFamily: 'Rubik-SemiBold', color: 'white'}}>
                                Continue with Facebook</Text>
                        </View>
                </TouchableOpacity>

                <View style={styles.line}/>
                
               
                    <View style={styles.username}>
                        <TextInput
                        placeholder='Username'
                        value={username}
                        onChangeText={setUsername}/>
                    </View>
                    <View style={styles.password}>
                        <TextInput
                        placeholder='Password'
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={!showPassword}/>
                        <TouchableOpacity style={styles.icon}
                        onPress={() => setShowPassword(!showPassword)}>
                            <Icon name={showPassword ? 'eye-off' : 'eye'} size={23} />
                        </TouchableOpacity>
                    </View>
                
                
                <Text style={styles.forgot}>Forgot password?</Text> 
                <TouchableOpacity style={styles.loginbtn} 
                activeOpacity={0.1}
                onPress = {() => navigation.navigate('Drawer')}>
                    <Text style={styles.logintxt}>Login</Text>
                </TouchableOpacity>
                
                <View>
                    <Text style={styles.account}>
                        Don't have an account? 
                    <Text style={styles.signup}> Sign up</Text>
                    </Text>
                </View>


            </View>
        </ImageBackground>
    </SafeAreaView>

  )
}
  