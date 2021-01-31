import { createStackNavigator, TransitionPresets } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Events from '../screens/events';
import EventsInfo from '../screens/eventInfo';
import QuestionPage from "../screens/questionPage";
import TriviaComplete from "../screens/triviaComplete"


const HomeStack = createStackNavigator({
    Events: {
        screen: Events,
        navigationOptions: {
            headerShown: false,
            gestureEnabled:false,
        }
    },
    EventsInfo: {
        screen: EventsInfo,
        navigationOptions: {
            headerShown: false,
            gestureEnabled:false,
        }
    },
    QuestionPage: {
        screen: QuestionPage,
        navigationOptions: {
            headerShown: false,
            gestureEnabled:false,
        }
    },
    TriviaComplete: {
        screen: TriviaComplete,
        navigationOptions: {
            headerShown: false,
            gestureEnabled:false,
        }
    }
    
  
    
}, {
    defaultNavigationOptions: {
        ...TransitionPresets.SlideFromRightIOS,
    },
    initialRouteName:'Events',
    
});

export default createAppContainer(HomeStack);