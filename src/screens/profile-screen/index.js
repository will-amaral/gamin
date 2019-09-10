import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { white } from '../../styles/colors';

import { Container, Title } from '../../styles';

export default function ProfileScreen() {
    return (
        <Container>
            <Title>Perfil</Title>
        </Container>
    )
}

ProfileScreen.navigationOptions = {
    title: 'Profile',
    headerRight: (
        <Icon 
            name='md-more'
            size={35}
            color={white}
        />
    )
};