import { Feather } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

type Props = {
    action: (() => void)
}

const SaveButton = ({action}: Props) => {
  return (
    
    <TouchableOpacity
      style={styles.button}
      onPress={() => action()}
    >
      <Text>Save</Text>
      <Feather name={"save"} size={55} color={"white"} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: "black",
        paddingHorizontal: 8,
        margin: 4,
        borderWidth: 1,
        borderColor: "#a8a29e",
        borderRadius: 5,
        alignContent: "center",
        justifyContent: "center",
    }
})

export default SaveButton;
