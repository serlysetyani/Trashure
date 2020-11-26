import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, TextInput, TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';

export default function App({ navigation }) {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const sheetRef = React.useRef(null);
    const renderContent = () => (
        <View
            style={{
                backgroundColor: 'white',
                padding: 16,
                height: 450,
            }}
        >
            <View style={{ alignSelf: 'center' }}>
                <View style={styles.slide} />
                <View style={styles.slide} />
                <Text style={{ marginTop: 10, color: '#B3B3B3', alignSelf: 'center' }}>atau masukkan kode ID Trashbag</Text>
                <View style={styles.IDContainer}>
                    <TextInput style={styles.IDInput} placeholder={'Masukkan ID'} />
                    <TouchableOpacity style={styles.btnInput} onPress={() => navigation.navigate('Scan')}>
                        <Text style={styles.txtInput}>Input</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );


    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        alert(`${data}`);
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View
            style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'flex-end',
            }}>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            />

            {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
            <BottomSheet
                ref={sheetRef}
                snapPoints={[300, 430]}
                borderRadius={20}
                renderContent={renderContent}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    slide: {
        width: 40,
        height: 4,
        justifyContent: 'center',
        marginBottom: 4,
        backgroundColor: '#212121',
        borderRadius: 4,
        alignSelf: 'center'
    },
    IDContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F8F8F8',
        height: 56,
        borderRadius: 4,
        margin: 30,
        marginTop: 30
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