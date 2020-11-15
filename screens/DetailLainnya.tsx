import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

export default function NotFoundScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <TouchableOpacity>
                    <View style={styles.notifLainnya}>
                        <Image source={require('../assets/images/trashure.png')} style={{ width: 52, height: 52 }} />
                        <View style={{ marginLeft: 20 }}>
                            <Text style={{ fontSize: 14, fontWeight: '600' }}>Update Trashure v1.3</Text>
                            <Text style={{ fontSize: 12, marginTop: 8 }}>Update App Trashure v1.3 kali ini merupakan ...</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.notifLainnya}>
                        <Image source={require('../assets/images/trashure.png')} style={{ width: 52, height: 52 }} />
                        <View style={{ marginLeft: 20 }}>
                            <Text style={{ fontSize: 14, fontWeight: '600' }}>Update Trashure v1.2</Text>
                            <Text style={{ fontSize: 12, marginTop: 8 }}>Update App Trashure v1.2 kali ini merupakan ...</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.notifLainnya}>
                        <Image source={require('../assets/images/phone.png')} style={{ width: 52, height: 52 }} />
                        <View style={{ marginLeft: 20 }}>
                            <Text style={{ fontSize: 14, fontWeight: '600' }}>Promo Pulsa</Text>
                            <Text style={{ fontSize: 12, marginTop: 8 }}>Diskon penukaran pulsa untuk pengguna kart...</Text>
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
        backgroundColor: '#fff',
    },
    mainContainer: {
        marginRight: 16,
        marginLeft: 16,
        backgroundColor: 'white',
        height: 141
    },
    notifLainnya: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20
    }
});
