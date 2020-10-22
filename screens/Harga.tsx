import * as React from 'react';
import { StyleSheet, Image, View, SafeAreaView, ScrollView } from 'react-native';

import { Text } from '../components/Themed';
import Header from '../components/Header';

export default function TabOneScreen() {
    return (
        <SafeAreaView>
            <Header textHeader={'Harga Sampah'} />
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.card}>
                        <View>
                            <Image source={require('../assets/images/sampahPlastik.png')}
                                style={{
                                    width: '100%',
                                    height: 160,
                                    borderTopLeftRadius: 7,
                                    borderTopRightRadius: 7,
                                }} />
                        </View>
                        <View
                            style={{
                                backgroundColor: 'white',
                                height: 80,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                borderBottomRightRadius: 7,
                                borderBottomLeftRadius: 7
                            }} >
                            <Text style={{ fontSize: 20, marginLeft: 23, fontWeight: '600' }} >Sampah Plastik</Text>
                            <Text style={{ fontSize: 20, marginRight: 23, fontWeight: '600', color: '#FF5722' }}>Rp.3500/kg</Text>
                        </View>
                    </View>

                    <View style={styles.card}>
                        <View>
                            <Image source={require('../assets/images/sampahKaleng.png')}
                                style={{
                                    width: '100%',
                                    height: 160,
                                    borderTopLeftRadius: 7,
                                    borderTopRightRadius: 7,
                                }} />
                        </View>
                        <View
                            style={{
                                backgroundColor: 'white',
                                height: 80,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                borderBottomRightRadius: 7,
                                borderBottomLeftRadius: 7
                            }} >
                            <Text style={{ fontSize: 20, marginLeft: 23, fontWeight: '600' }} >Sampah Kaleng</Text>
                            <Text style={{ fontSize: 20, marginRight: 23, fontWeight: '600', color: '#FF5722' }}>Rp.5000/kg</Text>
                        </View>
                    </View>

                    <View style={styles.card}>
                        <View>
                            <Image source={require('../assets/images/sampahKardus.png')}
                                style={{
                                    width: '100%',
                                    height: 160,
                                    borderTopLeftRadius: 7,
                                    borderTopRightRadius: 7,
                                }} />
                        </View>
                        <View
                            style={{
                                backgroundColor: 'white',
                                height: 80,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                borderBottomRightRadius: 7,
                                borderBottomLeftRadius: 7
                            }} >
                            <Text style={{ fontSize: 20, marginLeft: 23, fontWeight: '600' }} >Sampah Kardus</Text>
                            <Text style={{ fontSize: 20, marginRight: 23, fontWeight: '600', color: '#FF5722' }}>Rp.4000/kg</Text>
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
    card: {
        marginTop: 36,
        width: 360,
        height: 240
    }
});
