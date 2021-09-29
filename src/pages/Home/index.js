import React from 'react';
import { View, Text } from 'react-native';

import Header from '../../components/Header';
import { Container, SearchContainer, SearchButton, Input } from './styles';
import { Feather } from '@expo/vector-icons'


function Home() {
    return (
        <Container>
            <Header title="Movie Indicator" />

            <SearchContainer>

                <Input placeholder="Ex Vindagores" />


                <SearchButton>
                    <Feather name="search" size={30} color="#fff" />
                </SearchButton>
            </SearchContainer>

        </Container>
    )
}

export default Home;