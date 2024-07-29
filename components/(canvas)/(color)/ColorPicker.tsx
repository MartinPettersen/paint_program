import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Slider from "@react-native-community/slider";
import ColorSlider from "./ColorSlider";

const { width, height } = Dimensions.get("window");

type Props = {
  red: number;
  green: number;
  blue: number;
  setRed: React.Dispatch<React.SetStateAction<number>>;
  setGreen: React.Dispatch<React.SetStateAction<number>>;
  setBlue: React.Dispatch<React.SetStateAction<number>>;
  colorPickerModalVisible: boolean;
  setcolorPickerModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const ColorPicker = ({
  red,
  green,
  blue,
  setRed,
  setGreen,
  setBlue,
  colorPickerModalVisible,
  setcolorPickerModalVisible,
}: Props) => {
  const closeColorPickerModal = () => {
    setcolorPickerModalVisible(false);
  };

  return (
    <Modal
      animationType="none"
      transparent={true}
      visible={colorPickerModalVisible}
      onRequestClose={closeColorPickerModal}
      style={{ height: "30%" }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView behavior="padding" style={styles.modal}>
          <View style={styles.container}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={closeColorPickerModal}
            >
              <Text style={styles.closeText}>X</Text>
            </TouchableOpacity>
            <ColorSlider color={red} setColor={setRed} label="R" />
            <ColorSlider color={green} setColor={setGreen} label="G" />
            <ColorSlider color={blue} setColor={setBlue} label="B" />

            <Text style={styles.text}>{`(${red},${green},${blue})`}</Text>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "30%",
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#292524",
    borderRadius: 10,
  },
  modal: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: width,
    height: height,
    paddingTop: 50,
  },

  closeText: {
    color: "white",
    fontSize: 25,
    fontWeight: "semibold",
  },
  closeButton: {
    backgroundColor: "#b91c1c",
    width: 30,
    justifyContent: "center",
    alignItems: "center",
    height: 30,
    position: "absolute",
    top: 10,
    right: 10,
    borderRadius: 5,
  },
  text: {
    color: "white",
  },
  slider: {
    width: "80%",
    height: 40,
  },
});

export default ColorPicker;
