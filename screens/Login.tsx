import * as React from 'react';
import { StyleSheet, View, Text, Image, TextInput, CheckBox } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Login({ navigation }) {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/images/Logo.png')} style={{ width: 93, height: 99, alignSelf: 'center', margin: 30 }} />
            <View style={styles.formEmail}>
                <Image source={require('../assets/images/emailLogo.png')} style={styles.iconEmail} />
                <TextInput
                    style={styles.emailInput}
                    keyboardType='email-address'
                    placeholder={'Email'}
                    underlineColorAndroid='transparent' />
            </View>
            <View style={styles.formPassword}>
                <Image source={require('../assets/images/passLogo.png')} style={styles.iconPass} />
                <TextInput
                    style={styles.passwordInput}
                    placeholder={'Password'}
                    secureTextEntry={true}
                    underlineColorAndroid='transparent' />
            </View>
            <View style={styles.rememberContainer}>
                <View style={{ flexDirection: 'row' }} >
                    <View>
                        <CheckBox style={{ width: 28, height: 28, borderRadius: 4, borderColor: '#C6C6C6' }} />
                    </View>
                    <View style={{ justifyContent: 'center', margin: 5 }}>
                        <Text style={{ color: '#7C7C7C' }}>Ingat saya?</Text>
                    </View>
                </View>
                <View>
                    <TouchableOpacity>
                        <Text style={{ justifyContent: 'center', margin: 5, color: '#416188', fontWeight: '600' }}>LUPA PASSWORD?</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.loginButton}>
                <TouchableOpacity style={styles.btnLogin} onPress={() => navigation.navigate('Root')}>
                    <Text style={{ fontSize: 20, fontWeight: '500', color: 'white', alignSelf: 'center', margin: 15 }}>MASUK</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.otherOption}>
                <Text style={{ color: '#C6C6C6' }}>Atau masuk dengan</Text>
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    <TouchableOpacity>
                        <Image source={require('../assets/images/google.png')} style={{ width: 60, height: 60 }} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../assets/images/facebook.png')} style={{ width: 60, height: 60 }} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', margin: 10 }}>
                    <Text>Belum punya akun Trashure?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Daftar')}>
                        <Text style={{ color: '#416188', fontWeight: '600' }}> DAFTAR</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    formEmail: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#C6C6C6',
        height: 56,
        borderRadius: 4,
        margin: 10
    },
    formPassword: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#C6C6C6',
        height: 56,
        borderRadius: 4,
        margin: 10
    },
    iconEmail: {
        padding: 5,
        margin: 10,
        height: 20,
        width: 22,
        borderRadius: 3
    },
    emailInput: {
        width: '100%',
        height: '100%'
    },
    passwordInput: {
        width: '100%',
        height: '100%'
    },
    iconPass: {
        padding: 5,
        margin: 10,
        height: 25,
        width: 22,
        borderRadius: 4
    },
    rememberContainer: {
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    loginButton: {
        marginTop: 20,
    },
    btnLogin: {
        margin: 10,
        backgroundColor: '#8BC34A',
        height: 56,
        borderRadius: 4
    },
    otherOption: {
        alignItems: 'center',
        margin: 10
    }
});