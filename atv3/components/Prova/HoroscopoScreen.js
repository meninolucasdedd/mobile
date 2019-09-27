import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

import estilos from '../estilos/Estilos'

export default class IMCScreen extends Component {

    constructor(props) {
        super(props)
        this.state = { dia: null, mes: null, ano: null }
    }

    static navigationOptions = {
        title: "HoroscopoScreen"
    };

    render() {
        return (
            <View style={estilos.container}>
                <Text style={estilos.tituloMenor}>
                    Horóscopo
                </Text>
                <Text style={estilos.tituloMenor}>
                    Entre com o seu Aniversário
                </Text>
                <TextInput
                    style={estilos.input}
                    placeholder="Digite o dia do seu nascimento"
                    onChangeText={(dia) => this.setState({ dia })}
                    keyboardType={"numeric"}
                />
                <TextInput
                    style={estilos.input}
                    placeholder="Digite o mês do seu nascimento"
                    onChangeText={(mes) => this.setState({ mes })}
                    keyboardType={"numeric"}
                />
                <TextInput
                    style={estilos.input}
                    placeholder="Digite o ano do seu nascimento"
                    onChangeText={(ano) => this.setState({ ano })}
                    keyboardType={"numeric"}
                />
                <View style={estilos.button}>
                    <Button
                        title="OK"
                        onPress={() => this.props.navigation.navigate("ResultadoHoroscopoScreen",
                            {
                                dia: this.state.dia,
                                mes: this.state.mes,
                                ano: this.state.ano,
                            })}
                    />
                </View>
            </View>
        );
    }
}