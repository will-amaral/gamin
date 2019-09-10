import { white, navy } from '../styles/colors';
import { StatusBar } from 'react-native';

export default headerStyles = {
    headerStyle: {
        paddingTop: StatusBar.currentHeight,
        height: 120 + StatusBar.currentHeight,
        backgroundColor: navy,
        elevation: 0,
        shadowOpacity: 0
    },
    headerTintColor: white,
    headerTitleStyle: {
        fontSize: 32,
        fontWeight: 'bold',
    },
    headerRightContainerStyle: {
        marginRight: 20
    }
}