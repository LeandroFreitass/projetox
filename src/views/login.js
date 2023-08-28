import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";


export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleTeste = () => {
    console.warn(email + password);
    
    if (email !== "" && password !== "") {
      onLogin();
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.textView}>
        <TextInput
          style={styles.textinput}
          placeholder="Email"
          onChangeText={(email) => setEmail(email)}
        ></TextInput>
      </View>
      <View style={styles.textView}>
        <TextInput
          style={styles.textinput}
          placeholder="Senha"
          onChangeText={(password) => setPassword(password)}
        ></TextInput>
      </View>
      <View>
        <TouchableOpacity
          onPress={handleTeste}
          style={styles.buttonContainer}
        >
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textView: {
    marginBottom: 20,
  },
  textinput: {
    width: 230,
    height: 50,
    borderWidth: 1,
  },
  buttonContainer: {
    width: 230,
    height: 50,
    borderRadius: 20,
    backgroundColor: "red",
  },
  loginText: {
    marginTop: 15,
    textAlign: "center",
  },
});

