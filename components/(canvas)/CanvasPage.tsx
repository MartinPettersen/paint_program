import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import CanvasContainer from "./CanvasContainer";
import SizeChanger from "./(size)/SizeChanger";
import ColorPalette from "./(color)/ColorPalette";
import { AdvancedPath } from "../../utils/types";
import RegrettManager from "./(undo)/RegrettManager";
import ClearCanvas from "./(clear)/ClearCanvas";

const CanvasPage = () => {
  const [color, setColor] = useState<string>("blue");
  const [strokeWidth, setStrokeWidth] = useState<number>(6);
  const [paths, setPaths] = useState<AdvancedPath[]>([]);
  const [regretPaths, setRegretPaths] = useState<AdvancedPath[]>([]);

  return (
    <View style={styles.container}>
      <ColorPalette setColor={setColor} />
      <CanvasContainer
        color={color}
        strokeWidth={strokeWidth}
        paths={paths}
        setPaths={setPaths}
        regretPaths={regretPaths}
      />
      <View style={{ flexDirection: "row" }}>
        <SizeChanger
          strokeWidth={strokeWidth}
          setStrokeWidth={setStrokeWidth}
        />
        <RegrettManager
          paths={paths}
          setPaths={setPaths}
          regretPaths={regretPaths}
          setRegretPaths={setRegretPaths}
        />
        <ClearCanvas setPaths={setPaths} setRegretPaths={setRegretPaths}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#292524",
  },
});

export default CanvasPage;
