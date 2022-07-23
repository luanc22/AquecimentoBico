import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

export default function Header() {
  return (
    <View style={styles.container}>
        <Text style ={styles.titulo}> Aquecimento <Text style ={styles.bico}>BICO</Text></Text>
    </View>
  );
}

