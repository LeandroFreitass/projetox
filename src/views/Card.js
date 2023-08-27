import React, { useEffect, useState } from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import { Card } from "@rneui/base";

export default function Cardss() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const url = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  return (
    <View style={styles.container}>
      <ScrollView>
        {loading ? (
          <Text>Loading...</Text>
        ) : (
          data.map((post, index) => {
            return (
              <View key={index}>
                <Card>
                  <Text style={styles.title}>{post.title}</Text>
                  <Text>{post.body}</Text>
                </Card>
              </View>
            );
          })
        )}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
