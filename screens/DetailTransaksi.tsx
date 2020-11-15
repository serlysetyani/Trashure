import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

export default function DetailTransaksi({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <TouchableOpacity style={{ width: '100%' }}>
                    <View style={styles.penukaran}>
                        <Image source={require('../assets/images/phone.png')} style={{ width: 52, height: 52 }} />
                        <View style={{ marginLeft: 20 }}>
                            <Text style={{ fontSize: 14, fontWeight: '600' }}>Penukaran Pulsa</Text>
                            <Text style={{ fontSize: 12, marginTop: 8 }}>Pulsa sebesar 5000 dengan nomor kartu Tri ...</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.penukaran}>
                        <Image source={require('../assets/images/phone.png')} style={{ width: 52, height: 52 }} />
                        <View style={{ marginLeft: 20 }}>
                            <Text style={{ fontSize: 14, fontWeight: '600' }}>Penukaran Pulsa</Text>
                            <Text style={{ fontSize: 12, marginTop: 8 }}>Pulsa sebesar 10000 dengan nomor kartu Tri ...</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.penukaran}>
                        <Image source={require('../assets/images/phone.png')} style={{ width: 52, height: 52 }} />
                        <View style={{ marginLeft: 20 }}>
                            <Text style={{ fontSize: 14, fontWeight: '600' }}>Penukaran Pulsa</Text>
                            <Text style={{ fontSize: 12, marginTop: 8 }}>Pulsa sebesar 10000 dengan nomor kartu Tri ...</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.penukaran}>
                        <Image source={require('../assets/images/Dana.png')} style={{ width: 52, height: 52 }} />
                        <View style={{ marginLeft: 20 }}>
                            <Text style={{ fontSize: 14, fontWeight: '600' }}>Saldo DANA</Text>
                            <Text style={{ fontSize: 12, marginTop: 8 }}>Saldo dana sebesar 25000 berhasil ditukarkan...</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.penukaran}>
                        <Image source={require('../assets/images/linkAja.png')} style={{ width: 52, height: 52 }} />
                        <View style={{ marginLeft: 20 }}>
                            <Text style={{ fontSize: 14, fontWeight: '600' }}>Saldo LinkAja</Text>
                            <Text style={{ fontSize: 12, marginTop: 8 }}>Saldo LinkAja sebesar 5000 berhasil ditukarka...</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    mainContainer: {
        marginRight: 16,
        marginLeft: 16,
        backgroundColor: 'white',
        height: 141
    },
    penukaran: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20
    }
});
