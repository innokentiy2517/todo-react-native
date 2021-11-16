import { StatusBar } from "expo-status-bar";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { TodoHeader } from "./src/Components/TodoHeader";
import TodoAddField from "./src/Components/TodoAddField";
import TodoList from "./src/Components/TodoList";
import { Provider } from "react-redux";
import { persistor, store } from "./src/store";
import { PersistGate } from "redux-persist/integration/react";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ScrollView>
          <View style={styles.container}>
            <TodoHeader />
            <TodoAddField />
            <TodoList />
            <StatusBar style="auto" />
          </View>
        </ScrollView>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 10,
  },
});
