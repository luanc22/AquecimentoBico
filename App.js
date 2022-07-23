import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Header from './componentes/header/index';
import Footer from './componentes/footer/index';
import TelaInicial from './telas/telainicial/index';
import TelaCadastroPessoa from './telas/telacadastropessoa/index';
import TelaCadastroCidade from './telas/telacadastrocidade/index';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (

    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header />
      <NavigationContainer >
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="Início" component={TelaInicial} />
          <Stack.Screen name="Cadastro de Pessoa" component={TelaCadastroPessoa} />
          <Stack.Screen name="Cadastro de Cidade" component={TelaCadastroCidade} />

        </Stack.Navigator>
      </NavigationContainer>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
