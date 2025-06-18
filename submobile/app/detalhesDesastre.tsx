import { View, Text } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from './login';

export default function DisasterDetailScreen() {
  const route = useRoute<RouteProp<RootStackParamList, 'DetalhesDesastre'>>();
  const { nome, descricao, dicas } = route.params;

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 22, marginBottom: 8 }}>{nome}</Text>
      <Text style={{ fontSize: 16, marginBottom: 8 }}>Descrição: {descricao}</Text>
      <Text style={{ fontSize: 16, color: 'green' }}>Dicas de Prevenção: {dicas}</Text>
    </View>
  );
}