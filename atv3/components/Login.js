import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

import estilos from '../estilos/Estilos'

export default class  Login extends Component {

    constructor(props) {
        super(props);
        this.state = { email: null, senha: null };
    }

    static navigationOptions = {
        title: "Login"
    };

    render() {
        return (
            <View style={estilos.container}>
                <Text style={estilos.titulo}>
                    Entrar na conta
                </Text>
                <TextInput
                    style={estilos.input}
                    placeholder="Entre com seu email"
                    onChangeText={(email) => this.setState({ email })}
                />
                <TextInput
                    style={estilos.input}
                    placeholder="Entre com sua senha"
                    onChangeText={(senha) => this.setState({ senha })}
                />
               
                <View style={estilos.button}>
                    <Button
                        title="OK"
                        onPress={() => this.props.navigation.navigate("Perfil",
                            {
                                nome: this.state.nome,
                                idade: this.state.idade,
                                email: this.state.email
                            }
                        )}
                    />
                </View>
            </View>
        );
    }
}