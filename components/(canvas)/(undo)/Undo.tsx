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

const Undo = ({ paths, setPaths, regretPaths, setRegretPaths }: Props) => {
  const handleUndo = () => {
    if (paths.length > 0) {
      const path: AdvancedPath = paths.pop()!;
      setPaths(paths);
      setRegretPaths([...regretPaths, path]);
    }
  };

  return (
    <TouchableOpacity onPress={() => handleUndo()} style={styles.button}>
      <Feather name={"rotate-ccw"} size={35} color={"white"} />
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

export default Undo;
