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
                inactiveTintColor: '#8BC34A',
                style: {
                    backgroundColor: '#FFFFFF',
                },
                indicatorStyle: {
                    borderBottomColor: '#87B56A',
                    borderBottomWidth: 2,
                },
                tabStyle: {
                    borderTopWidth: 0
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