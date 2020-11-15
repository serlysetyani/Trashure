import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import Beranda from '../screens/Beranda';
import Penukaran from '../screens/Penukaran';
import Harga from '../screens/Harga';
import Akun from '../screens/Akun';
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types';
import IntroScan from '../screens/IntroScan';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Beranda"
        component={Beranda}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-home" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Penukaran"
        component={Penukaran}
        options={{
          tabBarIcon: ({ color }) => <FontAwesome name="credit-card-alt" size={22} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="introScan"
        component={IntroScan}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="md-search" color={color} />,
          tabBarLabel: 'Scan'
        }}
      />
      <BottomTab.Screen
        name="Harga"
        component={Harga}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="md-pricetag" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Akun"
        component={Akun}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="md-person" color={color} />,
        }}
      />

    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{ headerTitle: 'Tab One Title' }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </TabTwoStack.Navigator>
  );
}
