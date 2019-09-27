
import LoginScreen from './LoginScreen';
import MenuScreen from './MenuScreen';
import LoginScreenError from './LoginScreenError';
import CadastroScreen from './CadastroScreen';
import PerfIlScreen from './PerfilScreen';
import AlbumScreen from './AlbumSreen';
import IMCScreen from './IMCScreen';
import HorosopoScreen from './HoroscopoScreen';
import ResultadoIMCScreen from '/ResultadoIMCScreen'
import ResultadoHoroscopoScreen  from 'ResultadoHoroscopoScreen';



import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


const MainStack = createStackNavigator(
    {
        LoginScreen,
        LoginScreenError,
        MenuScreen,
        CadastroScreen,
        PerfIlScreen,
        AlbumScreen,
        IMCScreen,
        HorosopoScreen,
        ResultadoIMCScreen,
        ResultadoHoroscopoScreen,
    },
    {
        initialRouteName: 'LoginScreen',
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
        loginModal: LoginScreenError
    },
    {
        mode: 'modal',
        headerMode: 'none'
    },
    {
        Main: MainStack,
        ResultadoIMCScreen: ResultadoIMCScreen
    },
    {
        mode: 'modal',
        headerMode: 'none'
    }


)

const Routes = createAppContainer(RootStack);

export default Routes;