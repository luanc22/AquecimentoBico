import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import styles from './styles';

export default function TelaCadastroPessoa(props) {
    return (
        <View style={styles.tela}>
            <View>
                <View style={styles.container}>
                    <Text style={styles.title}>Cadastro de Pessoa</Text>

                    <Text style={styles.subtitle}>Informe seus dados abaixo.</Text>
                    <View style={styles.box}>
                        <Text>Nome</Text>
                        <TextInput
                            style={styles.input}
                        />
                        <Text>Código da Cidade</Text>
                        <TextInput
                            style={styles.input}
                        />
                        <View style={styles.boxBotoes}>
                            <TouchableOpacity
                                style={styles.botoes}
                                onPress={() => props.navigation.navigate("Início")}
                                underlayColor='#fff'>
                                <Text style={styles.textobotao}>Cadastrar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View >
    );
}

