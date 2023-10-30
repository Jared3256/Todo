import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Alert,
  FlatList,
  TouchableWithoutFeedback,
  //Keyboard
} from "react-native";
import Header from "./components/header";
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/addTodo";

const App = () => {
  const pressHandler = (key) => {
    setTodo((newTodos) => {
      return newTodos.filter((todo) => todo.key !== key);
    });
  };

  const [todo, setTodo] = useState([
    { text: "Buy cofee", key: 1 },
    { text: "Assignment", key: 2 },
    { text: "Buy Lunch", key: 3 },
    { text: "Take Medication", key: 4 },
    { text: "Watch presentation", key: 5 },
    { text: "Go to the library", key: 6 },
  ]);

  const submit = (tex) => {
    if (tex.length > 3) {
      setTodo([{ text: tex, key: Math.random().toString() }, ...todo]);
    } else {
      Alert.alert("OOPS!", "Todos must be over three charaters long");
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        // Keyboard.dismiss();
      }}
    >
      <View>
        <Header />
        <View style={style.content}>
          <AddTodo submit={submit} />

          <View style={style.list}>
            <FlatList
              renderItem={({ item }) => (
                <TodoItem item={item} press={pressHandler} />
              )}
              data={todo}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const style = StyleSheet.create({
  content: { padding: 40 },
  list: { marginTop: 20 },
  item: {
    marginTop: 24,
    padding: 30,
    margin: 10,
    backgroundColor: "pink",
  },
  input: {
    borderColor: "#777",
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    minWidth: 40,
    alignItems: "center",
  },
  buttonContainer: {
    marginTop: "20px",
  },
  container: {
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: "#f012fg",
    // alignItems:"Center",
    paddingTop: "40px",
    gap: "5px",
  },

  text: {
    color: "blue",
    fontWeight: "bold",
    fontFamily: "Consolas",
    spacing: "25px",
  },
});

export default App;
