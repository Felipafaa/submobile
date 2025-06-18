import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function LoginScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 32 }}>Bem-vindo ao App de Desastres Naturais!</Text>
      <Text style={{ fontSize: 10, marginBottom: 34 }}>App da substitutiva de mobile!</Text>
      <Button
        title="Tipos de Desastres"
        onPress={() => router.push('/tiposDesastres')}
      />
      <View style={{ height: 16 }} />
      <Button
        title="Alertas Salvos"
        onPress={() => router.push('/alertasSalvos')}
      />
    </View>
  );
}