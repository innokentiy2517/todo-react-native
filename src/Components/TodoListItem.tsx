import React from "react";
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import Svg, { Path } from "react-native-svg";
import { useActions } from "../hooks/useActions";
import { checkPath } from "../assets/checkPath";
import { trashPath } from "../assets/trashPath";

interface TodoListItemPropsInterface {
  id: string;
  completed: boolean;
  text: string;
}

const TodoListItem = ({ id, completed, text }: TodoListItemPropsInterface) => {
  const { doneTodo, deleteTodo } = useActions();
  const onTrashPress = () => {
    deleteTodo(id);
  };
  const onCheckPress = () => {
    doneTodo({ id, completed: !completed });
  };
  return (
    <View style={styles.listItem}>
      <View
        style={
          completed
            ? [styles.listItemCheck, styles.listItemCheckCompleted]
            : styles.listItemCheck
        }
      >
        <TouchableWithoutFeedback onPress={onCheckPress}>
          <Svg width={16} height={12} fill="none">
            <Path d={checkPath} fill={completed ? `#000` : `none`} />
          </Svg>
        </TouchableWithoutFeedback>
      </View>
      <Text style={styles.listItemText} numberOfLines={2}>
        {text}
      </Text>
      <View style={styles.listItemTrash}>
        <TouchableWithoutFeedback onPress={onTrashPress}>
          <Svg width={18} height={20} fill="none">
            <Path d={trashPath} fill="#000" />
          </Svg>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    minHeight: 60,
    paddingTop: 0,
    paddingHorizontal: 15,
    alignItems: "center",
    backgroundColor: "#d4d4d4",
    marginBottom: 8,
  },
  listItemText: {
    width: "90%",
  },
  listItemCheck: {
    marginRight: 5,
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 10,
    height: 20,
    width: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  listItemCheckCompleted: { backgroundColor: "#85d44e" },
  listItemTrash: {
    position: "absolute",
    right: 15,
  },
});

export default TodoListItem;
