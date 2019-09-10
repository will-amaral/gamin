// Import foreign modules
import { createStackNavigator } from 'react-navigation-stack';
// Import custom modules
import ProfileScreen from '../screens/profile-screen';
import headerStyles from './headerStyles';

export default FavoriteStack = createStackNavigator(
    {
        Profile: ProfileScreen,
    },
    {
        initialRouteName: 'Profile',
        defaultNavigationOptions: headerStyles
    }
);