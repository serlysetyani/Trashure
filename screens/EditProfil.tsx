import React, { useState, useEffect } from 'react';
import { Image, Platform, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as ImagePicker from 'expo-image-picker';
import { TextInput } from 'react-native-paper';


function EditProfil({ navigation }) {
    const [text, setText] = React.useState('');
    const [image, setImage] = useState(null);

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };
    return (
        <View style={styles.container}>
            <View style={styles.imgPickerContainer}>
                {image && <Image source={{ uri: image }} style={{ width: 80, height: 80, borderRadius: 100 }} />}
                <TouchableOpacity onPress={pickImage} >
                    <Text style={{ color: '#416188' }}>Edit gambar</Text>
                </TouchableOpacity>
            </View>
            <TextInput
                label="Nama"
                value='Serly Setyani'
                onChangeText={text => setText(text)}
                style={styles.form}
            />
            <TextInput
                label="Nomor HP"
                value='081333518083'
                onChangeText={text => setText(text)}
                style={styles.form}
            />
            <TextInput
                label="Email"
                value='serlysetyani@trashure.com'
                onChangeText={text => setText(text)}
                style={styles.form}
            />
            <TextInput
                label="Tanggal Lahir"
                value='07-Juli-2000'
                onChangeText={text => setText(text)}
                style={styles.form}
            />
            <TouchableOpacity style={styles.btnSimpan} onPress={() => navigation.navigate('Akun')}>
                <Text style={{ color: '#FFF', fontSize: 18, fontWeight: '700', alignSelf: 'center', top: 18 }}>Simpan</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    imgPickerContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 34
    },
    imgProfile: {
        width: 80,
        height: 80
    },
    form: {
        marginLeft: 16,
        marginRight: 16,
        marginBottom: 16,
        justifyContent: 'center',
        backgroundColor: '#FFF'
    },
    btnSimpan: {
        width: 313,
        height: 56,
        backgroundColor: '#FF5722',
        alignSelf: 'center',
        top: 19,
        borderRadius: 4
    }
})

export default EditProfil;