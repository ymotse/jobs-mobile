import {
    StyleSheet,
    Platform,
} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: Platform.OS === 'ios' ? 25 : 30,
        backgroundColor: '#fff',
    },
    
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#fff',
        width: '100%',
    },
    
    title: {
        fontFamily: 'Poppins-Regular',
        fontSize: 35,
    },
    
    containerButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    
    containerList: {
        flex: 1,
        margin: 10,
        width: '90%',
    },
    
    buttonNewJob: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        width: 60,
        bottom: 20,
        right: 20,
        backgroundColor: '#fff',
        borderRadius: 100,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
    },
})

export default styles
