import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

export default function Footer() {
  return (
    <View style={styles.container}>
        <Text style ={styles.title}> Esse aplicativo foi criado apenas para fins de estudo </Text>
    </View>
  );
}