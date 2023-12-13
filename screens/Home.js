import {
    StyleSheet,
    Text,
    SafeAreaView,
    Image,
    View,
} from "react-native";

export default function Home({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.texto}>Welcome to</Text>
            <View>
                <Image
                    style={styles.home}
                    source={require("../assets/imagens/logo_pam.png")}
                />
            </View>
        </SafeAreaView>
    );
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        padding: 16,
        alignItems: "center",
        justifyContent: "center"
    },
    home: {
        width: 300,
        height: 180,
        marginLeft: 15
    },
    texto: {
        fontSize: 25,
        fontFamily: 'Roboto_300Light',
        color: "white",
        marginBottom: -30,
    }
});