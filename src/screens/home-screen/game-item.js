import React, { useEffect, useState } from 'react';

import { Title, Image, Card, Gradient } from './style';

export default function GameItem({ name, coverId, artwork, id, navigate }) {
    const imageId = artwork ? artwork[0] : coverId;
    const [uri, setUri] = useState();
    const body = `fields image_id, url; where id = ${imageId};`

    useEffect(() => {
        fetchImage();
    }, []);

    async function fetchImage() {
        const url = artwork ? 'artworks' : 'covers';
        try {
            const [response] = await api(url, body);
            setUri(`https://images.igdb.com/igdb/image/upload/t_1080p_2x/${response.image_id}.jpg`)
        } catch (error) {
            console.log(error.response);
        }
    }

    return (
        <Card onPress={() => navigate('Details', { id })}>
            <Image source={{ uri }}>
                <Gradient />
                <Title>{name}</Title>
            </Image>
        </Card>
    );
}