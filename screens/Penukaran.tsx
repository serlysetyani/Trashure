import * as React from 'react';
import { StyleSheet, View, SafeAreaView, TouchableOpacity, Text, Image } from 'react-native';
import { List } from 'react-native-paper';
import { TextInput } from 'react-native-paper';

import Header from '../components/Header';

export default function Penukaran({ navigation }) {
  const [expanded, setExpanded] = React.useState(true);
  const [text, setText] = React.useState('');
  const handlePress = () => setExpanded(!expanded);
  return (
    <SafeAreaView>
      <Header textHeader={'Penukaran'} />
      <View style={styles.container}>
        <List.Section>
          <List.Accordion
            title="Pulsa"
            style={styles.containerAccordion}
            left={props => <List.Icon icon={require('../assets/images/iconPulsa.png')} />}>
            <View style={styles.accorItemContainer}>
              <TextInput
                label="Nomor HP"
                onChangeText={text => setText(text)}
                style={styles.nomorTelepon}
              />
              <TextInput
                label="Nominal"
                onChangeText={text => setText(text)}
                style={styles.nominal}
              />
              <Text style={styles.harga}>Harga: </Text>
              <TouchableOpacity style={styles.btnSimpan} onPress={() => navigation.navigate('KonfirmasiPenukaran')}>
                <Text style={{ color: '#FFF', fontSize: 18, fontWeight: '700', alignSelf: 'center', top: 18 }}>Tukar</Text>
              </TouchableOpacity>
            </View>
          </List.Accordion>

          <List.Accordion
            title="Dana"
            style={styles.containerAccordionDana}
            left={props => <List.Icon icon={require('../assets/images/iconDana.png')} />}
          >
            <List.Item title="First item" />
            <List.Item title="Second item" />
          </List.Accordion>

          <List.Accordion
            title="LinkAja"
            style={styles.containerAccordionLinkAja}
            left={props => <List.Icon icon={require('../assets/images/iconLinkAja.png')} />}
          >
            <List.Item title="First item" />
            <List.Item title="Second item" />
          </List.Accordion>
        </List.Section>
      </View>
    </SafeAreaView >

  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30
  },
  containerAccordion: {
    backgroundColor: '#FFF',
    width: '95%',
    alignSelf: 'center',
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4,
  },
  containerAccordionDana: {
    backgroundColor: '#FFF',
    width: '95%',
    alignSelf: 'center',
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4,
    marginTop: 16,
  },
  containerAccordionLinkAja: {
    backgroundColor: '#FFF',
    width: '95%',
    alignSelf: 'center',
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4,
    marginTop: 16
  },
  accorItemContainer: {
    backgroundColor: 'white',
    width: '94.9%',
    height: 280,
    marginLeft: 10,
    marginRight: 16
  },
  nomorTelepon: {
    marginTop: 18,
    width: 313,
    alignSelf: 'center',
    right: 30,
    backgroundColor: '#FFF'
  },
  nominal: {
    marginTop: 18,
    width: 313,
    alignSelf: 'center',
    right: 30,
    backgroundColor: '#FFF'
  },
  harga: {
    marginTop: 8,
    color: '#A8A8A8',
    fontSize: 12,
    right: 40
  },
  btnSimpan: {
    width: 313,
    height: 56,
    backgroundColor: '#FF5722',
    alignSelf: 'center',
    top: 19,
    right: 30,
    borderRadius: 4
  }
});
