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

const Redo = ({ paths, setPaths, regretPaths, setRegretPaths }: Props) => {
  const handleRedo = () => {
    if (regretPaths.length > 0) {
      const path: AdvancedPath = regretPaths.pop()!;
      setRegretPaths(regretPaths);
      setPaths([...paths, path]);
    }
  };

  return (
    <TouchableOpacity onPress={() => handleRedo()}>
      <Feather name={"rotate-cw"} size={35} color={"white"} />
    </TouchableOpacity>
  );
};

export default Redo;
