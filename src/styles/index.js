import styled from 'styled-components/native';

import { navy, white, lightGrey, primary } from './colors';

export const Container = styled.ScrollView`
    flex: 1;
    padding-left: 20px;
    background-color: ${navy};
`

export const BoxContainer = styled.TouchableOpacity`
    margin-right: 15px;
    min-width: 100px;
    padding: 0 20px;
    height: 50px;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    background-color: ${props => props.color};
`
export const Title = styled.Text`
    font-size: 16px;
    color: ${white};
`

export const Subtitle = styled(Title)`
    color: ${props => props.primary ? primary : lightGrey};
`

export const TextLine = styled.View`
    margin-right: 20px;
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
`

export const Row = styled.FlatList.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
})`
    flex: 1;
    flex-direction: row;
    margin: 10px 0px 20px 0px;
`   