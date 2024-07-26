import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

type Props = {
  strokeWidth: number;
  action: React.Dispatch<React.SetStateAction<number>>;
  label: string;
};

const SizeButton = ({ strokeWidth, action, label }: Props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => action(strokeWidth)}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: "black",
        padding: 10,
        margin: 4,
        borderWidth: 1,
        borderColor: "#a8a29e",
    },
    text: {
        color: "white"
    }
})

export default SizeButton;
