import { Text, View, SafeAreaView, StatusBar, Image, ScrollView, TouchableOpacity, Modal, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import { useFonts } from 'expo-font';
import styles from '../layouts/AboutLayout';

const AboutScreen = ({ navigation }) => {

  const [openFirstModal, setOpenFirstModal] = useState(false);
  const [openSecondModal, setOpenSecondModal] = useState(false);
  const [openThirdModal, setOpenThirdModal] = useState(false);
  const [openFourthModal, setOpenFourthModal] = useState(false);
  const [openFifthhModal, setOpenFifthModal] = useState(false);
  const [openSixthModal, setOpenSixthModal] = useState(false);

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
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <View style={styles.goBack}>
                <Image source={require('../images/svg/goBack.png')} style={styles.backIcon} />
            </View>
            </TouchableOpacity>
            <Text style={styles.title}>Learn more about {'\n'}our Developers</Text>
      </View>
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </Text>
      <View style={styles.socialIcons}>
            <Image source={require('../images/svg/facebook.png')} style={styles.facebookIcon} />
            <Text style={styles.textIcon}>facebook.com</Text>
            <Image source={require('../images/svg/instagram.png')} style={styles.instagramIcon} />
            <Text style={styles.textIcon}>instagram.com</Text>
      </View>
      <Text style={styles.subTitle}>Frontend planning with figma</Text>


      <ScrollView
      showsVerticalScrollIndicator={false}>

            <View style={styles.developerContent1}>
                <View style={styles.developerImage}>
                    <Image source={require('../images/developers/joshua.png')} style={styles.joshuaImage} />
                </View>

                <Text style={styles.developerName}>Cortez, Joshua Paul</Text>
                <Text style={styles.developerRole}>• UI Designer</Text>
                <TouchableOpacity style={styles.modalBtn}
                onPress={() => setOpenFirstModal(true)}>
                    <Text style={styles.modalTxt}>Learn More..</Text>
                </TouchableOpacity>
                <View style={styles.line} />

                <Modal visible={openFirstModal}
                animationType='slide'
                transparent={true}>
                    <View style={styles.modalView}>
                        <View style={styles.modalContent}>
                            <TouchableOpacity
                            onPress={() => setOpenFirstModal(false)}>
                            <Image source={require('../images/svg/close.png')} style={styles.closeIcon} />
                            </TouchableOpacity>
                            <Text style={styles.titleRole}>UI Designing</Text>
                            <Text style={styles.titleDescription}>
                            I consider it an essential component in creating a successful digital project. It is the bridge that enables consumers to interact with a project in a smooth and seamless manner. To create a user-friendly and intuitive interface design.
                            </Text>
                        </View>
                    </View>
                </Modal>
            </View>

            <View style={styles.developerContent2}>
                <View style={styles.developerImage2}>
                    <Image source={require('../images/developers/jane.png')} style={styles.janeImage} />
                </View>

                <Text style={styles.developerName}>Asadon, Jane Ann</Text>
                <Text style={styles.developerRole}>• UX Designer</Text>
                <TouchableOpacity style={styles.modalBtn} 
                onPress={() => setOpenSecondModal(true)}>
                    <Text style={styles.modalTxt}>Learn More..</Text>
                </TouchableOpacity>
                <View style={styles.line} />

                <Modal visible={openSecondModal}
                animationType='slide'
                transparent={true}>
                    <View style={styles.modalView}>
                        <View style={styles.modalContent}>
                            <TouchableOpacity onPress={() => setOpenSecondModal(false)}>
                            <Image source={require('../images/svg/close.png')} style={styles.closeIcon} />
                            </TouchableOpacity>
                            <Text style={styles.titleRole}>UX Designing</Text>
                            <Text style={styles.titleDescription}>
                            I consider it an essential component in creating a successful digital project. It is the bridge that enables consumers to interact with a project in a smooth and seamless manner. To create a user-friendly and intuitive interface design.
                            </Text>
                        </View>
                    </View>
                </Modal>
            </View>

            <View style={styles.developerContent2}>
                <View style={styles.developerImage2}>
                    <Image source={require('../images/developers/carla.png')} style={styles.janeImage} />
                </View>

                <Text style={styles.developerName}>Agana, Carla</Text>
                <Text style={styles.developerRole}>• Color Theory</Text>
                <TouchableOpacity style={styles.modalBtn} onPress={() => setOpenThirdModal(true)}>
                    <Text style={styles.modalTxt}>Learn More..</Text>
                </TouchableOpacity>
                <View style={styles.line} />

                <Modal visible={openThirdModal}
                animationType='slide'
                transparent={true}>
                    <View style={styles.modalView}>
                        <View style={styles.modalContent}>
                            <TouchableOpacity onPress={() => setOpenThirdModal(false)}>
                            <Image source={require('../images/svg/close.png')} style={styles.closeIcon} />
                            </TouchableOpacity>
                            <Text style={styles.titleRole}>Color Theory / 60, 30, 10 Rule</Text>
                            <Text style={styles.titleDescription}>
                            Understanding how colors interact with one another and the emotions they may produce, I aimed to create visually stunning and emotionally relevant work that captivates the audience, therefore I chose White and Blue as the color palette for our project. And for the 60,30,10 rule, I plan to build a harmonic and balanced design that attracts the viewer's attention and effectively communicates the intended message.
                            </Text>
                        </View>
                    </View>
                </Modal>
            </View>

            <View style={styles.developerContent2}>
                <View style={styles.developerImage2}>
                    <Image source={require('../images/developers/pegarido.png')} style={styles.janeImage} />
                </View>

                <Text style={styles.developerName}>Pegarido, Rysthel</Text>
                <Text style={styles.developerRole}>• Typography</Text>
                <TouchableOpacity style={styles.modalBtn} onPress={() => setOpenFourthModal(true)}>
                    <Text style={styles.modalTxt}>Learn More..</Text>
                </TouchableOpacity>
                <View style={styles.line} />

                <Modal visible={openFourthModal}
                animationType='slide'
                transparent={true}>
                    <View style={styles.modalView}>
                        <View style={styles.modalContent}>
                            <TouchableOpacity onPress={() => setOpenFourthModal(false)}>
                            <Image source={require('../images/svg/close.png')} style={styles.closeIcon} />
                            </TouchableOpacity>
                            <Text style={styles.titleRole}>Typography & Spacing</Text>
                            <Text style={styles.titleDescription}>
                            When it comes to typeface and spacing, I keep a few basic standards in mind. First, consistency is essential. To get a unified look, I considered using the same font style, size, and color across a design. Second, I consider the hierarchy of information. For headings and titles, use larger fonts or bold text, whereas body material should be written in smaller font. Third, focus on alignment. Make sure the text is properly aligned to provide a clean and professional appearance.
                            </Text>
                        </View>
                    </View>
                </Modal>
            </View>

            <View style={styles.developerContent2}>
                <View style={styles.developerImage2}>
                    <Image source={require('../images/developers/caparal.png')} style={styles.danielImage} />
                </View>

                <Text style={styles.developerName}>Caparal, Daniel</Text>
                <Text style={styles.developerRole}>• User Persona</Text>
                <TouchableOpacity style={styles.modalBtn} onPress={() => setOpenFifthModal(true)}>
                    <Text style={styles.modalTxt}>Learn More..</Text>
                </TouchableOpacity>
                <View style={styles.line} />

                <Modal visible={openFifthhModal}
                animationType='slide'
                transparent={true}>
                    <View style={styles.modalView}>
                        <View style={styles.modalContent}>
                            <TouchableOpacity onPress={() => setOpenFifthModal(false)}>
                            <Image source={require('../images/svg/close.png')} style={styles.closeIcon} />
                            </TouchableOpacity>
                            <Text style={styles.titleRole}>User Persona</Text>
                            <Text style={styles.titleDescription}>
                            FitLife can design a user-friendly app utilizing Physical Education as a guide, and I believe this theme is the best engaging software that suits the needs of busy professionals. This technique not only increases the likelihood that customers would use the app on a regular basis, but it also attracts new users who share similar wants and interests.
                            </Text>
                        </View>
                    </View>
                </Modal>
            </View>

            <View style={styles.developerContent3}>
                <View style={styles.developerImage2}>
                    <Image source={require('../images/developers/kurtdane.png')} style={styles.kurtDaneImage} />
                </View>

                <Text style={styles.developerName}>Perdon, Kurt Dane</Text>
                <Text style={styles.developerRole}>• Lazy Linking</Text>
                <TouchableOpacity style={styles.modalBtn} onPress={() => setOpenSixthModal(true)}>
                    <Text style={styles.modalTxt}>Learn More..</Text>
                </TouchableOpacity>
                <View style={styles.line} />

                <Modal visible={openSixthModal}
                animationType='slide'
                transparent={true}>
                    <View style={styles.modalView}>
                        <View style={styles.modalContent}>
                            <TouchableOpacity onPress={() => setOpenSixthModal(false)}>
                            <Image source={require('../images/svg/close.png')} style={styles.closeIcon} />
                            </TouchableOpacity>
                            <Text style={styles.titleRole}>Lazy Linking Prototype</Text>
                            <Text style={styles.titleDescription}>
                            I thought about implementing Lazy Linking Prototype because it could help speed up the application desgining process. Instead of having to fill out the entire tag for each link on a application, I can simply add a class to the element that they want to make into a link. This saves time and reduces the amount of code required, making it easier to design a well-organized and effective website.
                            </Text>
                        </View>
                    </View>
                </Modal>
            </View>
            

            







      </ScrollView>
    </SafeAreaView>
  );
};

export default AboutScreen;
