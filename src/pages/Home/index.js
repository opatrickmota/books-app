import React from 'react';
import { TextInput, View, ScrollView, Text, Image } from 'react-native';

import styles from './styles';

import { Feather } from '@expo/vector-icons';

import TitleCard from '../../components/TitleCard'
import CurrentlyCard from '../../components/CurrentlyCard'
import ReviewCard from '../../components/ReviewCard'
import DiscoverCards from '../../components/DiscoverCards'

export default function Home() {
  return (
    <ScrollView style={{backgroundColor: '#FEF9F4'}}>
      <View style={styles.container}>

        <View style={styles.inputGroup}>
          <Feather name="search" color='#DCD8D8'/>
          <TextInput style={styles.searchInput}
            placeholder='Search book'
            underlineColorAndroid="transparent"
          /> 
        </View>

        <Text style={styles.title}>
          Hi, <Text style={styles.textPink}>Mehmed Al Fatih</Text> 👋
        </Text>

        {/* <TitleCard title='Discover new book' link='More' ></TitleCard>*/}
        <DiscoverCards></DiscoverCards> 
        <TitleCard title='Currently Reading' link='All' ></TitleCard>
        <CurrentlyCard></CurrentlyCard>
        <TitleCard title='Reviews of The Days' link='All Video' ></TitleCard>
        <ReviewCard></ReviewCard>
        
      </View>
    </ScrollView>
    
  );
}
