import * as React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Text } from '../components/Themed';
import HeaderBeranda from '../components/HeaderBeranda';


export default function Beranda() {
  return (
    <SafeAreaView>
      <HeaderBeranda textHeader={'Trashure'}>
      </HeaderBeranda>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.dompetContainer}>
            <View style={styles.saldo}>
              <Text style={{ color: 'white', fontSize: 20, fontWeight: '700', marginLeft: 16 }}>DOMPET</Text>
              <Text style={{ color: 'white', fontSize: 20, fontWeight: '700', marginRight: 16 }}>Rp.150.000</Text>
            </View>
            <View style={styles.levelTrashbag}>
              <Text style={{ marginLeft: 16, color: 'white' }}>Level : Trashure Sejati</Text>
              <View
                style={{
                  borderLeftWidth: 2,
                  height: 60,
                  borderLeftColor: 'white',
                  alignItems: 'center',
                  marginTop: 8
                }}
              />
              <Text style={{ marginRight: 16, color: 'white' }}>Trashbag: Tidak Terhubung</Text>
            </View>
          </View>

          <View style={styles.setoranContainer}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 20,
                width: 360,
                marginBottom: 24
              }}>
              <Text style={{ fontSize: 20, fontWeight: '700', color: '#416188' }}>Setoran</Text>
              <Text style={{ alignItems: "center", color: '#8793A3' }}>Lihat semua</Text>
            </View>
            <View style={styles.historySetoran}>
              <View style={{ flexDirection: 'row', alignContent: 'space-between', alignItems: 'center' }}>
                <View style={{ width: 185, height: 52, flexDirection: 'row', alignItems: 'center' }}>
                  <Image source={require('../assets/images/garbage.png')} style={{ width: 52, height: 52, alignItems: 'center' }} />
                  <View style={{ marginLeft: 8 }}>
                    <Text>Trashbag ID 1304A327FA</Text>
                    <Text>24/09/2019</Text>
                  </View>
                </View>
                <View style={{ marginLeft: 81 }}>
                  <Text>Proses</Text>
                </View>
              </View>
            </View>
          </View>


        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    alignItems: 'center',
    justifyContent: 'center'
  },
  dompetContainer: {
    width: 360,
    height: 120,
    backgroundColor: '#8BC34A',
    borderRadius: 7,
  },
  saldo: {
    width: 360,
    height: 44,
    backgroundColor: '#689F38',
    flexDirection: 'row',
    alignItems: 'center',
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    justifyContent: 'space-between',
  },
  levelTrashbag: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  setoranContainer: {
    marginLeft: 16,
    marginRight: 16,
  },
  historySetoran: {
    width: 360,
    height: 76,
    backgroundColor: 'white',
    borderRadius: 4,
    marginBottom: 8,
  }
});
