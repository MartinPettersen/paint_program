import { Feather } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

type Props = {
  shareDrawingAction: () => void;
};

const ShareButton = ({ shareDrawingAction }: Props) => {
  const handleShare = () => {
    shareDrawingAction();
  };
  return (
    <TouchableOpacity style={styles.button} onPress={handleShare}>
      <Feather name={"share"} size={55} color={"white"} />
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
});

export default ShareButton;
