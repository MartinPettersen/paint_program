import React from "react";
import { AdvancedPath } from "../../../utils/types";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

type Props = {
  paths: AdvancedPath[];
  setPaths: React.Dispatch<React.SetStateAction<AdvancedPath[]>>;
  regretPaths: AdvancedPath[];
  setRegretPaths: React.Dispatch<React.SetStateAction<AdvancedPath[]>>;
};

const Redo = ({ paths, setPaths, regretPaths, setRegretPaths }: Props) => {
  const handleRedo = () => {
    if (regretPaths.length > 0) {
      const path: AdvancedPath = regretPaths.pop()!;
      setRegretPaths(regretPaths);
      setPaths([...paths, path]);
    }
  };

  return (
    <TouchableOpacity onPress={() => handleRedo()} style={styles.button}>
      <Feather name={"rotate-cw"} size={35} color={"white"} />
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
  }
})

export default Redo;
