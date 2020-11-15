import * as React from 'react';
import { StyleSheet, View, SafeAreaView, ScrollView, Image } from 'react-native';
import Collapsible from 'react-native-collapsible';

import { Text } from '../components/Themed';
import Header from '../components/Header';
import { color } from 'react-native-reanimated';

export default function Penukaran({ navigation }) {
  return (
    <SafeAreaView>
      <Header textHeader={'Penukaran'} />
      <View style={styles.container}>
        <Collapsible collapsed={isCollapsed}>

        </Collapsible>
      </View>
    </SafeAreaView >

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
  }
});
