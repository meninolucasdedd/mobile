import React, {Component} from 'react';
import {View,Text,Button, StyleSheet} from 'react-native';

import estilos from '../estilos/Estilos';

export default class MenuScreen extends Component{

    static navigationOptions = {
        title: "MenuScreen"
    };

    render(){
        return(
            <View style={estilos.container}>
                <Text style={estilos.titulo}>Menu de opções</Text>
                <View style={estilos.button}>
                    <Button
                        title="Cadastro"
                        onPress={()=>this.props.navigation.navigate("CadastroScreen")}
                    />
                </View>
                <View style={estilos.button}>
                    <Button
                        title="IMC"
                        onPress={()=>this.props.navigation.navigate("IMCScreen")}
                    />
                </View>
                <View style={estilos.button}>
                    <Button
                        title="Horoscopo"
                        onPress={()=>this.props.navigation.navigate("HoroscopoScreen")}
                    />
                </View>
            </View>
            
        )
    }

}
