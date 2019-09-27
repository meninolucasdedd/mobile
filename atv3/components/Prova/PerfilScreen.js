import React, {Component} from 'react';
import {View,Text,Image,Button} from 'react-native';

import estilos from '../estilos/Estilos'

export default class PerfilScreen extends Component{
    
    static navigationOptions = {
        title: "PerfilScreen"
    };

    render(){
        return (
            <View style={estilos.container}>
                <Text style={estilos.titulo}>
                   Bem vindo(a) ao seu perfil 
                </Text>
                <Image
                    source={require('./gumball.png')}
                    style={{ width: 225, height: 300 }}
                />
                <View>
                    <Text style={estilos.tituloMenor}>Nome: {this.props.navigation.getParam("nome","Um ser")}</Text>
                    <Text style={estilos.tituloMenor}>Idade: {this.props.navigation.getParam("idade","Uma idade")}</Text>
                    <Text style={estilos.tituloMenor}>E-mail: {this.props.navigation.getParam("email","Um email")}</Text>
                    <Text style={estilos.tituloMenor}>Curso: {this.props.navigation.getParam("email","Um curso")}</Text>
                </View>
                <View style={estilos.button}>
                    <Button
                        title="Menu"
                        onPress={()=>this.props.navigation.navigate("MenuScreen")}
                    />
                </View>
            </View>
        );
    }
}