import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 1,
        resizeMode: 'cover',
    },
    login: {
        width: 347,
        height: 555,
        backgroundColor: 'transparent',
        alignSelf: 'center',
        marginTop: 65,
        borderRadius: 35, 
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    title: {
        fontSize: 30,
        fontFamily: 'Rubik-Bold',
        color: 'white',
        textAlign: 'center',
        marginTop: 180,
    },
    googlebtn: {
        height: 45,
        width: 255,
        marginTop: 25,
        borderRadius: 30,
        backgroundColor: 'white',
        borderColor: 'black',
        borderStyle: 'solid',
        borderWidth: 1.5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.5,
        shadowRadius: 6.27,
        elevation: 8,
    },
    icon1: {
        height: 22,
        width: 22,
        marginRight: 11,
    },
    facebookbtn: {
        height: 45,
        width: 255,
        marginTop: 11.5,
        borderRadius: 30,
        backgroundColor: 'white',
        borderColor: 'black',
        borderStyle: 'solid',
        borderWidth: 1.5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        // shadowing
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.5,
        shadowRadius: 6.27,
        elevation: 8,
    },
    icon2: {
        height: 24,
        width: 24,
        marginRight: 11,
    },
    line: {
        color: '#C2C2C2',
        width: 300,
        height: 1.5,
        marginTop: 23,
        alignSelf: 'center',
        backgroundColor: '#C2C2C2',
    },
    username: {
        width: 245,
        height: 44,
        borderWidth: 1,
        padding: 10,
        borderRadius: 30,
        alignSelf: 'center',
        marginTop: 23,
        backgroundColor: 'white',
        fontFamily: 'Rubik-Regular',
        fontSize: 15,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.3,
        shadowRadius: 6.27,
        elevation: 6,
        paddingLeft: 15,
    },
    password: {
        width: 245,
        height: 44,
        borderWidth: 1,
        padding: 10,
        borderRadius: 30,
        alignSelf: 'center',
        marginTop: 14,
        backgroundColor: 'white',
        fontFamily: 'Rubik-Regular',
        fontSize: 15,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.3,
        shadowRadius: 6.27,
        elevation: 6,
        paddingLeft: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    icon: {
        marginRight: 10
    },
    forgot: {
        fontSize: 15,
        fontFamily: 'Rubik-Medium',
        color: 'white',
        textAlign: 'left',
        marginLeft: 70,
        marginTop: 9,
    },
    loginbtn: {
        height: 52,
        width: 180,
        borderRadius: 30,
        backgroundColor: '#646465',
        alignSelf: 'center',
        marginTop: 23,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.3,
        shadowRadius: 6.27,
        elevation: 6,
    },
    logintxt: {
        fontSize: 19,
        fontFamily: 'Rubik-SemiBold',
        color: 'white',
        textAlign: 'center',
    },
    account: {
        fontSize: 16,
        fontFamily: 'Rubik-Medium',
        color: 'white',
        textAlign: 'center',
        marginTop: 22,
    },
    signup: {
        fontSize: 17,
        fontFamily: 'Rubik-Bold',
        color: 'white',
        textAlign: 'center',
    },
})

export default styles;