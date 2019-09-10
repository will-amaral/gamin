// Import foreign modules
import { createStackNavigator } from 'react-navigation-stack';
// Import custom modules
import HomeScreen from '../screens/home-screen';
import DetailsScreen from '../screens/details-screen';
import headerStyles from './headerStyles';


export default HomeStack = createStackNavigator(
    {
        Home: HomeScreen,
        Details: DetailsScreen
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: headerStyles
    }
);
