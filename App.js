import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/views/home";
import Cardss from "./src/views/Card";
import Login from "./src/views/login";
import Produtos from "./src/views/exemplo";
import AddressComponent from "./src/components/AddressComponent";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Produtos" component={Produtos} />
      <Tab.Screen name="Endereço" component={AddressComponent} />
      <Tab.Screen name="Configuração" component={Cardss} />
    </Tab.Navigator>
  );
}

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn ? (
          <Stack.Screen
            name="Tabs"
            component={Tabs}
            options={{ headerShown: false }}
          />
        ) : (
          <Stack.Screen
            name="Login"
            options={{ headerShown: false }}
          >
            {() => <Login onLogin={() => setIsLoggedIn(true)} />}
          </Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
