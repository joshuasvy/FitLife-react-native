import { Text, View, SafeAreaView, StatusBar, ScrollView, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import React from 'react';
import { useFonts } from 'expo-font';
import styles from '../layouts/HomeScreenLayout';

const HomeScreen = ({navigation}) => {

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

        <TouchableOpacity
        onPress={() => navigation.openDrawer()}>
            <Image source={(require('../images/svg/menu.png'))} style={styles.menuBtn}/>
        </TouchableOpacity>


          <Text style={{fontSize: 35, fontFamily: 'Rubik-SemiBold', textAlign: 'center', color: 'black'}}>FitLife</Text>
          <Image source={(require('../images/svg/cart.png'))}style={styles.cartBtn}/>
        </View> 

        <Text style={{fontSize: 23, fontFamily: 'Rubik-Medium', color: 'black', marginTop: 12, marginBottom: 13, marginLeft: 16}}>Categories</Text>

        <View>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            <View style={styles.categorieBox1}>
              <Image source={(require('../images/categories/football.jpg'))} style={styles.football}/>
              <Text style={{fontSize: 25, fontFamily: 'Rubik-Bold', color: 'white', marginTop: 5, marginLeft: 13}}>Sports</Text>
              <Text 
              numberOfLines={3}
              style={{fontSize: 12, fontFamily: 'Rubik-Regular', color: 'white', textAlign: 'left', marginLeft: 15, marginRight: 15}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
              <View style={{flexDirection: 'row', marginTop: 2}}>
              <Image source={(require('../images/svg/rate.png'))} style={styles.rate}/>
              <Text style={{fontSize: 13, fontFamily: 'Rubik-Medium', color: 'white',marginTop: 8, marginLeft: 7}}>4.5</Text>
              </View>
            </View>

            <View style={styles.categorieBox2}>
              <Image source={(require('../images/categories/homeworkout.jpg'))} style={styles.homeworkout}/>
              <Text style={{fontSize: 25, fontFamily: 'Rubik-Bold', color: 'white', marginTop: 5, marginLeft: 13}}>Home Workout</Text>
              <Text 
              numberOfLines={3}
              style={{fontSize: 12, fontFamily: 'Rubik-Regular', color: 'white', textAlign: 'left', marginLeft: 15, marginRight: 15}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
              <View style={{flexDirection: 'row', marginTop: 2}}>
              <Image source={(require('../images/svg/rate.png'))} style={styles.rate}/>
              <Text style={{fontSize: 13, fontFamily: 'Rubik-Medium', color: 'white',marginTop: 8, marginLeft: 7}}>4.7</Text>
              </View>
            </View>

            <View style={styles.categorieBox3}>
              <Image source={(require('../images/categories/community.jpg'))} style={styles.community}/>
              <Text style={{fontSize: 25, fontFamily: 'Rubik-Bold', color: 'white', marginTop: 5, marginLeft: 13}}>Community</Text>
              <Text 
              numberOfLines={3}
              style={{fontSize: 12, fontFamily: 'Rubik-Regular', color: 'white', textAlign: 'left', marginLeft: 15, marginRight: 15}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
              <View style={{flexDirection: 'row', marginTop: 2}}>
              <Image source={(require('../images/svg/rate.png'))} style={styles.rate}/>
              <Text style={{fontSize: 13, fontFamily: 'Rubik-Medium', color: 'white',marginTop: 8, marginLeft: 7}}>4.9</Text>
              </View>
            </View>

            <View style={styles.categorieBox4}>
              <Image source={(require('../images/categories/equipment.jpg'))} style={styles.equipment}/>
              <Text style={{fontSize: 25, fontFamily: 'Rubik-Bold', color: 'white', marginTop: 5, marginLeft: 13}}>Equipment</Text>
              <Text 
              numberOfLines={3}
              style={{fontSize: 12, fontFamily: 'Rubik-Regular', color: 'white', textAlign: 'left', marginLeft: 15, marginRight: 15}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
              <View style={{flexDirection: 'row', marginTop: 2}}>
              <Image source={(require('../images/svg/rate.png'))} style={styles.rate}/>
              <Text style={{fontSize: 13, fontFamily: 'Rubik-Medium', color: 'white',marginTop: 8, marginLeft: 7}}>5.0</Text>
              </View>
            </View>
          </ScrollView>
        </View>

        <Text style={{fontSize: 26, fontFamily: 'Rubik-Medium', color: 'black', marginLeft: 15}}>For you</Text>
        <Text style={{fontSize: 15, fontFamily: 'Rubik-Regular', color: 'black', marginLeft: 15, marginBottom: 8}}>Suggestions based on your interest</Text>

          <ScrollView
          showsVerticalScrollIndicator={false}>
            <View style={styles.content1}>
              <Image source={(require('../images/content/homeContent1.jpg'))} style={styles.contentImage1}/>
              <Text style={{fontSize: 25, fontFamily: 'Rubik-SemiBold', color: 'white', position: 'absolute', marginLeft: 13}}>Dynamic Stretching</Text>
              <TouchableOpacity style={styles.moveBtn}
              onPress={() => navigation.navigate('Dynamic')}>
                <Image source={(require('../images/svg/move.png'))}
                style={styles.moveIcon}/>
              </TouchableOpacity>
            </View>

            <View style={styles.content2}>
              <Image source={(require('../images/content/homeContent2.jpg'))} style={styles.contentImage1}/>
              <Text style={{fontSize: 25, fontFamily: 'Rubik-SemiBold', color: 'white', position: 'absolute',  marginLeft: 13}}>Foam Rolling</Text>
              <TouchableOpacity style={styles.moveBtn}
              onPress={() => navigation.navigate('FoamRolling')}>
                <Image source={(require('../images/svg/move.png'))} style={styles.moveIcon}/>
              </TouchableOpacity>
            </View>

            <View style={styles.content2}>
              <Image source={(require('../images/content/homeContent3.jpg'))} style={styles.contentImage1}/>
              <Text style={{fontSize: 25, fontFamily: 'Rubik-SemiBold', color: 'white', position: 'absolute',marginLeft: 13}}>Warmup Cardio</Text>
              <TouchableOpacity style={styles.moveBtn}
              onPress={() => navigation.navigate('Warmup')}>
                <Image source={(require('../images/svg/move.png'))} style={styles.moveIcon}/>
              </TouchableOpacity>
            </View>

            <View style={styles.content2}>
              <Image source={(require('../images/content/homeContent4.jpg'))} style={styles.contentImage1}/>
              <Text style={{fontSize: 25, fontFamily: 'Rubik-SemiBold', color: 'white', position: 'absolute',  marginLeft: 13}}>Breathing Exercise</Text>
              <View style={styles.moveBtn}>
                <Image source={(require('../images/svg/move.png'))} style={styles.moveIcon}/>
              </View>
            </View>

            <View style={styles.content3}>
              <Image source={(require('../images/content/homeContent5.jpg'))} style={styles.contentImage1}/>
              <Text style={{fontSize: 25, fontFamily: 'Rubik-SemiBold', color: 'white', position: 'absolute',  marginLeft: 13}}>Mental Preperation</Text>
              <View style={styles.moveBtn}>
                <Image source={(require('../images/svg/move.png'))} style={styles.moveIcon}/>
              </View>
            </View>

            


          </ScrollView>
    </SafeAreaView>

  )
}

export default HomeScreen