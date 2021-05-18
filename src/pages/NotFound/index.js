import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

import { Ionicons } from '@expo/vector-icons'; 

export default function NotFound() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
          Estamos construindo essa página especialmente para 
        <Text style={styles.textPink}> você</Text>
    </Text>
    <Ionicons name="construct" size={50} color="#FE6A78" />
    </View>
  );
}
