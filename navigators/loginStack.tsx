import { createAppContainer } from 'react-navigation';
import CreateAccountPage from '../screens/createAccountPage';
import LoginPage from '../screens/loginPage';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';

const LoginStack = createMaterialTopTabNavigator({
    CreateAccountPage: {screen: CreateAccountPage,
        navigationOptions: {
            tabBarVisible:false,
        },
    },
    LoginPage: {screen: LoginPage,
        navigationOptions: {
            tabBarVisible:false,
        },
    },
}, {
    initialRouteName: 'CreateAccountPage',
   });

export default createAppContainer(LoginStack);