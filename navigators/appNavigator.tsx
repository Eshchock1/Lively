
import EventsNavigator from './EventsNavigator';
import EventsInfo from '../screens/eventInfo';
import Leaderboard from '../screens/leaderboard';
import Profile from '../screens/profile';
import React from 'react';
import { createAppContainer } from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { View } from 'react-native';
// import CheckupStack from './checkupStack';
// import DentistDashboard from '../screens/DentistDashboard';
import { AntDesign } from '@expo/vector-icons'; 
const AppNavigator = createMaterialTopTabNavigator({
    Events: {screen: EventsNavigator,
        navigationOptions: {
            tabBarIcon: ({tintColor, focused}) => (
                <AntDesign name="home" size={28} color={tintColor} />
                // <FontAwesome5 name="home" size={25} style={{color:tintColor,}}/>
            ),
        },
    },
    Leaderboard: {screen: Leaderboard,
        navigationOptions: {
            tabBarIcon: ({tintColor, focused}) => (
                <AntDesign name="barschart" size={28} color={tintColor} />
                // <FontAwesome5 name="home" size={25} style={{color:tintColor,}}/>
            ),
        },
    },
    Profile: {screen: Profile,
        navigationOptions: {
            tabBarIcon: ({tintColor, focused}) => (
                <AntDesign name="user" size={28} color={tintColor} />
                // <FontAwesome5 name="home" size={25} style={{color:tintColor,}}/>
            ),
        },
    },
}, {
    initialRouteName: 'Events',
    tabBarPosition: 'bottom',
    tabBarOptions: {
        activeTintColor:'#263238',
        inactiveTintColor:'#c8c8c8',
        showIcon:true,
        showLabel:true,
        
        style: {
            backgroundColor: '#fff',
            height: 70,
            elevation: 0,
        },
        iconStyle: {
            width: 30,
            height: 22,
            alignItems:'center',
        },
        labelStyle:{
            fontFamily:'MuliSemi',
            fontSize:9,
            marginTop:10,
        },
        indicatorStyle:{
            height:0,
        },
    }
    });

    export default createAppContainer(AppNavigator);