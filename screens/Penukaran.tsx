import * as React from 'react';
import { StyleSheet, View, SafeAreaView, ScrollView } from 'react-native';

import { Text } from '../components/Themed';
import Header from '../components/Header';

export default function TabTwoScreen() {
  return (
    <SafeAreaView>
      <Header textHeader={'Penukaran'} />
      <View style={styles.container}>
      </View>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
