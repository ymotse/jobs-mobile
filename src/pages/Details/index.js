import React, { Component } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
} from 'react-native'
import { deleteJobFromStorage, updateJobFromStorage } from '../../utils/storage'
import ModalJob from '../../components/ModalJob'
import Icon from 'react-native-vector-icons/FontAwesome5'
import styles from './styles'

class Details extends Component {
    
    state = {
        showModalEditJob: false,
        newJob: {
            id: '',
            position: '',
            company: '',
            details: '',
        },
    }
    
    
    async componentDidMount() {
        this.setState({
            ...this.state.showModalEditJob,
            newJob: {
                id: this.props.route.params.id,
                position: this.props.route.params.position,
                company: this.props.route.params.company,
                details: this.props.route.params.details,
            },
        })
    }
    
    
    
    onChangePosition = pPosition => {
        const { newJob } = this.state
        newJob.position = pPosition
        
        this.setState({ newJob })
    }
    
    onChangeCompany = pCompany => {
        const { newJob } = this.state
        newJob.company = pCompany
        
        this.setState({ newJob })
    }
    
    onChangeDetails = pDetails => {
        const { newJob } = this.state
        newJob.details = pDetails
        
        this.setState({ newJob })
    }
    
    saveJob = async () => {
        await updateJobFromStorage({
            id: this.state.newJob.id,
            position: this.state.newJob.position,
            company: this.state.newJob.company,
            details: this.state.newJob.details,
        })
        
        this.goToMain()
    }
    
    onDeleteJob = async () => {
        await deleteJobFromStorage(this.props.route.params)
        this.goToMain()
    }
    
    onCloseModal = () => {
        this.setState({ 
            showModalEditJob: false,
            ...this.state.newJob,
        })
    }
    
    
    goToMain = () => {
        this.props.navigation.navigate('Main')
    }
    
    render() {
        
        return (
            <View style={styles.container}>
                
                <View style={styles.containerTitle}>
                    <View style={styles.titleIconBack}>
                        <TouchableOpacity onPress={this.goToMain}>
                            <Icon name="chevron-left" size={30} color="#888" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.titleLabel}>
                        <Text style={styles.titleLabelText}>Job Details</Text>
                    </View>
                </View>
                
                
                <View style={styles.containerJobDetails}>
                    <View style={styles.containerJobDetailsContent}>
                        <Text style={styles.titleContent}>Job ID</Text>
                        <Text style={styles.textContent}>{`${this.props.route.params.id}`}</Text>
                    </View>
                        
                    <View style={styles.containerJobDetailsContent}>
                        <Text style={styles.titleContent}>Position</Text>
                        <Text style={styles.textContent}>{`${this.props.route.params.position}`}</Text>
                    </View>
                        
                    <View style={styles.containerJobDetailsContent}>
                        <Text style={styles.titleContent}>Company</Text>
                        <Text style={styles.textContent}>{`${this.props.route.params.company}`}</Text>
                    </View>
                        
                    <View style={styles.containerJobDetailsContent}>
                        <Text style={styles.titleContent}>Details</Text>
                        <ScrollView style={styles.textAreaContent}>
                            <Text style={styles.textContent}>{`${this.props.route.params.details}`}</Text>
                        </ScrollView>
                    </View>
                </View>
                
                
                <View style={styles.containerActions}>
                    <TouchableOpacity 
                        style={styles.buttonUpdate}
                        onPress={() => this.setState({ showModalEditJob: true, ...this.state.newJob, })}
                    >
                        <Icon name="pen" size={25} color="#663300" />
                        <Text style={styles.buttonUpdateText}>Edit</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity 
                        style={styles.buttonDelete}
                        onPress={this.onDeleteJob}
                    >
                        <Icon name="trash" size={25} color="#ff0000" />
                        <Text style={styles.buttonDeleteText}>Delete</Text>
                    </TouchableOpacity>
                </View>
                
                
                <ModalJob 
                    modalTitle="Edit Job"
                    isVisible={this.state.showModalEditJob}
                    onCloseModal={this.onCloseModal} 
                    onSaveJob={this.saveJob}
                    
                    position={this.state.newJob.position}
                    onChangePosition={text => this.onChangePosition(text)}
                    
                    company={this.state.newJob.company}
                    onChangeCompany={text => this.onChangeCompany(text)}
                    
                    details={this.state.newJob.details}
                    onChangeDetails={text => this.onChangeDetails(text)}
                />
                
            </View>
        )
    }
}

export default Details