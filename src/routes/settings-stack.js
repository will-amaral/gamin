// Import foreign modules
import { createStackNavigator } from 'react-navigation-stack';
// Import custom modules
import SettingsScreen from '../screens/settings-screen';
import headerStyles from './headerStyles';

export default FavoriteStack = createStackNavigator(
    {
        Settings: SettingsScreen,
    },
    {
        initialRouteName: 'Settings',
        defaultNavigationOptions: headerStyles
    }
);