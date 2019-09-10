import React from 'react';

import { Table, Position, Grade, Name } from './style';

export default function TableItem({ position, grade, name }) {
    return (
        <Table style={{ elevation: 2}}>
            <Position>{position}</Position>
            <Name>{name}</Name>
            <Grade>{grade}</Grade>
        </Table>
    );
}