import { Button } from "@rneui/base";
import React, { useState, useEffect } from "react";
import { Text, View, TextInput } from "react-native";

function AddressComponent() {
  return (
    <View>
      <Text>Nome Completo: </Text>
      <TextInput placeholder="Nome" />

      <Text>Email: </Text>
      <TextInput placeholder="Email" />

      <Text>Numero de Telefone: </Text>
      <TextInput placeholder="Seu numero" />

      <Text>CPF: </Text>
      <TextInput placeholder="CPF" />

      <Button>
        <Text>Enviar</Text>
      </Button>
    </View>
  );
}

export default AddressComponent;
