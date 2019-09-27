import React,{Component} from 'react';
import {Text} from 'react-native';
import { throwStatement } from '@babel/types';

export default class HoroscopoMensagem extends Component{
    render(){
        if (this.props.dia /2 == 0){
            if(this.props.mes / 2 ==0){
                if(this.props.ano /2 == 0){
                    return(<Text>Muito dinheiro o ano todo</Text>)
                }
                if(this.props.ano /2 != 0){
                    return (<Text>Vai encontrar a pessoa amada</Text>)
                }
            }
            if(this.props.mes /2 != 0){
                if(this.props.ano /2 ==0){
                    return (<Text>Aquele amigo vai dar um chocolate</Text>)
                }
                if(this.props.ano /2 != 0){
                    return (<Text>Cuidado com projeto integrado</Text>)
                }
            }
        }

        if( this.props.dia /2 != 0){
           if(this.props.mes /2 ==0){
               if(this.props.ano/2 ==0){
                   return (<Text>A liseira vai ser grande</Text>)
               }
               if(this.props.ano /2 !=0){
                   return (<Text>Vão lhe emprestar a senha do Netflix</Text>)
               }
           }
           if(this.props.mes /2 != 0){
               if(this.props.ano /2 == 0){
                   return(<Text>Dor de barriga eminente</Text>)
               }
               if(this.props.ano /2 != 0){
                   return(<Text>Estude um pouco mais</Text>)
               }
           } 
        }

        
    }
}