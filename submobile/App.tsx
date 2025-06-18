import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './app/login';
import DisasterListScreen from './app/tiposDesastres';
import DisasterDetailScreen from './app/detalhesDesastre';
import RegisterAlertScreen from './app/registrarAlerta';
import SavedAlertsScreen from './app/alertasSalvos';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Bem-vindo' }} />
        <Stack.Screen name="TiposDesastres" component={DisasterListScreen} options={{ title: 'Tipos de Desastres' }} />
        <Stack.Screen name="DetalhesDesastre" component={DisasterDetailScreen} options={{ title: 'Detalhes do Desastre' }} />
        <Stack.Screen name="RegistrarAlerta" component={RegisterAlertScreen} options={{ title: 'Registrar Alerta' }} />
        <Stack.Screen name="AlertasSalvos" component={SavedAlertsScreen} options={{ title: 'Alertas Salvos' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
} 