import React from "react";
import { View } from "react-native";
import ColorButton from "./ColorButton";
import CustomColor from "./CustomColor";

type Props = {
    setColor: React.Dispatch<React.SetStateAction<string>>
}

const ColorPalette = ({setColor}: Props) => {
  return (
    <>
    <View style={{ flexDirection: "row" }}>
      <ColorButton color="white" setColor={setColor} />
      <ColorButton color="black" setColor={setColor} />
      <ColorButton color="#3b82f6" setColor={setColor} />
      <ColorButton color="#a855f7" setColor={setColor} />
      <ColorButton color="#f472b6" setColor={setColor} />
    </View>
    <View style={{ flexDirection: "row" }}>
      <ColorButton color="#ef4444" setColor={setColor} />
      <ColorButton color="#22c55e" setColor={setColor} />
      <ColorButton color="#737373" setColor={setColor} />
      <ColorButton color="#f97316" setColor={setColor} />
      <ColorButton color="#422006" setColor={setColor} />
    </View>
    <View style={{ flexDirection: "row" }}>
      <CustomColor setColor={setColor}/>
      <CustomColor setColor={setColor}/>
      <CustomColor setColor={setColor}/>
    </View>
    </>
  );
};

export default ColorPalette;
