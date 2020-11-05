import * as React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Pengaturan({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.upContainer}>
                <TouchableOpacity style={{ width: '100%' }}>
                    <View style={styles.gantiBahasa}>
                        <Image source={require('../assets/images/bahasa.png')} style={{ width: 24, height: 24 }} />
                        <Text style={{ fontSize: 18, marginLeft: 39 }}>Ganti Bahasa</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: '100%' }}>
                    <View style={styles.notifikasi}>
                        <Image source={require('../assets/images/notification.png')} style={{ width: 24, height: 24 }} />
                        <Text style={{ fontSize: 18, marginLeft: 39 }}>Notifikasi</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.bottContainer}>
                <TouchableOpacity style={{ width: '100%' }}>
                    <View style={styles.bantuan}>
                        <Image source={require('../assets/images/bantuan.png')} style={{ width: 24, height: 24 }} />
                        <Text style={{ fontSize: 18, marginLeft: 39 }}>Bantuan</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: '100%' }}>
                    <View style={styles.privasi}>
                        <Image source={require('../assets/images/privasi.png')} style={{ width: 24, height: 24 }} />
                        <Text style={{ fontSize: 18, marginLeft: 39 }}>Kebijakan Privasi</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: '100%' }}>
                    <View style={styles.layanan}>
                        <Image source={require('../assets/images/layanan.png')} style={{ width: 24, height: 24 }} />
                        <Text style={{ fontSize: 18, marginLeft: 39 }}>Ketentuan Layanan</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: '100%' }}>
                    <View style={styles.nilai}>
                        <Image source={require('../assets/images/nilai.png')} style={{ width: 24, height: 24 }} />
                        <Text style={{ fontSize: 18, marginLeft: 39 }}>Beri Kami Nilai</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    upContainer: {
        marginTop: 20,
        backgroundColor: 'white',
        height: 141
    },
    gantiBahasa: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 56,
        borderRadius: 4,
        margin: 10,
        marginBottom: 0,
        marginLeft: 16
    },
    notifikasi: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 56,
        borderRadius: 4,
        margin: 10,
        marginTop: 0,
        marginLeft: 16
    },
    bottContainer: {
        marginTop: 16,
        backgroundColor: 'white',
        height: 279
    },
    bantuan: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 56,
        borderRadius: 4,
        margin: 10,
        marginBottom: 0,
        marginLeft: 16
    },
    privasi: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 56,
        borderRadius: 4,
        margin: 10,
        marginBottom: 0,
        marginLeft: 16
    },
    layanan: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 56,
        borderRadius: 4,
        margin: 10,
        marginBottom: 0,
        marginLeft: 16
    },
    nilai: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 56,
        borderRadius: 4,
        margin: 10,
        marginBottom: 0,
        marginLeft: 16
    }
});