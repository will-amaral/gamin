// Import foreign modules
import { createStackNavigator } from 'react-navigation-stack';
// Import custom modules
import FavoritesScreen from '../screens/favorites-screen';
import DetailsScreen from '../screens/details-screen';
import headerStyles from './headerStyles';

export default FavoriteStack = createStackNavigator(
    {
        Favorites: FavoritesScreen,
        Details: DetailsScreen
    },
    {
        initialRouteName: 'Favorites',
        defaultNavigationOptions: headerStyles
    }
);
