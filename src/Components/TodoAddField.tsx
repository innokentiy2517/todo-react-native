import React, { useState } from "react";
import "react-native-get-random-values";
import { v4 as uuid } from "uuid";
import {
  Keyboard,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Svg, { Path } from "react-native-svg";
import { useActions } from "../hooks/useActions";
import { plusPath } from "../assets/plusPath";

const TodoAddField = () => {
  const { addTodo } = useActions();
  const onAddPress = () => {
    if (text !== "") {
      addTodo({ id: uuid(), text: text, completed: false });
      setText("");
      Keyboard.dismiss();
    }
  };
  const [text, setText] = useState("");
  return (
    <View style={styles.addContainer}>
      <TextInput
        onChangeText={setText}
        placeholderTextColor={"#fff"}
        style={styles.input}
        placeholder={"Название задачи..."}
        value={text}
        onSubmitEditing={onAddPress}
      />
      <TouchableWithoutFeedback style={styles.addButton} onPress={onAddPress}>
        <Svg width={20} height={20} fill="none">
          <Path d={plusPath} fill="#000" />
        </Svg>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  addContainer: {
    marginTop: 8,
    marginBottom: 8,
    backgroundColor: "#9d7b7b",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
  },
  input: {
    color: "#fff",
    fontSize: 21,
    width: "90%",
  },
  addButton: {
    marginRight: 15,
    width: 20,
    position: "absolute",
    right: 0,
  },
});

export default TodoAddField;
