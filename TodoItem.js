// components/TodoItem.js
// One row in the todo list. This file is PROVIDED - no changes needed.

import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function TodoItem({ title, completed }) {
  return (
    <View style={styles.row}>
      <Text style={styles.icon}>{completed ? "✅" : "⬜"}</Text>
      <Text style={[styles.title, completed && styles.done]}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 14,
    marginBottom: 8,
    borderRadius: 10,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  icon: { fontSize: 18, marginRight: 10 },
  title: { fontSize: 16, color: "#222", flexShrink: 1 },
  done: { textDecorationLine: "line-through", color: "#999" },
});
