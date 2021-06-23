import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
} from 'react-native'


export default class Home extends Component {
    
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    
                    Olá 🙂,
                    {"\n\n"}
                    Este app tem como finalidade cadastrar novos anúncios 
                    de vagas de emprego, listar, editar e excluir.
                    {"\n\n"}
                    Os anúncios cadastrados são armazenados no próprio 
                    storage do aparelho celular.
                    
                </Text>
            </View>
        )
    }
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    
    text: {
        fontFamily: 'Poppins-Regular',
        fontSize: 25,
    },
})