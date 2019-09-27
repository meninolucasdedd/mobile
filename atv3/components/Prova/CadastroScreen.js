import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

import estilos from '../../estilos/Estilos'

export default class MenuScreen extends Component {

    constructor(props) {
        super(props);
        this.state = { nome: null, idade: null, email: null, curso: null };
    }

    static navigationOptions = {
        title: "CadastroScreen"
    };

    render() {
        return (
            <View style={estilos.container}>
                <Text style={estilos.titulo}>
                    Cadastro de Usuário
                </Text>
                <TextInput
                    style={estilos.input}
                    placeholder="Digite o seu nome"
                    onChangeText={(nome) => this.setState({ nome })}
                />
                <TextInput
                    style={estilos.input}
                    placeholder="Digite a sua idade"
                    onChangeText={(idade) => this.setState({ idade })}
                />
                <TextInput
                    style={estilos.input}
                    placeholder="Digite o seu e-mail"
                    onChangeText={(email) => this.setState({ email })}
                />
                <TextInput 
                style={estilos.input}
                placeholder="Digite o seu curso"
                onChangeText={(curso) => this.setState({ curso })}

                />
                <View style={estilos.button}>
                    <Button
                        title="OK"
                        onPress={() => this.props.navigation.navigate("PerfilScreen",
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