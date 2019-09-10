import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { white } from '../../styles/colors';

import { Container, Title } from '../../styles';

export default function SettingScreen() {
    return (
        <Container>
            <Title>Configurações</Title>
        </Container>
    )
}

SettingScreen.navigationOptions = {
    title: 'Settings',
    headerRight: (
        <Icon 
            name='md-more'
            size={35}
            color={white}
        />
    )
};