import { createStackNavigator, TransitionPresets } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Events from '../screens/events';
import EventsInfo from '../screens/eventInfo';
import QuestionPage from "../screens/questionPage"


const HomeStack = createStackNavigator({
    Events: {
        screen: Events,
        navigationOptions: {
            headerShown: false,
        }
    },
    EventsInfo: {
        screen: EventsInfo,
        navigationOptions: {
            headerShown: false,
        }
    },
    QuestionPage: {
        screen: QuestionPage,
        navigationOptions: {
            headerShown: false
        }
    }
    
  
    
}, {
    defaultNavigationOptions: {
        ...TransitionPresets.SlideFromRightIOS,
    },
    initialRouteName:'Events',
    
});

export default createAppContainer(HomeStack);