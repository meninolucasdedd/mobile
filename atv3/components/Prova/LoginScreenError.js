import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';



export default class LoginScreenError extends Component{
    render(){
        <View>
         <View>
         <Text>Ooops...</Text>
         </View>
         <View>
             <Text> O login de {this.state.login} falhou. Tente novamente.</Text>
         </View>
         <Button onPress={()=> this.props.navigation.goBack()} title= "Voltar"/>

         
        </View>
        
    }
}