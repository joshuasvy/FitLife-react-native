import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        width: '100%',
        height: 70,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 25,
      },
      menuBtn: {
        width: 40,
        height: 40,
      },  
      cartBtn: {
        width: 28,
        height: 28,
      },
      card: {
        width: 355,
        height: 224,
        borderWidth: 1,
        borderColor: 'black',
        alignSelf: 'center',
        borderRadius: 25,
        marginTop: 20,
        justifyContent: 'center',
        shadowColor: 'black',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.30,
        shadowRadius: 10,
        elevation: 8,
      },
      cardImage: {
        width: 355,
        height: 224,
        borderRadius: 25,
      },
      exercise1: { // push ups
        width: 365,
        height: 308,
        marginTop: 10,
        alignSelf: 'center',
      },
      exerciseImage1: {
        width: 150,
        height: 130,
        marginLeft: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginTop: 7,
      },
      exerciseContent1: {
        width: 160,
        height: 145,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
      },
      titleContent1: { 
        width: 170,
        height: 135,
        position: 'absolute',
        right: 0,
        marginTop: 10,
      },
      exercise2: { // squats
        width: 365,
        height: 145,
        marginTop: 160,
        alignSelf: 'center',
        position: 'absolute',
      },
      exercise3: { // jumping jacks
        width: 385,
        height: 308,
        marginTop: 10,
        alignSelf: 'center',
      },
      exercise4: { // harmstring stretch
        width: 385,
        height: 145,
        marginTop: 160,
        alignSelf: 'center',
        position: 'absolute',
      },
      titleContent2: {
        width: 190,
        height: 135,
        position: 'absolute',
        right: 0,
        marginTop: 10,
      },
      card2: {
        width: 365,
        height: 165,
        alignSelf: 'center',
        borderRadius: 25,
        justifyContent: 'center',
        marginTop: 8,
        shadowColor: 'black',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.30,
        shadowRadius: 5,
        elevation: 7,
      },
      cardImage2: {
        width: 365,
        height: 165,
        alignSelf: 'center',
        borderRadius: 25,
        justifyContent: 'center',
      },
      moveBtn: {
        width: 45, 
        height: 45, 
        position: 'absolute',
        backgroundColor: 'white',
        borderRadius: 50, 
        right: 0, 
        bottom: 0,
        marginBottom: 15,
        marginRight: 15,
        justifyContent: 'center',
        alignItems: 'center',
      },
      moveIcon: {
        width: 35,
        height: 35,
      },
      beginnerContent:{
        width: 368,
        height: 355,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        marginBottom: 20,
        alignSelf: 'center',
      },
      contentChest: {
        width: 181,
        height: 171,   
        borderRadius: 20,
        shadowColor: 'black',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.10,
        shadowRadius: 10,
        elevation: 9,
      },
      contentArm: {
        width: 181,
        height: 171,
        borderRadius: 20,
        shadowColor: 'black',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.10,
        shadowRadius: 10,
        elevation: 9,
      },
      imageChest: {
        width: 173,
        height: 165,   
        borderRadius: 20,
      },
      contentLegs: {
        width: 181,
        height: 171,   
        borderRadius: 20,
        position: 'absolute',
        bottom: 0,
        shadowColor: 'black',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.10,
        shadowRadius: 10,
        elevation: 9,
      },
      contentAbs: {
        width: 181,
        height: 171,   
        borderRadius: 20,
        position: 'absolute',
        bottom: 0,
        right: 0,
        shadowColor: 'black',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.10,
        shadowRadius: 10,
        elevation: 9,
      },
      favoritesChest: {
        width: 35,
        height: 35,
        borderRadius: 20,
        backgroundColor: 'white',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        right: 0,
        marginTop: 12,
        marginRight: 18,
      },
      favoritesIcon: {
        width: 18,
        height: 18,
      },
      contentChestTxt: {
        width: 181,
        height: 171,
        borderRadius: 20,
        position: 'absolute',
      },
      favoritesArm: {
        width: 35,
        height: 35,
        borderRadius: 20,
        backgroundColor: 'white',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        right: 0,
        marginTop: 12,
        marginRight: 18,
      },
      contentArmTxt: {
        width: 181,
        height: 171,
        borderRadius: 20,
        position: 'absolute',
        right: 0,
      },
      favoritesLegs: {
        width: 35,
        height: 35,
        borderRadius: 20,
        backgroundColor: 'white',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 0,
        left: 0,
        marginBottom: 123,
        marginLeft: 128,
      },
      contentLegsTxt: {
        width: 181,
        height: 171,
        borderRadius: 20,
        position: 'absolute',
        bottom: 0,
      },
           
})

export default styles;