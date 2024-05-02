import React from "react";
import Footer from "../components/Footer";
import Head from "../components/Head";
import { Text, View } from "react-native";


function Home(): React.JSX.Element {
    return (
        <View>
            <Head />
            <Text> Tela Principal</Text>
            <Footer />
        </View>
    );
}

export default Home;