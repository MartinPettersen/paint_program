import React from "react";
import { View } from "react-native";
import CanvasContainer from "../components/(canvas)/CanvasContainer";
import CanvasPage from "../components/(canvas)/CanvasPage";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CanvasPage />
    </View>
  );
}
