import React from 'react';
import { View, Image } from 'react-native';

import styles from './styles'

export default function ReviewCard() {
    const uri = 'https://i.ytimg.com/vi/vBzBgewl4ac/maxresdefault.jpg'
    return (
        <View style={styles.imageCard}>
            <Image style={styles.images}
                source={{uri: uri}}
            />
        </View>
    );
}
