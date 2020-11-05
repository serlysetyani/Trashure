import React from 'react';
import { View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const styles = {
    textStyle: {
        fontSize: 24,
        color: '#416188',
        fontWeight: '700',
        margin: 16
    },
    headerStyle: {
        backgroundColor: '#FFFFFF',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 60,
        shadowColor: '#515151',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        flexDirection: 'row',

    }
};

const Header = (props) => {
    const { textStyle, headerStyle } = styles;
    const navigation = useNavigation();
    return (
        <View style={headerStyle}>
            <Text style={textStyle}>{props.textHeader}</Text>
            <View style={{ flexDirection: 'row', marginRight: 16 }}>
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('Notifikasi')}>
                        <Image source={require('../assets/images/notifications.png')} style={{ width: 19, height: 20 }} />
                    </TouchableOpacity>
                </View>
                <View style={{ marginLeft: 20 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Pengaturan')}>
                        <Image source={require('../assets/images/settings.png')} style={{ width: 20, height: 19.4 }} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default Header;