import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        width: 345,
        height: 70,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 32,
    },
    goBack: {
        width: 40,
        height: 40,
        borderRadius: 30,
        backgroundColor: '#434343',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 58,
        marginLeft: 15
    },
    backIcon: {
        width: 20,
        height: 20,
    },
    title: {
        fontSize: 28,
        fontFamily: 'Rubik-SemiBold',
        color: 'black',
        textAlign: 'center',
    },
    pushUp: {
        width: 345,
        height: 215,
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 20,
    },
    textContent:{
        width: 190,
        height: 230, 
        position: 'absolute',
        right: 0,
        top: 0,
    },
    pushUpTitle:{
        fontSize: 21,
        fontFamily: 'Rubik-Medium',
        color: 'black',
        textAlign: 'left',
        position: 'absolute',
        right: 0,
        top: 0,
        marginRight: 55,
        marginTop: 35,
    },
    pushUpDesc: {
        fontSize: 13,
        fontFamily: 'Rubik-Regular',
        textAlign: 'left',
        position: 'absolute',
        right: 0,
        marginTop: 110,
        marginLeft: 30
    },
    line: {
        width: 155,
        height: 1,
        backgroundColor: 'black',
        alignSelf: 'flex-end',
        position: 'absolute',
        bottom: 0,  
    },
    pushUpGif: {
        width: 170,
        height: 220,
        alignSelf: 'flex=start',
        marginLeft: 0,
        marginTop: 45
    },
    diamondTextContent:{
        width: 190,
        height: 215, 
        position: 'absolute',
        right: 0,
        top: 0,
        marginTop: 10
    },
    diamondTitle:{
        fontSize: 21,
        fontFamily: 'Rubik-Medium',
        color: 'black',
        textAlign: 'left',
        position: 'absolute',
        right: 0,
        top: 0,
        marginRight: 56,
        marginTop: 35,
    },
    diamondDesc: {
        fontSize: 13,
        fontFamily: 'Rubik-Regular',
        textAlign: 'left',
        position: 'absolute',
        right: 0,
        marginTop: 110,
        marginLeft: 25
    },
    diamondPushUpGif: {
        width: 190,
        height: 220,
        alignSelf: 'flex=start',
        marginLeft: 0,
        marginTop: 45,
    },
    plyometricTitle:{
        fontSize: 21,
        fontFamily: 'Rubik-Medium',
        color: 'black',
        textAlign: 'left',
        position: 'absolute',
        right: 0,
        top: 0,
        marginRight: 42,
        marginTop: 35,
    },
    plyometricPushUpGif: {
        width: 180,
        height: 225,
        alignSelf: 'flex=start',
        marginLeft: 0,
        marginTop: 45,
    },
    oneArmPushUp: {
        width: 345,
        height: 215,
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 20,
        marginBottom: 60
    },
    oneArmTitle:{
        fontSize: 21,
        fontFamily: 'Rubik-Medium',
        color: 'black',
        textAlign: 'left',
        position: 'absolute',
        right: 0,
        top: 0,
        marginRight: 5,
        marginTop: 40,
    },
    oneArmTextContent:{
        width: 190,
        height: 240, 
        position: 'absolute',
        right: 0,
        top: 0,
    },

})

export default styles;