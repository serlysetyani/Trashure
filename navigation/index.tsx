import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';


import Login from '../screens/Login';
import Daftar from '../screens/Daftar';
import DetailSetoran from '../screens/DetailSetoran';
import Artikel1 from '../screens/TipsArtikel';
import Pengaturan from '../screens/Pengaturan';
import Notifikasi from '../screens/Notifikasi';
import { RootStackParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import Scan from '../screens/Scan';
import EditProfil from '../screens/EditProfil';
import KonfirmasiPenukaran from '../screens/KonfirmasiPenukaran';
import PenukaranBerhasil from '../screens/PenukaranBerhasil';

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <PaperProvider>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Daftar" component={Daftar} />
        <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false, title: ' ' }} />
        <Stack.Screen name="Setoran" component={DetailSetoran} />
        <Stack.Screen name="Artikel" component={Artikel1} options={{ title: null }} />
        <Stack.Screen name="Pengaturan" component={Pengaturan} />
        <Stack.Screen name="Notifikasi" component={Notifikasi} />
        <Stack.Screen name="Scan" component={Scan} options={{ title: null, headerTransparent: 'True' }} />
        <Stack.Screen name="EditProfil" component={EditProfil} options={{ title: 'Edit Akun' }} />
        <Stack.Screen name="KonfirmasiPenukaran" component={KonfirmasiPenukaran} options={{ title: 'Konfirmasi' }} />
        <Stack.Screen name="PenukaranBerhasil" component={PenukaranBerhasil} options={{ headerShown: false }} />
      </Stack.Navigator>
    </PaperProvider>
  );
}
