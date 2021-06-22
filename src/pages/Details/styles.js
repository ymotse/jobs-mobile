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
    
    containerTitle: {
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center', 
        marginHorizontal: 20,
    },
    titleIconBack: {
        width: 30,
    },
    titleLabel: {
        flex: 1, 
        backgroundColor: '#fff', 
        justifyContent: 'center', 
        alignItems: 'center',
    },
    titleLabelText: {
        fontSize: 35, 
        fontFamily: 'Poppins-Regular', 
        marginLeft: -30,
    },
    
    containerJobDetails: {
        marginTop: 20,
        width: '90%',
    },
    containerJobDetailsContent: {
        backgroundColor: '#FBFBFB',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#EBEBEB',
        padding: 10,
        marginVertical: 10,
    },
    titleContent: {
        fontFamily: 'Poppins-Medium',
        fontSize: 22,
    },
    textContent: {
        fontFamily: 'Poppins-Light',
        fontSize: 20,
    },
    textAreaContent: {
        height: 150,
    },
    
    containerActions: {
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'space-around',
    },
    buttonUpdate: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
    },
    buttonUpdateText: {
        fontFamily: 'Poppins-Light',
        fontSize: 20,
        marginHorizontal: 10,
        color: '#663300',
    },
    buttonDelete: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
    },
    buttonDeleteText: {
        fontFamily: 'Poppins-Light',
        fontSize: 20,
        marginHorizontal: 10,
        color: '#ff0000',
    },
})

export default styles