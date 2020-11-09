import * as React from 'react';
import { StyleSheet, Image, View, SafeAreaView, ScrollView, Text } from 'react-native';

export default function DetailSetoran({ navigation }) {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.historySetoran}>
                    <View style={styles.contentHistory}>
                        <View>
                            <Image source={require('../assets/images/garbage.png')} style={{ height: 52, width: 52 }} />
                        </View>
                        <View style={{ marginLeft: -42 }}>
                            <Text>
                                <Text style={{ fontWeight: '600' }}>Trashbag ID</Text> 1304A327FA</Text>
                            <Text>24 / 04 / 2019</Text>
                        </View>
                        <View>
                            <Text style={{ color: '#FF5722' }}>Proses</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.historySetoran}>
                    <View style={styles.contentHistory}>
                        <View>
                            <Image source={require('../assets/images/garbage.png')} style={{ height: 52, width: 52 }} />
                        </View>
                        <View style={{ marginLeft: -42 }}>
                            <Text>
                                <Text style={{ fontWeight: '600' }}>Trashbag ID</Text> 1876BC2DQZ</Text>
                            <Text>19 / 04 / 2019</Text>
                        </View>
                        <View>
                            <Text style={{ color: '#8BC34A' }}>Selesai</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.historySetoran}>
                    <View style={styles.contentHistory}>
                        <View>
                            <Image source={require('../assets/images/garbage.png')} style={{ height: 52, width: 52 }} />
                        </View>
                        <View style={{ marginLeft: -42 }}>
                            <Text>
                                <Text style={{ fontWeight: '600' }}>Trashbag ID</Text> 12836AJFGA</Text>
                            <Text>15 / 04 / 2019</Text>
                        </View>
                        <View>
                            <Text style={{ color: '#8BC34A' }}>Selesai</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.historySetoran}>
                    <View style={styles.contentHistory}>
                        <View>
                            <Image source={require('../assets/images/garbage.png')} style={{ height: 52, width: 52 }} />
                        </View>
                        <View style={{ marginLeft: -42 }}>
                            <Text>
                                <Text style={{ fontWeight: '600' }}>Trashbag ID</Text> 167JBA487Z</Text>
                            <Text>10 / 04 / 2019</Text>
                        </View>
                        <View>
                            <Text style={{ color: '#8BC34A' }}>Selesai</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.historySetoran}>
                    <View style={styles.contentHistory}>
                        <View>
                            <Image source={require('../assets/images/garbage.png')} style={{ height: 52, width: 52 }} />
                        </View>
                        <View style={{ marginLeft: -42 }}>
                            <Text>
                                <Text style={{ fontWeight: '600' }}>Trashbag ID</Text> 1876BC2DQZ</Text>
                            <Text>15 / 04 / 2019</Text>
                        </View>
                        <View>
                            <Text style={{ color: '#8BC34A' }}>Selesai</Text>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        margin: 10
    },
    historySetoran: {
        width: 360,
        height: 76,
        backgroundColor: 'white',
        borderRadius: 4,
        marginBottom: 8,
    },
    contentHistory: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 12,
        marginLeft: 10,
        marginRight: 10
    }

});