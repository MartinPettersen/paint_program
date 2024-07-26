import React from "react";
import { View } from "react-native";
import ColorButton from "./ColorButton";

type Props = {
    setColor: React.Dispatch<React.SetStateAction<string>>
}

const ColorPalette = ({setColor}: Props) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <ColorButton color="red" setColor={setColor} />
      <ColorButton color="green" setColor={setColor} />
      <ColorButton color="blue" setColor={setColor} />
      <ColorButton color="pink" setColor={setColor} />
      <ColorButton color="yellow" setColor={setColor} />
    </View>
  );
};

export default ColorPalette;
