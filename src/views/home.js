import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Text,
  View,
  Image,
} from "react-native";
import { SearchBar } from "@rneui/themed";
import CarouselView from "../components/carousel";
import { Card } from "@rneui/base";
import LocationComponent from "../components/AddressComponent";

export default function Home() {
  const [search, setSearch] = useState("");

  const updateSearch = (search) => {
    setSearch(search);
  };
  return (
    <SafeAreaView>
      <StatusBar />
      <View>
        <SearchBar
          placeholder="Type Here..."
          onChangeText={updateSearch}
          value={search}
        />
      </View>
      <View style={styles.viewtitle}>
        <CarouselView />
      </View>
      <View style={styles.bodyView}>
        <Card>
          <Card.Title>Promoções do Dia</Card.Title>
          <View>
            <Text>Carrinho de Compras</Text>
            <Image
              style={styles.cardpromo}
              source={require("../../assets/mercadoexemplowebp.webp")}
            ></Image>
            <Text>R$ 50,00</Text>
          </View>
        </Card>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  viewtitle: {
    marginTop: 30,
  },
  bodyView: {
    marginTop: 200,
  },
  cardpromo: {
    width: 80,
    height: 80,
  },
});
