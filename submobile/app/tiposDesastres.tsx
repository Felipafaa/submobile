import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from './login';

const desastres = [
  { id: '1', nome: 'Enchente', descricao: 'Inundação de áreas urbanas ou rurais.', dicas: 'Evitar áreas alagadas, isso pode comprometer sua segurança e de demais vitimas.' },
  { id: '2', nome: 'Incêndio', descricao: 'Fogo descontrolado em áreas florestais ou urbanas.', dicas: 'Tenha extintor e rotas de fuga.' },
  { id: '3', nome: 'Deslizamento', descricao: 'Deslocamento de terra em encostas.', dicas: 'Evitar áreas de risco em chuvas.' },
];

export default function DisasterListScreen() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 22, marginBottom: 16 }}>Tipos de Desastres</Text>
      <FlatList
        data={desastres}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{ padding: 16, backgroundColor: '#eee', marginBottom: 8, borderRadius: 8 }}
            onPress={() => navigation.navigate('DetalhesDesastre', item)}
          >
            <Text style={{ fontSize: 18 }}>{item.nome}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}