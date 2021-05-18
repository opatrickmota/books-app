import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';

import styles from './styles';

import { Foundation } from '@expo/vector-icons'; 

import Book from '../../assets/images/book.png'

export default function DiscoverCards() {
  return (
    <ScrollView horizontal={true} style={styles.cads}>
        <View style={styles.card}>
            <View style={styles.texts}>
                <Text style={styles.title}>Hooked</Text> 
                <Text style={styles.text}>Nir Eyal</Text>
                <View style={styles.groupText}>
                    <Foundation name="graph-bar" size={10} color="#E7E7E1" />
                    <Text style={styles.smallText}>
                        <Text style={styles.strong}>120+</Text> Read Now
                    </Text>
                </View>
            </View>
            <Image source={Book}  style={styles.book}></Image>
        </View>
        <View style={styles.card}>
            <View style={styles.texts}>
                <Text style={styles.title}>Hooked</Text> 
                <Text style={styles.text}>Nir Eyal</Text>
                <View style={styles.groupText}>
                    <Foundation name="graph-bar" size={10} color="#E7E7E1" />
                    <Text style={styles.smallText}>
                        <Text style={styles.strong}>120+</Text> Read Now
                    </Text>
                </View>
            </View>
            <Image source={Book}  style={styles.book}></Image>
        </View>
    </ScrollView>
  );
}
