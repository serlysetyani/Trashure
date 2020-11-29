import * as React from 'react';
import { StyleSheet, View, SafeAreaView, Image, Text } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

import Header from '../components/Header';

export default function Akun({ navigation }) {
    return (
        <SafeAreaView>
            <Header textHeader={'Akun'} />
            <ScrollView>
                <View style={styles.profilContainer}>
                    <View style={styles.avaContainer}>
                        <Image source={require('../assets/images/profil.png')} style={{ width: 100, height: 100, alignSelf: 'center', top: -80 }} />
                        <Text style={{ alignSelf: 'center', top: -80, fontWeight: '700', fontSize: 18, color: '#416188' }}>Serly Setyani</Text>
                    </View>
                    <View style={styles.badgeContainer}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', top: 21 }}>
                            <View style={styles.level}>
                                <Image source={require('../assets/images/level.png')} style={{ width: 36, height: 52 }} />
                                <Text style={{ fontSize: 12, right: 20, fontWeight: '600', color: '#416188', marginTop: 15 }}>Trashure Sejati</Text>
                            </View>
                            <View style={styles.saldo}>
                                <Image source={require('../assets/images/saldo.png')} style={{ width: 36, height: 52 }} />
                                <Text style={{ fontSize: 12, right: 15, fontWeight: '600', color: '#416188', marginTop: 15 }}>Rp.150.000</Text>
                            </View>
                            <View style={styles.total}>
                                <Image source={require('../assets/images/total.png')} style={{ width: 36, height: 52 }} />
                                <Text style={{ fontSize: 12, right: -6, fontWeight: '600', color: '#416188', marginTop: 15 }}>24kg</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.dataUserContainer}>
                        <View style={styles.nomorHpContainer}>
                            <Text style={{ color: '#A8A8A8', marginBottom: 10 }}>Nomor HP</Text>
                            <Text style={{ fontSize: 14 }}>08992220222</Text>
                        </View>
                        <View style={styles.emailContainer}>
                            <Text style={{ color: '#A8A8A8', marginBottom: 10, marginTop: 29 }}>Email</Text>
                            <Text>serlysetyani@trashure.com</Text>
                        </View>
                        <View style={styles.ttlContainer}>
                            <Text style={{ color: '#A8A8A8', marginBottom: 10, marginTop: 29 }}>Tanggal lahir</Text>
                            <Text>07 - Juli - 2000</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.btnKeluar} onPress={() => navigation.navigate('Login')}>
                        <Text style={{ color: '#FFF', fontSize: 18, fontWeight: '700', alignSelf: 'center', top: 18 }}>Keluar</Text>
                    </TouchableOpacity>
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
    profilContainer: {
        backgroundColor: 'white',
        width: 360,
        height: 570,
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 100,
        marginBottom: 100
    },
    badgeContainer: {
        width: 351,
        height: 131,
        backgroundColor: '#F6F7F9',
        borderRadius: 20,
        alignSelf: 'center',
        top: -50
    },
    level: {
        left: 34
    },
    saldo: {
        left: 0,
    },
    total: {
        right: 34
    },
    dataUserContainer: {
        left: 23,
        top: -20
    },
    btnKeluar: {
        width: 313,
        height: 56,
        backgroundColor: '#FF5722',
        alignSelf: 'center',
        top: 19,
        borderRadius: 4
    }
});
