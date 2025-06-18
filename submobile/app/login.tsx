import { View, Text, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

// Definir os nomes das rotas
export type RootStackParamList = {
  Login: undefined;
  TiposDesastres: undefined;
  DetalhesDesastre: { id: string; nome: string; descricao: string; dicas: string };
  RegistrarAlerta: undefined;
  AlertasSalvos: undefined;
};

export default function LoginScreen() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 32 }}>Bem-vindo ao App de Desastres Naturais!</Text>
      <Text style={{ fontSize: 10, marginBottom: 34 }}>App da substitutiva de mobile!</Text>
      <Button
        title="Tipos de Desastres"
        onPress={() => navigation.navigate('TiposDesastres')}
      />
      <View style={{ height: 16 }} />
      <Button
        title="Alertas Salvos"
        onPress={() => navigation.navigate('AlertasSalvos')}
      />
    </View>
  );
}