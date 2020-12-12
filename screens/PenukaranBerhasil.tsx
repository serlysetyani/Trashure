import * as React from 'react';
import { StyleSheet, View, Image, Button, TouchableOpacity } from 'react-native';

import { Text } from '../components/Themed';

export default function PenukaranBerhasil({ navigation }) {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/images/checked.png')} style={styles.imgChecked} />
            <Text style={styles.txtBerhasil}>Berhasil</Text>
            <Text style={styles.messages}>Terima kasih telah melakukan penukaran saldo {"\n"} Sisa saldo anda Rp. 144.000</Text>
            <TouchableOpacity style={styles.btnKembali} onPress={() => navigation.navigate('Penukaran')}>
                <Text style={{ color: '#FFF', fontSize: 18, fontWeight: '700', alignSelf: 'center', top: 18 }}>Kembali</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imgChecked: {
        width: 84,
        height: 84
    },
    txtBerhasil: {
        fontSize: 24,
        fontWeight: '700',
        marginTop: 28
    },
    messages: {
        textAlign: 'center',
        marginTop: 28
    },
    btnKembali: {
        width: 221,
        height: 56,
        backgroundColor: '#8BC34A',
        alignSelf: 'center',
        borderRadius: 4,
        marginTop: 36
    }
});
