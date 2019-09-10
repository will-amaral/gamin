import React from 'react';

import { Container, Title } from '../../styles';
import ButtonIcon from '../../components/button-icon';

export default function DetailsScreen({ navigation }) {
    const id = navigation.getParam('id');
    return (
        <Container>
            <Title>{id}</Title>
        </Container>
    )
}

DetailsScreen.navigationOptions = {
    headerRight: (
        <ButtonIcon type='ios-heart-empty'/>
    )
}