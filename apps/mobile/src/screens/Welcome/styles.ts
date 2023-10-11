import {StyleSheet} from 'react-native'


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0d0d0d',
        alignItems: 'center',
        justifyContent: 'center',
    },
    messageContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 20,
    },
    welcomeMessage: {
        color: 'white',
        fontSize: 30,
    },
    smallText: {
        color: '#d0d0d0',
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 0,
        width: '90%',
        gap: 20
    },
    registerButton: {
        backgroundColor: '#FCE38A',
        width: '100%',
        paddingVertical: 13,
        borderRadius: 7,
    },
    loginButton: {
        backgroundColor: '#FFFFFF',
        width: '100%',
        padding: 10,
        borderRadius: 7,
        paddingVertical: 13,
    },
    buttonText: {
        textAlign: 'center',
        fontWeight: 'bold'
    }
})
