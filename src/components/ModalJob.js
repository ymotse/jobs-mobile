import React, { Component } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    StyleSheet,
} from 'react-native'
import Modal from 'react-native-modal'


export default class ModalJob extends Component {
    
    render() {
        
        return (
            <Modal 
                isVisible={this.props.isVisible}
                animationType="fade"
                transparent={true}
                
                hasBackdrop={true}
                backdropOpacity={0.5}
                backdropColor="#000"
                
                onBackdropPress={this.props.onCloseModal}
                onBackButtonPress={this.props.onCloseModal}
            >
                <View style={styles.container}>
                    <View style={styles.containerContent}>
                        
                        <View style={styles.containerTitle}>
                            <Text style={styles.title}>
                                {this.props.modalTitle}
                            </Text>
                        </View>
                        
                        <View style={styles.containerFields}>
                            <Text style={styles.fieldLabel}>Position:</Text>
                            <TextInput 
                                style={styles.textInput} 
                                maxLength={35}
                                value={this.props.position}
                                onChangeText={text => this.props.onChangePosition(text)}
                            />
                        </View>
                        
                        <View style={styles.containerFields}>
                            <Text style={styles.fieldLabel}>Company:</Text>
                            <TextInput 
                                style={styles.textInput} 
                                maxLength={30}
                                value={this.props.company}
                                onChangeText={text => this.props.onChangeCompany(text)}
                                />
                        </View>
                        
                        <View style={styles.containerFields}>
                            <Text style={styles.fieldLabel}>Details:</Text>
                            <TextInput 
                                style={styles.textInput} 
                                multiline={true} 
                                numberOfLines={4} 
                                maxLength={500} 
                                placeholder="Max 500 chars"
                                placeholderTextColor="#bbb"
                                value={this.props.details}
                                onChangeText={text => this.props.onChangeDetails(text)}
                            />
                        </View>
                        
                        <View>
                            <TouchableOpacity 
                                style={styles.saveButton}
                                onPress={this.props.onSaveJob}
                            >
                                <Text style={styles.saveButtonText}> Save Job </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    containerContent: {
        padding: 10,
        width: '90%',
        borderRadius: 8,
        backgroundColor: '#ffffff',
    },
    
    containerTitle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10, 
    },
    
    title: {
        fontFamily: 'Poppins-Regular',
        fontSize: 30,
    },
    
    containerFields: {
        marginVertical: 10,
    },
    
    fieldLabel: {
        fontFamily: 'Poppins-Regular',
        fontSize: 20,
    },
    
    textInput: {
        fontFamily: 'Poppins-Regular',
        fontSize: 18,
        color: '#000',
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#EBEBEB',
    },
    
    saveButton: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        paddingVertical: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#848CFF',
        backgroundColor: '#FBFBFB',
    },
    
    saveButtonText: {
        fontFamily: 'Poppins-Regular',
        fontSize: 25,
        color: '#848CFF',
    },
    
})
