import React, { Component } from 'react'
import { 
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'


class JobItem extends Component {
    
    render() {
        return (
            <TouchableOpacity 
                style={styles.container}
                onPress={this.props.onIntoDetails}
            >
                <View>
                    <Text style={styles.titleJob}>
                        <Icon name="address-card" size={20} color="#aaa" />
                        {` ${this.props.job.position}`}
                    </Text>
                    
                    <Text style={styles.subtitleJob}>
                        <Icon name="building" size={20} color="#aaa" />
                        {`  ${this.props.job.company}`}
                    </Text>
                </View>
                
                <View>
                    <Icon name="chevron-right" size={20} color="#ccc" />
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 5,
        padding: 10,
        backgroundColor: '#FBFBFB',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#EBEBEB',
    },
    
    titleJob: {
        fontFamily: 'Poppins-Medium',
        fontSize: 20,
    },
    
    subtitleJob: {
        fontFamily: 'Poppins-Light',
        fontSize: 20,
    },
})

export default JobItem
