import * as React from 'react';
import { StyleSheet, View, Image, Button } from 'react-native';

import { Text } from '../components/Themed';

export default function PenukaranBerhasil() {
    return (
        <View style={styles.container}>
            <View>
                <Image source={require('../assets/images/checked.png')} style={{ width: 80, height: 80 }} />
                <Text style={{ fontWeight: '700', fontSize: 24 }}>Berhasil</Text>
                <Text style={{ color: '#737373' }}>Terima kasih telah melakukan penukaran saldo</Text>
                <Text style={{ color: '#737373' }}>Sisa saldo anda adalah Rp.144.000</Text>
                <Button title={'Kembali'} style={{ color: 'white', }} />
            </View>
        </View>
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
});
