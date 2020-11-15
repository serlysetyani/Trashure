import * as React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BarChart } from 'react-native-chart-kit';

import { Text } from '../components/Themed';
import HeaderBeranda from '../components/HeaderBeranda';

export default function Beranda({ navigation }) {
  return (
    <SafeAreaView>
      <HeaderBeranda textHeader={'Trashure'} />
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

          <View>
            <BarChart
              data={{
                labels: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni'],
                datasets: [
                  {
                    data: [
                      Math.random() * 50,
                      Math.random() * 50,
                      Math.random() * 50,
                      Math.random() * 50,
                      Math.random() * 50,
                      Math.random() * 50
                    ]
                  }
                ]
              }}
              width={360}
              height={220}
              yAxisLabel={"kg"}
              chartConfig={{
                backgroundColor: 'white',
                backgroundGradientFrom: 'white',
                backgroundGradientTo: 'white',
                color: (opacity = 1) => '#FF5722',
                labelColor: (opacity = 100) => '#718093',
                barPercentage: 0.5,
                style: {
                  borderRadius: 4
                }
              }}
              style={{
                marginTop: 24,
                borderRadius: 4
              }}
            />
          </View>

          <View style={styles.setoranContainer}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 20,
                marginBottom: 20,
                width: 360,
              }}>
              <Text style={{ fontSize: 20, fontWeight: '700', color: '#416188' }}>Setoran</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Setoran')}>
                <Text style={{ color: '#718093' }}>Lihat semua</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.historySetoran}>
              <View style={styles.contentHistory}>
                <View>
                  <Image source={require('../assets/images/garbage.png')} style={{ height: 52, width: 52 }} />
                </View>
                <View style={{ marginLeft: -42 }}>
                  <Text><Text style={{ fontWeight: '600' }}>Trashbag ID</Text> 1304A327FA</Text>
                  <Text>24 / 04 / 2019</Text>
                </View>
                <View>
                  <Text style={{ color: '#FF5722' }}>Proses</Text>
                </View>
              </View>
            </View>
            <View style={styles.historySetoran}>
              <View style={styles.contentHistory}>
                <View>
                  <Image source={require('../assets/images/garbage.png')} style={{ height: 52, width: 52 }} />
                </View>
                <View style={{ marginLeft: -42 }}>
                  <Text><Text style={{ fontWeight: '600' }}>Trashbag ID</Text> 12836AJFGA</Text>
                  <Text>19 / 04 / 2019</Text>
                </View>
                <View>
                  <Text style={{ color: '#8BC34A' }}>Selesai</Text>
                </View>
              </View>
            </View>
            <View style={styles.historySetoran}>
              <View style={styles.contentHistory}>
                <View>
                  <Image source={require('../assets/images/garbage.png')} style={{ height: 52, width: 52 }} />
                </View>
                <View style={{ marginLeft: -42 }}>
                  <Text>
                    <Text style={{ fontWeight: '600' }}>Trashbag ID</Text> 1876BC2DQZ</Text>
                  <Text>15 / 04 / 2019</Text>
                </View>
                <View>
                  <Text style={{ color: '#8BC34A' }}>Selesai</Text>
                </View>
              </View>
            </View>
            <View style={styles.historySetoran}>
              <View style={styles.contentHistory}>
                <View>
                  <Image source={require('../assets/images/garbage.png')} style={{ height: 52, width: 52 }} />
                </View>
                <View style={{ marginLeft: -42 }}>
                  <Text>
                    <Text style={{ fontWeight: '600' }}>Trashbag ID</Text> 167JBA487Z</Text>
                  <Text>10 / 04 / 2019</Text>
                </View>
                <View>
                  <Text style={{ color: '#8BC34A' }}>Selesai</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.tipsContainer}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 20,
                width: 360,
              }}>
              <Text style={{ fontSize: 20, fontWeight: '700', color: '#416188' }}>Tips</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity onPress={() => navigation.navigate('Artikel')}>
                <View style={{ width: 180, height: 156 }}>
                  <Image source={require('../assets/images/memilahSampah.png')} style={{ width: '100%', height: '100%' }} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={{ width: 180, height: 156 }}>
                  <Image source={require('../assets/images/menggunakanTrashbag.png')} style={{ width: '100%', height: '100%' }} />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 100,
    marginTop: 20,
  },
  dompetContainer: {
    width: 360,
    height: 120,
    backgroundColor: '#8BC34A',
    borderRadius: 4,
  },
  saldo: {
    width: 360,
    height: 44,
    backgroundColor: '#689F38',
    flexDirection: 'row',
    alignItems: 'center',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
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
  },
  contentHistory: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    marginLeft: 10,
    marginRight: 10
  }
});
