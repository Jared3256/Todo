import React , {useState} from "react";
import {View , TextInput, Button, StyleSheet} from "react-native"

const AddTodo =({submit})=>{
  const [text , setText]  = useState();

  const handleOnChange=(value) =>{
    setText(value);
  }

  const handleClick=()=>{
      submit(text);
  }

  return (
    <View>
      <TextInput
      style={style.input}
        placeholder={"add text here..."}
        onChangeText={handleOnChange}
      />
      <Button 
        color={"coral"}
        onPress = {handleClick}
        title="add todo"/>
    </View>
  );
}
const style = StyleSheet.create({
  input:{
    marginBottom:10,
    minHeight:20,
    padding:10,
    borderBottomWidth:1,
    borderColor:"#ddd",
    fontStyle:"italic",
    fontFamily:"consolas",
    textTransform:"uppercase",
    textDecorationColor:"blue"
  }
})
export default AddTodo;