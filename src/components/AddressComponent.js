import { Button } from "@rneui/base";
import React, { useState, useEffect } from "react";
import { Text, View, TextInput } from "react-native";

function AddressComponent() {
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState({
    logradouro: "",
    bairro: "",
    localidade: "",
    uf: "",
  });

  useEffect(() => {
    if (cep.length === 8) {
      const url = `https://viacep.com.br/ws/${cep}/json/`;
      fetch(url)
        .then((resp) => resp.json())
        .then((json) => {
          if (json.erro) {
            console.error("CEP não encontrado");
            return;
          }
          setAddress(json);
        })
        .catch((error) => console.error(error));
    }
  }, [cep]);

  return (
    <View>
      <Text>CEP: </Text>
      <TextInput 
        value={cep} 
        onChangeText={setCep} 
        placeholder="Digite o CEP"
        keyboardType="numeric"
        maxLength={8}
      />

      <Text>Rua: </Text>
      <TextInput value={address.logradouro} placeholder="Nome da rua" />

      <Text>Bairro: </Text>
      <TextInput value={address.bairro} placeholder="Nome do bairro" />

      <Text>Estado: </Text>
      <TextInput value={address.uf} placeholder="Nome do estado" />

      <Text>Número: </Text>
      <TextInput placeholder="Número da casa" />

      <Text>Cidade: </Text>
      <TextInput value={address.localidade} placeholder="Nome da cidade" />
      <Button>
        <Text>Enviar</Text>
      </Button>
    </View>
  );
}

export default AddressComponent;
