import React from 'react';
import { ActivityIndicator } from 'react-native';

import { Container } from './style';
import { white } from '../styles/colors';

export default function Loader() {
    return (
        <Container>
            <ActivityIndicator size='large' color={white} />
        </Container>
    );
}