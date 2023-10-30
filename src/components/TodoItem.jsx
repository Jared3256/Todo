import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const todoItem = ({ item, press }) => {
  return (
    <TouchableOpacity onPress={() => press(item.key)}>
      <Text style={style.item}>{item.text}</Text>
    </TouchableOpacity>
  );
};

export default todoItem;

const style = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
  },
});
