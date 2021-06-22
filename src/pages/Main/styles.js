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
})

export default styles
