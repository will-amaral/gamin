import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { white } from '../styles/colors';

export default function ButtonIcon({ type }) {
    const [name, setName] = useState(type);

    function toggle() {
        if (type === 'ios-heart-empty' && name === 'ios-heart-empty' ) {
            setName('ios-heart');
        } else {
            setName('ios-heart-empty');
        }
    }
    return (
        <TouchableOpacity
        onPress={toggle}
        >
            <Icon
            name={name}
            size={35}
            color={white} />
        </TouchableOpacity>
    );
}