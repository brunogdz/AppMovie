import React from 'react';
import { ScrollView } from 'react-native';

import Header from '../../components/Header';
import { Container, SearchContainer, SearchButton, Input, Title, Banner, BannerButton } from './styles';
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

            <ScrollView>
           <Title>Em cartaz</Title>
           <BannerButton>
               <Banner 
               source={{uri:'https://images.unsplash.com/photo-1618249608090-846a81a37070?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80'}}
               />
           </BannerButton>
            </ScrollView>

        </Container>
    )
}

export default Home;