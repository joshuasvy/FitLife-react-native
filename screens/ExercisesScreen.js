import { View, Text, ActivityIndicator, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native';
import React from 'react';
import { useFonts } from 'expo-font';
import styles from '../layouts/ExercisesLayout';
import { StatusBar } from 'react-native';

const ExercisesScreen = ({ navigation }) => {

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
      <ScrollView
      showsVerticalScrollIndicator={false}>
        <View style={styles.header}> 

        <TouchableOpacity
        onPress={() => navigation.openDrawer()}>
            <Image source={(require('../images/svg/menu.png'))} style={styles.menuBtn}/>
        </TouchableOpacity>
          <Text style={{fontSize: 35, fontFamily: 'Rubik-SemiBold', textAlign: 'center', color: 'black'}}>FitLife</Text>
          <Image source={(require('../images/svg/cart.png'))}style={styles.cartBtn}/>
        </View> 

        <View style={styles.card}>
          <Image source={(require('../images/card/card1.jpg'))} style={styles.cardImage}/>
          <Text style={{fontSize: 23, fontFamily: 'Rubik-SemiBold', color: 'white', position: 'absolute', marginLeft: 13}}>Stay active, stay in shape</Text>
        </View>

        <Text style={{fontSize: 23, fontFamily: 'Rubik-Medium', color: 'black', marginTop: 20, marginLeft: 15}}>Picks for you</Text>

        <View>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            
            <View style={styles.exercise1}>
                <View style={styles.exerciseImage1}>
                  <Image source={(require('../images/content/exerciseContent1.jpg'))} style={styles.exerciseContent1}/>
                </View>

                <View style={styles.titleContent1}>
                  <TouchableOpacity
                  onPress={() => navigation.navigate('PushUps')}>
                    <Text style={{fontSize: 24,
                    fontFamily: 'Rubik-SemiBold',
                    color: 'black',}}>Push ups</Text>
                  </TouchableOpacity>
                  <Text style={{fontSize: 14, fontFamily: 'Rubik-Regular', color: 'black', lineHeight: 22, marginTop: 5}}>3 sets of 10-12 reps {"\n"}5 mins</Text>
                  <View style={{width: 170, height: 1.5, backgroundColor: '#ABABAB', position: 'absolute', bottom: 0}}/>
                </View>
                
                <View style={styles.exercise2}>
                  <View style={styles.exerciseImage1}>
                    <Image source={(require('../images/content/exerciseContent2.jpg'))} style={styles.exerciseContent1}/>
                  </View>

                  <View style={styles.titleContent1}>
                    <TouchableOpacity
                    onPress={() => navigation.navigate('Squats')}>
                      <Text style={{fontSize: 24,
                      fontFamily: 'Rubik-SemiBold',
                      color: 'black',}}>Squats</Text>
                    </TouchableOpacity>
                    <Text style={{fontSize: 14, fontFamily: 'Rubik-Regular', color: 'black', lineHeight: 22, marginTop: 5}}>3 sets of 12-15 reps {"\n"}5 mins</Text>
                    <View style={{width: 170, height: 1.5, backgroundColor: '#ABABAB', position: 'absolute', bottom: 0}}/>
                  </View>
              </View>
            </View>

            <View style={styles.exercise1}>
                <View style={styles.exerciseImage1}>
                  <Image source={(require('../images/content/exerciseContent3.jpg'))} style={styles.exerciseContent1}/>
                </View>

                <View style={styles.titleContent1}>
                  <Text style={{fontSize: 24,
                  fontFamily: 'Rubik-SemiBold',
                  color: 'black',}}>Planking</Text>
                  <Text style={{fontSize: 14, fontFamily: 'Rubik-Regular', color: 'black', lineHeight: 22, marginTop: 5}}>30 seconds to 2 minutes</Text>
                  <View style={{width: 170, height: 1.5, backgroundColor: '#ABABAB', position: 'absolute', bottom: 0}}/>
                </View>
                
                <View style={styles.exercise2}>
                  <View style={styles.exerciseImage1}>
                    <Image source={(require('../images/content/exerciseContent4.jpg'))} style={styles.exerciseContent1}/>
                  </View>

                  <View style={styles.titleContent1}>
                    <Text style={{fontSize: 24,
                    fontFamily: 'Rubik-SemiBold',
                    color: 'black',}}>High Knees</Text>
                    <Text style={{fontSize: 14, fontFamily: 'Rubik-Regular', color: 'black', lineHeight: 22, marginTop: 5}}>3 sets of 30 seconds</Text>
                    <View style={{width: 170, height: 1.5, backgroundColor: '#ABABAB', position: 'absolute', bottom: 0}}/>
                  </View>
              </View>
            </View>

            <View style={styles.exercise3}>
                <View style={styles.exerciseImage1}>
                  <Image source={(require('../images/content/exerciseContent5.jpg'))} style={styles.exerciseContent1}/>
                </View>

                <View style={styles.titleContent2}>
                  <Text style={{fontSize: 22,
                  fontFamily: 'Rubik-SemiBold',
                  color: 'black',}}>Jumping Jacks</Text>
                  <Text style={{fontSize: 14, fontFamily: 'Rubik-Regular', color: 'black', lineHeight: 22, marginTop: 5}}>3 sets of 30 seconds</Text>
                  <View style={{width: 170, height: 1.5, backgroundColor: '#ABABAB', position: 'absolute', bottom: 0}}/>
                </View>
                
                <View style={styles.exercise4}>
                  <View style={styles.exerciseImage1}>
                    <Image source={(require('../images/content/exerciseContent6.jpg'))} style={styles.exerciseContent1}/>
                  </View>

                  <View style={styles.titleContent2}>
                    <Text style={{fontSize: 21,
                    fontFamily: 'Rubik-SemiBold',
                    color: 'black',}}>Hamstring Stretch</Text>
                    <Text style={{fontSize: 14, fontFamily: 'Rubik-Regular', color: 'black', lineHeight: 22, marginTop: 5}}>20-30 seconds {"\n"}3 times</Text>
                    <View style={{width: 170, height: 1.5, backgroundColor: '#ABABAB', position: 'absolute', bottom: 0}}/>
                  </View>

              </View>
            </View>
          </ScrollView>
        </View>

        <Text style={{fontSize: 23, fontFamily: 'Rubik-Medium', color: 'black', marginTop: 20, marginLeft: 15}}>With equipment</Text>
        
        
        <View style={styles.card2}>
          <Image source={(require('../images/card/card2.jpg'))} style={styles.cardImage2}/>
          <View style={styles.moveBtn}>
            <Image source={(require('../images/svg/move.png'))} style={styles.moveIcon}/>
          </View>
        </View>
        
          <Text style={{fontSize: 23, fontFamily: 'Rubik-Medium', color: 'black', marginTop: 20, marginLeft: 15}}>For beginners</Text>

          <View style={styles.beginnerContent}>
            <View style={styles.contentChest}>
              <Image source={(require('../images/subSection/sectionChest.jpg'))} style={styles.imageChest}/>
              <View style={styles.favoritesChest}>
                <Image source={(require('../images/svg/favorites.png'))} style={styles.favoritesIcon}/>
              </View>
              <View style={styles.contentChestTxt}>
                <Text style={{fontSize: 24,
                fontFamily: 'Rubik-SemiBold',
                color: 'white',
                position: 'absolute',
                marginTop: 20,
                marginLeft: 12,}}>Chest</Text>
                <Text style={{fontSize: 12,
                fontFamily: 'Rubik-Regular',
                color: 'white',
                position: 'absolute',
                bottom: 0,
                left: 0,
                marginLeft: 10,
                marginRight: 10,
                marginBottom: 35}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</Text>
              </View>

            </View>
            <View style={styles.contentArm}>
              <Image source={(require('../images/subSection/sectionArm.jpg'))} style={styles.imageChest}/>
            </View>
            <View style={styles.favoritesArm}>
                <Image source={(require('../images/svg/favorites.png'))} style={styles.favoritesIcon}/>
            </View>
            <View style={styles.contentArmTxt}>
                <Text style={{fontSize: 24,
                fontFamily: 'Rubik-SemiBold',
                color: 'white',
                position: 'absolute',
                marginTop: 20,
                marginLeft: 12}}>Arm</Text>
                <Text style={{fontSize: 12,
                fontFamily: 'Rubik-Regular',
                color: 'white',
                position: 'absolute',
                bottom: 0,
                left: 0,
                marginLeft: 10,
                marginRight: 10,
                marginBottom: 35}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</Text>
              </View>
            
            <View style={styles.contentLegs}>
              <Image source={(require('../images/subSection/sectionLegs.jpg'))} style={styles.imageChest}/>
            </View>
            <View style={styles.favoritesLegs}>
                <Image source={(require('../images/svg/favorites.png'))} style={styles.favoritesIcon}/>
            </View>
            <View style={styles.contentLegsTxt}>
                <Text style={{fontSize: 24,
                fontFamily: 'Rubik-SemiBold',
                color: 'white',
                position: 'absolute',
                marginTop: 20,
                marginLeft: 12}}>Legs</Text>
                <Text style={{fontSize: 12,
                fontFamily: 'Rubik-Regular',
                color: 'white',
                position: 'absolute',
                bottom: 0,
                left: 0,
                marginLeft: 10,
                marginRight: 10,
                marginBottom: 35}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</Text>
              </View>

            <View style={styles.contentAbs}>
              <Image source={(require('../images/subSection/sectionAbs.jpg'))} style={styles.imageChest}/>
              <View style={styles.favoritesLegs}>
                <Image source={(require('../images/svg/favorites.png'))} style={styles.favoritesIcon}/>
              </View>
              <View style={styles.contentLegsTxt}>
                <Text style={{fontSize: 24,
                fontFamily: 'Rubik-SemiBold',
                color: 'white',
                position: 'absolute',
                marginTop: 20,
                marginLeft: 12}}>Abs</Text>
                <Text style={{fontSize: 12,
                fontFamily: 'Rubik-Regular',
                color: 'white',
                position: 'absolute',
                bottom: 0,
                left: 0,
                marginLeft: 10,
                marginRight: 10,
                marginBottom: 35}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</Text>
              </View>
            </View>

          </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default ExercisesScreen;