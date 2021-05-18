import React from 'react';
import { Text, View, Image } from 'react-native';

import styles from './styles';

import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import Now from '../../assets/images/now.png'

export default function DiscoverCards() {
  return (
    <View style={styles.card}>
        <Image source={Now}  style={styles.book}/>
        <View style={styles.texts}>
            <Text style={styles.title}>Originals</Text> 
            <Text style={styles.text}>by Adam Grant</Text>
            <View style={styles.groupText}>
                <MaterialCommunityIcons name="book" size={10} color="black" />
                <Text style={styles.smallText}>
                    Chapter
                    <Text style={styles.pink}> 2 </Text> 
                    From 9
                </Text>
            </View>
        </View>
    </View>
  );
}
