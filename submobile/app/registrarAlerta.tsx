import { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './login';

export default function RegisterAlertScreen() {
  const [localizacao, setLocalizacao] = useState('');
  const [tipo, setTipo] = useState('');
  const [descricao, setDescricao] = useState('');
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  async function salvarAlerta() {
    if (!localizacao || !tipo || !descricao) {
      Alert.alert('Preencha todos os campos!');
      return;
    }
    const novoAlerta = { localizacao, tipo, descricao, data: new Date().toISOString() };
    try {
      const salvos = await AsyncStorage.getItem('alertas');
      const alertas = salvos ? JSON.parse(salvos) : [];
      alertas.push(novoAlerta);
      await AsyncStorage.setItem('alertas', JSON.stringify(alertas));
      Alert.alert('Alerta salvo com sucesso!');
      navigation.goBack();
    } catch (e) {
      Alert.alert('Erro ao salvar alerta');
    }
  }

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 22, marginBottom: 16 }}>Registrar Novo Alerta</Text>
      <TextInput placeholder="Localização" value={localizacao} onChangeText={setLocalizacao} style={{ borderWidth: 1, marginBottom: 8, padding: 8 }} />
      <TextInput placeholder="Tipo de Desastre" value={tipo} onChangeText={setTipo} style={{ borderWidth: 1, marginBottom: 8, padding: 8 }} />
      <TextInput placeholder="Descrição" value={descricao} onChangeText={setDescricao} style={{ borderWidth: 1, marginBottom: 16, padding: 8 }} />
      <Button title="Salvar Alerta" onPress={salvarAlerta} />
    </View>
  );
}