import * as React from 'react';
import { StyleSheet, Image, View, SafeAreaView, ScrollView, Text } from 'react-native';

export default function DetailSetoran({ navigation }) {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.historySetoran}></View>
                <View style={styles.historySetoran}></View>
                <View style={styles.historySetoran}></View>
                <View style={styles.historySetoran}></View>
                <View style={styles.historySetoran}></View>
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
    }
});