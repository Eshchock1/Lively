
import WelcomePage from '../screens/welcomePage';
import { createStackNavigator, TransitionPresets } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

const LoginStack = createStackNavigator({
    WelcomePage: {screen: WelcomePage,
        navigationOptions: {
            headerShown: false,
        },
    },
}, {
    defaultNavigationOptions: {
        ...TransitionPresets.RevealFromBottomAndroid,
    },
    initialRouteName:'WelcomePage',
})
export default createAppContainer(LoginStack);