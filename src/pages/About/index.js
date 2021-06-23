import React, { Component } from 'react'
import { View, } from 'react-native'
import { WebView } from 'react-native-webview'

import ButtonAbout from '../../components/ButtonAbout'

import styles from './styles'


export default class About extends Component {
    
    state = {
        url: 'https://github.com/ymotse'
    }
    
    render() {
        return (
            <>
                <View style={styles.container}>
                    
                    <ButtonAbout 
                        goToUrl={() => this.setState({ url: 'https://github.com/ymotse' })}
                        icon="github"
                        text="Github"
                    />
                    
                    <ButtonAbout 
                        goToUrl={() => this.setState({ url: 'https://www.linkedin.com/in/ymotse' })}
                        icon="linkedin"
                        text="LinkedIn"
                    />
                    
                    <ButtonAbout 
                        goToUrl={() => this.setState({ url: 'https://play.google.com/store/apps/developer?id=Yitshhaq+Fukushima' })}
                        icon="google-play"
                        text="Google Play"
                    />
                </View>
                
                <WebView source={{ uri: this.state.url }} />
            </>
        )
    }
}
