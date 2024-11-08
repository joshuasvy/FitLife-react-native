import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        width: 345,
        height: 90,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 27
    },
    goBack: {
        width: 40,
        height: 40,
        borderRadius: 30,
        backgroundColor: '#434343',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 24,
    },
    backIcon: {
        width: 20,
        height: 20,
    },
    title: {
        fontSize: 26,
        fontFamily: 'Rubik-SemiBold',
        color: 'black',
        textAlign: 'center',
    },
    description: {
        fontSize: 14,
        fontFamily: 'Rubik-Regular',
        color: 'black',
        textAlign: 'left',
        marginTop: 13,
        marginLeft: 21,
        marginRight: 21,
        lineHeight: 18,
    },
    socialIcons: {
        width: 345,
        height: 50,
        flexDirection: 'row',
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
    },
    facebookIcon: {
        width: 33,
        height: 33,
    },
    textIcon: {
        fontSize: 14,
        fontFamily: 'Rubik-Regular',
        marginLeft: 6,
        marginTop: 5,
    },
    instagramIcon: {
        width: 33,
        height: 33,
        marginLeft: 20,
    },
    subTitle: {
        fontSize: 22,
        fontFamily: 'Rubik-Medium',
        marginTop: 8,
        marginLeft: 20,
        marginBottom: 10,
    },
    developerContent1: {
        width: 360,
        height: 160,
        alignSelf: 'center',
        flexDirection: 'row',
    },
    developerImage: {
        width: 135,
        height: 135,
        borderWidth: 1,
        borderRadius: 75,
        marginLeft: 10,
        marginTop: 10,
    },
    joshuaImage: {
        width: 135,
        height: 133,
        borderRadius: 75,
    },
    developerName: {
        fontSize: 18,
        fontFamily: 'Rubik-Medium',
        marginLeft: 15,
        marginTop: 15, 
    },
    developerRole: {
        fontSize: 15,
        fontFamily: 'Rubik-Regular',
        position: 'absolute',
        right: 0,
        marginTop: 52,
        marginRight: 80,
    },
    line:{
        width: 200,
        height: 1.5,
        backgroundColor: '#868686',
        marginTop: 10,
        position: 'absolute',
        right: 15,
        bottom: 15,
    },
    modalBtn: {
        width: 135,
        height: 33,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: 'black',
        position: 'absolute',
        right: 0,
        marginTop: 88,
        marginRight: 45,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalTxt: {
        fontSize: 14,
        fontFamily: 'Rubik-Regular',
    },
    modalView: {
        flex: 1,
        backgroundColor: 'transparent',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    closeIcon: {
        width: 33,
        height: 22,
        marginTop: 15,
        alignSelf: 'center',
    },
    modalContent: {
        width: '100%',
        height: '45%',
        backgroundColor: '#C0C0C0',
        borderTopLeftRadius: 45,
        borderTopRightRadius: 45,
    },
    titleRole: {
        fontSize: 25,
        fontFamily: 'Rubik-Medium',
        marginTop: 18,
        marginBottom: 5,
        alignSelf: 'center',
    },
    titleDescription: {
        fontSize: 15,
        fontFamily: 'Rubik-Regular',
        padding: 15,
        marginLeft: 15,
        marginRight: 1,
    },
    developerContent2: {
        width: 360,
        height: 160,
        alignSelf: 'center',
        flexDirection: 'row',
        marginTop: 8,
    },
    developerImage2: {
        width: 135,
        height: 135,
        borderWidth: 1,
        borderRadius: 75,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginTop: 10,
    },
    janeImage: {
        width: 100,
        height: 127,
        borderBottomLeftRadius: 55,
        borderBottomRightRadius: 55,
        marginTop: 7,
    },
    danielImage: {
        width: 105,
        height: 127,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        marginTop: 7,
    },
    kurtDaneImage: {
        width: 100,
        height: 129,
        borderBottomLeftRadius: 43,
        borderBottomRightRadius: 43,
        marginTop: 5,
    },
    developerContent3: {
        width: 360,
        height: 160,
        alignSelf: 'center',
        flexDirection: 'row',
        marginTop: 8,
        marginBottom: 20,
    },
    
});

export default styles;