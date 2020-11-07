import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import DetailTransaksi from '../screens/DetailTransaksi';
import DetailLainnya from '../screens/DetailLainnya';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

export default function TabStack({ navigation }) {
    return (
        <Tab.Navigator
            initialRouteName="TabNotifikasi"
            tabBarOptions={{
                activeTintColor: 'black',
                fontWeight: '700',
                inactiveTintColor: '#8BC34A',
                style: {
                    backgroundColor: '#FFFFFF',
                },
                labelStyle: {
                    textAlign: 'center',
                },
                indicatorStyle: {
                    borderBottomColor: '#87B56A',
                    borderBottomWidth: 2,
                },
            }}>
            <Tab.Screen
                name="FirstPage"
                component={DetailTransaksi}
                options={{
                    tabBarLabel: 'TRANSAKSI',
                }} />
            <Tab.Screen
                name="SecondPage"
                component={DetailLainnya}
                options={{
                    tabBarLabel: 'LAINNYA',

                }} />
        </Tab.Navigator>
    );
}