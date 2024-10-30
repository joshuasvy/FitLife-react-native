import { StyleSheet } from 'react-native';
import { ImageBackground } from 'react-native-web';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 1,
        resizeMode: 'cover',
    },
    quickStart: {
        fontSize: 24,
        fontFamily: 'Rubik-SemiBold',
        color: 'white',
        textAlign: 'left',
        marginLeft: 28,
        marginTop: 30,
    },
    quickStartImg: {
        height: 23,
        width: 23,
        marginTop: 36,
        marginLeft: 12
    },
    title: {
        fontSize: 32,
        fontFamily: 'Rubik-Bold',
        color: 'white',
        textAlign: 'center',
        marginTop: 310,
        marginBottom: 15
    },
    text: {
        fontSize: 14,
        fontFamily: 'Rubik-Regular',
        color: 'white',
        position: 'absolute',
        marginTop: 25,
        marginLeft: 50,
        marginRight: 25
    },
    startBtn: {
        width: 170,
        height: 56,
        borderRadius: 30,
        backgroundColor: '#646465',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 60, 
    },
    btnText: {
        fontSize: 17,
        fontFamily: 'Rubik-SemiBold',
        color: 'white',
        textAlign: 'center',
    },
    checkBox: {
        width: 300,
        height: 20,
        alignSelf: 'center',
        marginTop: 8,
        marginLeft: 43,
    }
})

export default styles;