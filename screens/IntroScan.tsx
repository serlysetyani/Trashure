import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Header from '../components/Header';

export default function IntroScan({ navigation }) {
    return (
        <SafeAreaView>
            <Header textHeader={'Scan'} />
            <View style={styles.container}>
                <View style={styles.mainContainer}>
                    <Text style={{ color: '#B3B3B3', alignSelf: 'center', marginTop: 20 }}>Arahkan ke QR code yang ada pada Trashbag</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Scan')}>
                        <Image source={require('../assets/images/FrameScan.png')} style={{ width: 259, height: 220, alignSelf: 'center', marginTop: 30 }} />
                    </TouchableOpacity>
                    <View style={styles.hairline} />
                    <Text style={{ color: '#B3B3B3', alignSelf: 'center', marginTop: 15 }}>atau masukkan kode ID Trashbag</Text>
                    <View style={styles.IDContainer}>
                        <TextInput style={styles.IDInput} placeholder={'Masukkan ID'} underlineColorAndroid='transparent' />
                        <TouchableOpacity style={styles.btnInput} onPress={() => navigation.navigate('Scan')}>
                            <Text style={styles.txtInput}>Input</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 30
    },
    mainContainer: {
        width: 355,
        height: 460,
        backgroundColor: '#fff'
    },
    hairline: {
        marginTop: 30,
        backgroundColor: '#F2F2F2',
        height: 2,
        width: 460
    },
    IDContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F8F8F8',
        height: 56,
        borderRadius: 4,
        margin: 30,
        marginTop: 20
    },
    IDInput: {
        width: '60%',
        height: '60%',
        textAlign: 'center'
    },
    btnInput: {
        backgroundColor: '#8BC34A',
        width: '40%',
        height: '100%',
        borderRadius: 4
    },
    txtInput: {
        fontSize: 18,
        fontWeight: '500',
        color: 'white',
        alignSelf: 'center',
        margin: 15
    }
});
