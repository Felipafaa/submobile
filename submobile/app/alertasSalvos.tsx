import { useEffect, useState } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './login';

type Alerta = {
  localizacao: string;
  tipo: string;
  descricao: string;
  data: string;
};

export default function SavedAlertsScreen() {
  const [alertas, setAlertas] = useState<Alerta[]>([]);
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const isFocused = useIsFocused();

  useEffect(() => {
    async function carregarAlertas() {
      const salvos = await AsyncStorage.getItem('alertas');
      setAlertas(salvos ? JSON.parse(salvos) : []);
    }
    if (isFocused) carregarAlertas();
  }, [isFocused]);

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 22, marginBottom: 16 }}>Alertas Salvos</Text>
      <Button title="Adicionar Novo Alerta" onPress={() => navigation.navigate('RegistrarAlerta')} />
      <FlatList
        data={alertas}
        keyExtractor={(_, idx) => idx.toString()}
        renderItem={({ item }) => (
          <View style={{ padding: 12, borderBottomWidth: 1, borderColor: '#ccc' }}>
            <Text>Localização: {item.localizacao}</Text>
            <Text>Tipo: {item.tipo}</Text>
            <Text>Descrição: {item.descricao}</Text>
            <Text>Data: {item.data}</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={{ marginTop: 32 }}>Nenhum alerta salvo.</Text>}
      />
    </View>
  );
}