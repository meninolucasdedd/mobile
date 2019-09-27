import {StyleSheet} from 'react-native';


export default StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    titulo:{
        fontSize:40,
        fontWeight:"bold"
    },
    tituloMenor:{
        fontSize:25,
        fontWeight:"bold"
    },
    button:{
        width:"50%",
        margin:20
    },
    input:{
        height: 45,
        width: "80%",
        borderColor: "gray",
        borderWidth: 2,
        paddingLeft: 5,
        margin:15,
        fontSize:20
    },
    album:{
        viewStyle:{
            backgroundColor: '#442980',
            justifyContent: 'center',
            height: 60,
            paddingTop: 15,
            backgroundColor: '#F2F2F2',
            shadowColor: '#000',
            shadowOffset: {width:0, height: 2},
            shadowOpacity: 0.2,
        },
        textStyle:{
            fontSize: 20
        }
    }
})