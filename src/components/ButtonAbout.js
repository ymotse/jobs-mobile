import React, { Component } from 'react'
import { 
    Text, 
    TouchableOpacity, 
    StyleSheet 
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'


export default class ButtonAbout extends Component {
    
    render() {
        return (
            <TouchableOpacity 
                style={styles.buttonAlias}
                onPress={this.props.goToUrl}
            >
                <Icon name={this.props.icon} size={20} color="#000" />
                <Text style={styles.buttonAliasText}>{this.props.text}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    buttonAlias: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    buttonAliasText: {
        fontFamily: 'Poppins-Regular',
        fontSize: 15,
        marginHorizontal: 5,
    },
})
