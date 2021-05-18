import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

export default function TitleCard(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.link}>{props.link}</Text>
    </View>
  );
}
