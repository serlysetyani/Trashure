import * as React from 'react';
import { StyleSheet, View, SafeAreaView, ScrollView, Text, Image } from 'react-native';

import Header from '../components/Header';
import Accordions from '../components/Accordions'

export default function Penukaran({ navigation }) {
  return (
    <SafeAreaView>
      <Header textHeader={'Penukaran'} />
      <View style={styles.container}>
        <Accordions />
      </View>
    </SafeAreaView >

  );
}

const styles = StyleSheet.create({
  container:{
    marginTop: 30
  }
});
