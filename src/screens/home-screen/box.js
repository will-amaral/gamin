import React, { useState } from 'react';

import { BoxContainer, Title } from '../../styles';
import { lightGrey } from '../../styles/colors';

export default function Box({ category, color }) {
    const [active, setActive] = useState(false);
    return (
        <BoxContainer color={active ? color : lightGrey }
            onPress={() => active ? setActive(false) : setActive(true)}
        >
            <Title>{category}</Title>
        </BoxContainer>
    );
}