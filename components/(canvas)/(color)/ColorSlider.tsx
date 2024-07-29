import Slider from "@react-native-community/slider";
import React from "react";
import { StyleSheet, View, Text } from "react-native";

type Props = {
  color: number;
  setColor: React.Dispatch<React.SetStateAction<number>>;
  label: string;
};

const ColorSlider = ({ color, setColor, label }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{label}</Text>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={255}
        step={1}
        value={color}
        onValueChange={(value) => setColor(value)}
        minimumTrackTintColor="white"
        maximumTrackTintColor="#343A40"
        thumbTintColor="White"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  slider: {
    width: "80%",
    height: 40,

  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 30,
  }
});

export default ColorSlider;
