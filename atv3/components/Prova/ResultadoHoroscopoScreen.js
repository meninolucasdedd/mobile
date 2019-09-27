import React,{Component} from 'react';
import {Text,View} from 'react-native';

import HoroscopoMensagem from './HoroscopoMensagem';
import estilos from '../estilos/Estilos';

export default class IMCCalc extends Component{
    render(){
        if(this.props.dia==null || 
           this.props.mes==null
           || this.props.ano == null) return null;
        return (
            <View>
                <Text style={{fontWeight:"bold",fontSize:20}}>
                    Resultado do seu horóscopo:
                </Text>
                <Text>Sua sorte></Text>
                <HoroscopoMensagem horoscopo={horoscopo}/>
            </View>
        )
    }
}