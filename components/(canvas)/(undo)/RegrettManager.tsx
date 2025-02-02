import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { AdvancedPath } from "../../../utils/types";
import Undo from "./Undo";
import Redo from "./Redo";

type Props = {
  paths: AdvancedPath[];
  setPaths: React.Dispatch<React.SetStateAction<AdvancedPath[]>>;
  regretPaths: AdvancedPath[];
  setRegretPaths: React.Dispatch<React.SetStateAction<AdvancedPath[]>>;
};

const RegrettManager = ({
  paths,
  setPaths,
  regretPaths,
  setRegretPaths,
}: Props) => {
  return (
    <View style={styles.container}>
      <Undo
        paths={paths}
        setPaths={setPaths}
        regretPaths={regretPaths}
        setRegretPaths={setRegretPaths}
      />
      <Redo
        paths={paths}
        setPaths={setPaths}
        regretPaths={regretPaths}
        setRegretPaths={setRegretPaths}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default RegrettManager;
