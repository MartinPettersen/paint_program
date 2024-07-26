import React from "react";
import { AdvancedPath } from "../../../utils/types";
import { TouchableOpacity, Text } from "react-native";
import { Feather } from "@expo/vector-icons";

type Props = {
  paths: AdvancedPath[];
  setPaths: React.Dispatch<React.SetStateAction<AdvancedPath[]>>;
  regretPaths: AdvancedPath[];
  setRegretPaths: React.Dispatch<React.SetStateAction<AdvancedPath[]>>;
};

const Undo = ({ paths, setPaths, regretPaths, setRegretPaths }: Props) => {
  const handleUndo = () => {
    const path: AdvancedPath = paths.pop()!;
    setPaths(paths);
    setRegretPaths([...regretPaths, path]);
  };

  return (
    <TouchableOpacity onPress={() => handleUndo()}>
      <Feather name={"rotate-ccw"} size={35} color={"white"} />
    </TouchableOpacity>
  );
};

export default Undo;
