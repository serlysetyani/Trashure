import React from 'react'
import { Image, StyleSheet, TouchableOpacity, Text, View } from 'react-native'

function KonfirmasiPenukaran({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.jenisPenukaranContainer}>
                <Image source={require('../assets/images/iconPulsa.png')} style={styles.iconJenisPenukaran} />
                <Text style={styles.txtJenisPenukaran}>Pulsa</Text>
            </View>
            <View style={styles.jenisLayananContainer}>
                <Text style={styles.txtJenisLayanan}>Jenis Layanan</Text>
                <Text style={styles.namaOperator}>Tri Indonesia</Text>
            </View>
            <View style={styles.nomorContainer}>
                <Text style={styles.txtNomor}>Nomor</Text>
                <Text style={styles.nomorTelepon}>081333518083</Text>
            </View>
            <View style={styles.pulsaContainer}>
                <Text style={styles.txtPulsa}>Pulsa</Text>
                <Text style={styles.nominalPulsa}>5.000</Text>
            </View>
            <View style={styles.HargaContainer}>
                <Text style={styles.txtHarga}>Harga</Text>
                <Text style={styles.totalHarga}>6.000</Text>
            </View>
            <TouchableOpacity style={styles.btnTukar} onPress={() => navigation.navigate('PenukaranBerhasil')}>
                <Text style={{ color: '#FFF', fontSize: 18, fontWeight: '700', alignSelf: 'center', top: 18 }}>Tukar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'center',
        backgroundColor: '#FFF',
        width: '95%',
        marginTop: 30
    },
    jenisPenukaranContainer: {
        flexDirection: 'row',
        marginTop: 28,
        marginLeft: 35
    },
    iconJenisPenukaran: {
        width: 25,
        height: 25,
    },
    txtJenisPenukaran: {
        fontSize: 18,
        fontWeight: '700',
        alignSelf: 'center',
        marginLeft: 16
    },
    jenisLayananContainer: {
        marginTop: 74,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 35,
        marginRight: 35,
    },
    namaOperator: {
        fontSize: 14,
        fontWeight: '700'
    },
    nomorContainer: {
        marginTop: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 35,
        marginRight: 35,
    },
    nomorTelepon: {
        fontWeight: '700',
        fontSize: 14,
    },
    pulsaContainer: {
        marginTop: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 35,
        marginRight: 35,
    },
    nominalPulsa: {
        fontWeight: '700'
    },
    HargaContainer: {
        marginTop: 65,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 35,
        marginRight: 35,
    },
    totalHarga: {
        fontWeight: '700',
        fontSize: 14
    },
    btnTukar: {
        width: 313,
        height: 56,
        backgroundColor: '#FF5722',
        alignSelf: 'center',
        borderRadius: 4,
        marginTop: 150,
    }
})

export default KonfirmasiPenukaran
