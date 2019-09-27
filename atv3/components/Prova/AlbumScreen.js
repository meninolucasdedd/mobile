import React, { Component } from 'react';
import { Text, Image } from 'react-native'
import estilos from '../../estilos/Estilos';
import { ScrollView } from 'react-native-gesture-handler';



export default class AlbumScreen extends Component{
    render(){
        return(
            <View style={album.viewStyle}>
                <View>
                    <Text style>
                        Albums
                    </Text>

                    <ScrollView>
                        <Image>
                            
                        </Image>
                    </ScrollView>
                </View>
            </View>
        )
    }
}