//// Import foreign modules
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
// Import custom modules
import HomeStack from './home-stack';
import FavoriteStack from './favorite-stack';
import ProfileStack from './profile-stack';
import SettingsStack from './settings-stack';
import { primary, lightGrey, lightNavy } from '../styles/colors';

const AppContainer = createBottomTabNavigator(
    {
        Home: HomeStack,
        Favorites: FavoriteStack,
        Profile: ProfileStack,
        Settings: SettingsStack
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Home') { iconName = 'ios-home' }
                else if (routeName === 'Favorites') { iconName = 'ios-heart' }
                else if (routeName === 'Profile') { iconName = 'md-person' }
                else if (routeName === 'Settings') { iconName = 'ios-settings' }
                return <Icon name={iconName} size={25} color={tintColor} />
            }
        }),
        tabBarOptions: {
            activeTintColor: primary,
            inactiveTintColor: lightGrey,
            style: { backgroundColor: lightNavy, height: 70, padding: 10 }
        }
    }
);

export default createAppContainer(AppContainer);