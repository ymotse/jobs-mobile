import React, { Component } from 'react'
import {
    Alert,
    FlatList,
    Text,
    TouchableOpacity,
    View,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

import ModalJob from '../../components/ModalJob'
import JobItem from '../../components/JobItem'

import styles from './styles'

import { INITIAL_STATE, loadFromStorage, saveToStorage } from '../../utils/storage'


class Main extends Component {
    
    state = INITIAL_STATE
    
    
    async componentDidMount() {
        const jobs = await loadFromStorage()
        
        this.setState({
            jobs,
            ...this.state.showModalJob,
            ...this.state.newJob,
        })
    }
    
    async componentDidUpdate(prevProps, prevState) {
        if (prevState.jobs !== this.state.jobs) {
            const jobs = await loadFromStorage()
            
            this.setState({
                jobs,
                ...this.state.showModalJob,
                ...this.state.newJob,
            })
        }
    }
    
    
    goToDetails = props => {
        this.props.navigation.navigate('Details', props)
    }
    
    onSaveJob = async () => {
        const { jobs, newJob: inputs } = this.state
        
        if(`${inputs.position}`.trim() === '' || `${inputs.company}`.trim() === '') {
            Alert.alert('Ops!', 'Por favor, preencha os campos Cargo e Empresa.')
            return
        }
        
        jobs.push({
            id: +new Date,
            position: inputs.position,
            company: inputs.company,
            details: inputs.details,
        })
        
        this.setState({
            jobs,
            ...this.state.showModalJob,
            newJob: {
                id: '',
                position: '',
                company: '',
                details: '',
            },
        })
        
        await saveToStorage(jobs)
        
        this.onCloseModal()
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
    
    onCloseModal = () => {
        this.setState({ 
            ...this.state.jobs,
            showModalJob: false,
            newJob: {
                id: '',
                position: '',
                company: '',
                details: '',
            },
        })
    }
    
    
    render() {
        return (
            <View style={styles.container}>
                
                <View style={styles.header}>
                    <Text style={styles.title}>Jobs</Text>
                </View>
                
                <ModalJob 
                    modalTitle="New Job"
                    isVisible={this.state.showModalJob}
                    onCloseModal={this.onCloseModal} 
                    onSaveJob={this.onSaveJob}
                    
                    position={this.state.newJob.position}
                    onChangePosition={text => this.onChangePosition(text)}
                    
                    company={this.state.newJob.company}
                    onChangeCompany={text => this.onChangeCompany(text)}
                    
                    details={this.state.newJob.details}
                    onChangeDetails={text => this.onChangeDetails(text)}
                />
                
                <FlatList style={styles.containerList} 
                    data={this.state.jobs}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({item}) => <JobItem job={item} onIntoDetails={() => this.goToDetails(item)} /> } 
                />
                
                <TouchableOpacity 
                    style={styles.buttonNewJob}
                    onPress={() => this.setState({ showModalJob: true })}
                >
                    <Icon name="plus" size={30} color="#848CFF" />
                </TouchableOpacity>
                
            </View>
        )
    }
}

export default Main