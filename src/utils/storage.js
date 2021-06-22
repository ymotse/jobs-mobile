import AsyncStorage from '@react-native-async-storage/async-storage'


export const INITIAL_STATE = {
    jobs: [],
    showModalJob: false,
    newJob: {
        id: '',
        position: '',
        company: '',
        details: '',
    },
}

export const saveToStorage = async jobs => {
    await AsyncStorage.setItem('@ymotse-jobs:jobs', JSON.stringify(jobs))
}

export const loadFromStorage = async _ => {
    const jobs = await AsyncStorage.getItem('@ymotse-jobs:jobs')
    
    return jobs === null ? [] : JSON.parse(jobs)
}

export const deleteJobFromStorage = async jobToDelete => {
    const jobs = await loadFromStorage()
    
    const listWithoutJobDeleted = jobs.filter(job => job.id !== jobToDelete.id)
    await saveToStorage(listWithoutJobDeleted)
}

export const updateJobFromStorage = async jobUpdated => {
    const jobs = await loadFromStorage()
    
    const listWithJobUpdated = jobs.map(job => job.id === jobUpdated.id ? jobUpdated : job)
    await saveToStorage(listWithJobUpdated)
}
