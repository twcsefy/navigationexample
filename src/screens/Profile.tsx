import React from "react";
import Footer from "../components/Footer";
import Head from "../components/Head";
import { Text, View } from "react-native";


function Profile(): React.JSX.Element {
    return (
        <View>
            <Head />
            <Text> Tela de Perfil</Text>
            <Footer />
        </View>
    );
}

export default Profile;