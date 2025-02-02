import { Feather } from "@expo/vector-icons";
import React, { useState } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import SaveNameWindow from "./SaveNameWindow";

type Props = {
  action: () => void;
};

const SaveButton = ({ action }: Props) => {
  const [saveModalVisible, setSaveModalVisible] = useState(false);

  const handleSaving = () => {
    setSaveModalVisible(true);
  };

  return (
    <>
      <TouchableOpacity style={styles.button} onPress={() => handleSaving()}>
        <Feather name={"save"} size={55} color={"white"} />
      </TouchableOpacity>
      <SaveNameWindow
        saveModalVisible={saveModalVisible}
        setSaveModalVisible={setSaveModalVisible}
        action={action}
      />
    </>
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

export default SaveButton;
