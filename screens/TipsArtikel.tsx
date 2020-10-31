import * as React from 'react';
import { StyleSheet, Image, View, SafeAreaView, ScrollView, Text } from 'react-native';

export default function DetailSetoran({ navigation }) {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.judulArtikel}>Cara Memilah Sampah yang Baik</Text>
                <Text style={styles.tanggalArtikel}>17 April, 2019</Text>
                <Image source={require('../assets/images/Sampah.png')} style={{ height: 194, width: 360, borderRadius: 4 }} />
                <View style={styles.paragraph}>
                    <Text style={styles.p1}>Cara memilah sampah yang baik, hal yang pertama harus kamu lakuin adalah dengan cara mengetahui jenis-jenis sampah tersebut, mulai dari sampah kering, sampah basah. Sampah kering biasa nya terdiri dari sampah botol-botolan, kaleng-kalengan bekas minuman biasanya, sampah basah bisanya bekas sisa-sisa makanan.</Text>
                    <Text style={styles.p2}>Untuk memilahnya, kami sarankan untuk mengelompokkannya menjadi dua kelompok, yang pertama sampah kering yang kedua sampah basah, disarankan untuk menyetor sampah kering saja, agar mudah ditimbang dan dihitung beratnya.</Text>
                    <Text style={styles.p3}>Jika anda mempunyai kardus, saran kami untuk memilah sampah kering tersebut menjadi beberapa kategori lagi, yang pertama sampah botol, yang kedua sampah kaleng dan yang terakhir adalah sampah kardus. Setelah itu masukkan sampah yang kalian pungut kedalam kardus-kardus yang sudah disediakan berdasarkan kategori yang sudah dibuat.</Text>
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
    tanggalArtikel: {
        color: '#B3B3B3',
        alignSelf: 'flex-start',
        marginTop: 32,
        marginBottom: 13
    },
    judulArtikel: {
        fontSize: 24,
        fontWeight: '600',
        marginTop: 20,
        alignItems: 'center'
    },
    paragraph: {
        marginTop: 18,
    },
    p1: {
        marginBottom: 10,
        textAlign: "justify"
    },
    p2: {
        marginBottom: 10,
        textAlign: "justify"
    },
    p3: {
        marginBottom: 10,
        textAlign: "justify"
    },
});
