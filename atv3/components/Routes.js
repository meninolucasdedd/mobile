import Home from './Home';
import Cadastro from './Cadastro';
import IMC from './IMC';
import Sobre from './Sobre'
import Perfil from './Perfil'
import Resultado from './Resultado';
import Login  from './Login';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const MainStack = createStackNavigator(
    {
        Home,
        Cadastro,
        IMC,
        Sobre,
        Perfil,
        Login
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#442980',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            }
        }
    }
)

const RootStack = createStackNavigator(
    {
        Main: MainStack,
        ResultadoModal: Resultado
    },
    {
        mode: 'modal',
        headerMode: 'none'
    }
)

const Routes = createAppContainer(RootStack);

export default Routes;