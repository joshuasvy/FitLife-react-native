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
        marginTop: 30
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
        fontSize: 25,
        fontFamily: 'Rubik-SemiBold',
        color: 'black',
        textAlign: 'center',
    },
    legSwings: {
        width: 345,
        height: 215,
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 20,
    },
    textContent:{
        width: 190,
        height: 175, 
        position: 'absolute',
        right: 0,
        top: 0,
    },
    legSwingsTitle:{
        fontSize: 21,
        fontFamily: 'Rubik-Medium',
        color: 'black',
        textAlign: 'center',
        position: 'absolute',
        right: 0,
        top: 0,
        marginRight: 37,
        marginTop: 35,
    },
    legSwingsDesc: {
        fontSize: 13,
        fontFamily: 'Rubik-Regular',
        textAlign: 'left',
        position: 'absolute',
        right: 0,
        marginTop: 85,
        marginLeft: 20
    },
    line: {
        width: 155,
        height: 1,
        backgroundColor: 'black',
        alignSelf: 'flex-end',
        position: 'absolute',
        bottom: 0,
        
    },
    legSwingsGif: {
        width: 160,
        height: 210,
        alignSelf: 'flex=start',
        marginLeft: 15
    },
    armCircle: {
        width: 345,
        height: 215,
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 10
    },
    textContent:{
        width: 190,
        height: 175, 
        position: 'absolute',
        right: 0,
        top: 0,
    },
    armCircleTitle:{
        fontSize: 21,
        fontFamily: 'Rubik-Medium',
        color: 'black',
        textAlign: 'center',
        position: 'absolute',
        right: 0,
        top: 0,
        marginRight: 60,
        marginTop: 35,
    },
    legSwingsDesc: {
        fontSize: 13,
        fontFamily: 'Rubik-Regular',
        textAlign: 'left',
        position: 'absolute',
        right: 0,
        marginTop: 85,
        marginLeft: 20
    },
    line1: {
        width: 168,
        height: 1,
        backgroundColor: 'black',
        alignSelf: 'flex-end',
        position: 'absolute',
        bottom: 0,
    },
    armCircleGif: {
        width: 165,
        height: 225,
        alignSelf: 'flex=start',
        marginLeft: 0,
        marginBottom: 35
    },
    walkingLunges: {
        width: 345,
        height: 215,
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 10
    },
    textContent:{
        width: 190,
        height: 175, 
        position: 'absolute',
        right: 0,
        top: 0,
    },
    walkingLungesTitle:{
        fontSize: 21,
        fontFamily: 'Rubik-Medium',
        color: 'black',
        textAlign: 'center',
        position: 'absolute',
        right: 0,
        top: 0,
        marginRight: 5,
        marginTop: 35,
    },
    walkingLungesDesc: {
        fontSize: 13,
        fontFamily: 'Rubik-Regular',
        textAlign: 'left',
        position: 'absolute',
        right: 0,
        marginTop: 85,
        marginLeft: 0
    },
    line1: {
        width: 168,
        height: 1,
        backgroundColor: 'black',
        alignSelf: 'flex-end',
        position: 'absolute',
        bottom: 0,
    },
    walkingLungesGif: {
        width: 165,
        height: 225,
        alignSelf: 'flex=start',
        marginLeft: 5,
        marginBottom: 35

    },
})

export default styles;