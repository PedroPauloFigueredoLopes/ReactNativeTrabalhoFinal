import React from "react";
import { StyleSheet, Text, View } from "react-native";

function Header(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingBottom: 25,
    backgroundColor: "#134fff",
    alignItems: "center",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});

export default Header;
