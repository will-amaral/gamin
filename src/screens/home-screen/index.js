import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Box from './box';
import GameItem from './game-item'; 
import TableItem from './table-item';
import api from '../../config/api';
import { List } from './style';
import { Container, Row, Subtitle, TextLine } from '../../styles';
import { white, genres } from '../../styles/colors';
import Loader from '../../components/loader';

const categories = ['RPG', 'Action', 'Adventure', 'Sports', 'Stategy'];

export default function HomeScreen({ navigation }) {
    const [data, setData] = useState();
    const [recents, setRecents] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchPopular();
        fetchRecents();
    }, []);

    async function fetchPopular() {
        const body = `fields name, popularity, artworks, cover; 
                sort popularity desc;`
        setLoading(true);
        try {
            const response = await api('games',body);
            setData(response);
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    }

    async function fetchRecents() {
        const body = `fields name, artworks, cover, total_rating, total_rating_count;
                        where total_rating > 0 & total_rating_count > 100;
                        sort total_rating desc;`
        setLoading(true);
        try {
            const response = await api('games',body);
            setRecents(response);
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    }

    return (
        <Container>
            <Row 
                data={categories}
                renderItem={({item, index}) => <Box category={item} color={genres[index]}/>}
                keyExtractor={(item, index) => index.toString()}
            />
            <TextLine>
                <Subtitle>Popular</Subtitle>
                <TouchableOpacity><Subtitle primary>See all</Subtitle></TouchableOpacity> 
            </TextLine>

            { loading ? <Loader />
              :  (
                <Row
                    data={data}
                    renderItem={({ item }) => <GameItem
                                navigate={navigation.navigate}
                                id={item.id}
                                name={item.name} 
                                artwork={item.artworks}
                                coverId={item.cover}/>}
                    keyExtractor={(item, index) => index.toString()}
                />
              )
            }
            <TextLine>
                <Subtitle>Highest Rated</Subtitle>
                <TouchableOpacity><Subtitle primary>See all</Subtitle></TouchableOpacity> 
            </TextLine>
            { loading ? <Loader />
              : <List
                data={recents}
                renderItem={({ item, index}) => <TableItem 
                            position={index + 1}
                            name={item.name}
                            grade={item.grade}
                            />}
                keyExtractor={(item, index) => index.toString()}
                />
            }           
        </Container>
    )
}

HomeScreen.navigationOptions = {
    title: 'Discover',
    headerRight: (
        <Icon 
            name='ios-search'
            size={35}
            color={white}
        />
    )
};