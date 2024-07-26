import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import CanvasContainer from "./CanvasContainer";
import SizeChanger from "./SizeChanger";
import ColorPalette from "./ColorPalette";
import { AdvancedPath } from "../../utils/types";

const CanvasPage = () => {
  const [color, setColor] = useState<string>("blue");
  const [strokeWidth, setStrokeWidth] = useState<number>(6);
  const [paths, setPaths] = useState<AdvancedPath[]>([]);

  return (
    <View style={styles.container}>
      <ColorPalette setColor={setColor}/>
      <CanvasContainer color={color} strokeWidth={strokeWidth} paths={paths} setPaths={setPaths}/>
      <SizeChanger strokeWidth={strokeWidth} setStrokeWidth={setStrokeWidth} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});

export default CanvasPage;
