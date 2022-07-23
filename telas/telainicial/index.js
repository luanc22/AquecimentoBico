import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';


export default function TelaInicial(props) {
    return (
        <View style={styles.tela}>
            <View>
            <View style={styles.container}>
            <Text style={styles.title}>Seja Bem-vindo!</Text>

            <Text style={styles.subtitle}>Selecione um cadastro abaixo.</Text>
            <View style={styles.box}>
                <View style={styles.boxBotoes}>
                    <TouchableOpacity
                        style={styles.botoes}
                        onPress={() => props.navigation.navigate("Cadastro de Pessoa")}
                        underlayColor='#fff'>
                        <Text style={styles.textobotao}>Pessoa</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.botoes}
                        onPress={() => props.navigation.navigate("Cadastro de Cidade")}
                        underlayColor='#fff'>
                        <Text style={styles.textobotao}>Cidade</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
            </View>
        </View >
    );
}

