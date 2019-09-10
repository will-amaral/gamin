import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { white } from '../../styles/colors';

import { Container, Title } from '../../styles';

export default function FavoritesScreen() {
    return (
        <Container>
            <Title>Favoritos</Title>
        </Container>
    )
}

FavoritesScreen.navigationOptions = {
    title: 'Favorites',
    headerRight: (
        <Icon 
            name='ios-search'
            size={35}
            color={white}
        />
    )
};