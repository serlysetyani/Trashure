import * as React from 'react';
import { StyleSheet, View, Text, Image, TextInput, CheckBox } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Daftar({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.formNama}>
                <Image source={require('../assets/images/namaLogo.png')} style={styles.iconNama} />
                <TextInput
                    style={styles.namaInput}
                    placeholder={'Nama'}
                    underlineColorAndroid='transparent' />
            </View>
            <View style={styles.formEmail}>
                <Image source={require('../assets/images/emailLogo.png')} style={styles.iconEmail} />
                <TextInput
                    style={styles.emailInput}
                    keyboardType='email-address'
                    placeholder={'Email'}
                    underlineColorAndroid='transparent' />
            </View>
            <View style={styles.formTelp}>
                <Image source={require('../assets/images/telpLogo.png')} style={styles.iconTelp} />
                <TextInput
                    style={styles.telpInput}
                    placeholder={'Nomor HP'}
                    keyboardType={'phone-pad'}
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

            <View style={styles.loginButton}>
                <TouchableOpacity style={styles.btnLogin} onPress={() => navigation.navigate('Login')}>
                    <Text style={{ fontSize: 20, fontWeight: '500', color: 'white', alignSelf: 'center', margin: 15 }}>DAFTAR</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.otherOption}>
                <Text style={{ color: '#C6C6C6' }}>Atau daftar dengan</Text>
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    <TouchableOpacity>
                        <Image source={require('../assets/images/google.png')} style={{ width: 60, height: 60 }} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../assets/images/facebook.png')} style={{ width: 60, height: 60 }} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', margin: 10 }}>
                    <Text>Sudah punya akun Trashure?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={{ color: '#416188', fontWeight: '600' }}> MASUK</Text>
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
    formNama: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#C6C6C6',
        height: 56,
        borderRadius: 4,
        margin: 10
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
    formTelp: {
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
    iconNama: {
        padding: 5,
        margin: 10,
        height: 25,
        width: 19,
        borderRadius: 4
    },
    iconEmail: {
        padding: 5,
        margin: 10,
        height: 20,
        width: 22,
        borderRadius: 3
    },
    iconTelp: {
        padding: 5,
        margin: 10,
        height: 25,
        width: 25,
        borderRadius: 4
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