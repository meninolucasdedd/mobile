import React,{Component} from 'react';
import {Text,View} from 'react-native';

import estilos from '../estilos/Estilos';
import IMCMensagem from './IMCMensagem';

export default class ResultadoIMCScreen extends Component{
    render(){
        if(this.props.altura==null || 
           this.props.peso==null) return null;
        let imc = this.props.peso/(this.props.altura*this.props.altura);
        return (
            <View>
                <Text style={{fontWeight:"bold",fontSize:20}}>
                    O resultado do seu IMC é : {imc}
                </Text>
                <IMCMensagem imc={imc}/>
            </View>
        )
    }
}