import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const desastres = [
  { id: '1', nome: 'Enchente', descricao: 'Inundação de áreas urbanas ou rurais.', dicas: 'Evitar áreas alagadas.' },
  { id: '2', nome: 'Incêndio', descricao: 'Fogo descontrolado em áreas florestais ou urbanas.', dicas: 'Tenha extintor e rotas de fuga.' },
  { id: '3', nome: 'Deslizamento', descricao: 'Deslocamento de terra em encostas.', dicas: 'Evitar áreas de risco em chuvas.' },
];

export default function DisasterListScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 22, marginBottom: 16 }}>Tipos de Desastres</Text>
      <FlatList
        data={desastres}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{ padding: 16, backgroundColor: '#eee', marginBottom: 8, borderRadius: 8 }}
            onPress={() => router.push({ pathname: '/detalhesDesastre', params: item })}
          >
            <Text style={{ fontSize: 18 }}>{item.nome}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}