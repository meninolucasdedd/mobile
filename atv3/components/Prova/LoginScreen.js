import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

import estilos from '../../estilos/Estilos'

export default class LoginScreen extends Component {

    constructor(props) {
        super(props);
        this.state = { login: "aluno", senha: "ufc" };
    }
    

    static navigationOptions = {
        title: "LoginScreen"
    };

    resultado(){
        if(this.state.login == "aluno"){
            this.props.navigation.navigate("MainScreen")

        }else{
            this.props.navigation.navigate("LoginScreenError")
        
        }
    }

    render() {
        return (
            <View style={estilos.container}>
                <Text style={estilos.titulo}>
                    Fazer Login
                </Text>
                <TextInput
                    style={estilos.input}
                    placeholder="Entre com seu login"
                    onChangeText={(login) => this.setState({ login })}
                />
                <TextInput
                    style={estilos.input}
                    placeholder="Entre com sua senha"
                    onChangeText={(senha) => this.setState({ senha })}
                />
               
                <View style={estilos.button}>
                    <Button
                        title="Entrar"
                        onPress={() => this.props.navigation.navigate("MainScreen",
                            {
                                nome: this.state.nome,
                                idade: this.state.idade,
                                email: this.state.email,
                                curso: this.state.curso,
                            }
                        )}
                    />
                </View>
            </View>
        );
    }
}