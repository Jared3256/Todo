import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Header = () => {
  return (
    <View style={style.header}>
      <Text style={style.title}>My Todos</Text>
    </View>
  );
};

const style = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 38,
    backgroundColor: "coral",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 24,
    fontFamily: "consolas",
    fontWeight: "bold",
  },
});

export default Header;
