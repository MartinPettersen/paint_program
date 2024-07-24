import React from "react";
import SizeButton from "./SizeButton";
import { View, Text, StyleSheet } from "react-native";

type Props = {
  strokeWidth: number;
  setStrokeWidth: React.Dispatch<React.SetStateAction<number>>;
};

const SizeChanger = ({ strokeWidth, setStrokeWidth }: Props) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>{strokeWidth}</Text>
      </View>
      <View>
        <SizeButton
          label={"+"}
          strokeWidth={strokeWidth}
          action={() => setStrokeWidth(strokeWidth + 1)}
        />
        <SizeButton
          label={"-"}
          strokeWidth={strokeWidth}
          action={() => setStrokeWidth(strokeWidth - 1)}
        />
      </View>
    </View>
  );
};

const styles= StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center"
    },
    text: {
        fontSize: 80,
    }
})

export default SizeChanger;
