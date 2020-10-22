import React from 'react';
import { View, Text } from 'react-native';

const styles = {
    textStyle: {
        fontSize: 24,
        color: '#416188',
        fontWeight: '600',
        marginLeft: 16
    },
    headerStyle: {
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'left',
        height: 60,
        shadowColor: '#515151',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1
    }
};

const Header = (props) => {
    const { textStyle, headerStyle } = styles;
    return (
        <View style={headerStyle}>
            <Text style={textStyle}>{props.textHeader}</Text>
        </View>
    );
};

export default Header;