import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

import { white, primary, lightNavy, lightGrey } from '../../styles/colors';

export const Gradient = styled(LinearGradient).attrs({
    colors: ['transparent', 'black'],
    locations: [0.4, 1.2]
})`
    background-color: transparent;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
`

export const Card = styled.TouchableOpacity`
    margin-right: 15px;
    border-radius: 15px;
`

export const Image = styled.ImageBackground`
    width: 240px;
    height: 250px;
    padding: 0 20px;
    justify-content: flex-end;
    align-items: center;
    border-radius: 15px;
    overflow: hidden;
`;

export const Title = styled.Text`
    margin-bottom: 10px;
    font-size: 26px;
    color: ${white};
`

export const Table = styled.TouchableOpacity`
    margin-bottom: 10px;
    min-width: 100px;
    padding: 0 20px;
    height: 50px;
    justify-content: center;
    align-items: center;
    flex: 1;
    border-radius: 10px;
    background-color: ${lightGrey};
    flex-direction: row;
    justify-content: space-between;
`
export const Position = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: ${white};
`

export const Name = styled.Text`
    text-align: left;
    font-size: 14px;
    color: ${white};
`

export const Grade = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: ${lightNavy};
`

export const List = styled.FlatList`
    margin: 10px 20px 0px 0px;
`
