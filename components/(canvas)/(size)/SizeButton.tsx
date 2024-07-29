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
      width: 60,
      height: 60,
      borderWidth: 1,
      borderColor: "#a8a29e",
      borderRadius: 5,
      alignContent: "center",
      justifyContent: "center",
      alignItems: "center",
      margin: 10,
    },
    text: {
        color: "white",
        fontSize: 40,
        alignContent: "center",
        justifyContent: "center",
    }
})

export default SizeButton;
