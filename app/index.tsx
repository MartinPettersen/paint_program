import React from "react";
import { Text, View } from "react-native";
import CanvasContainer from "../components/(canvas)/CanvasContainer";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CanvasContainer />
    </View>
  );
}
