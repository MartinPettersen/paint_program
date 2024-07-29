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

const { width, height } = Dimensions.get("window");


const SaveNameWindow = () => {
  const [saveModalVisible, setSaveModalVisible] = useState(true);

  const closeSaveModal = () => {
    setSaveModalVisible(false);
  };

  return (
    <Modal
      animationType="none"
      transparent={true}
      visible={saveModalVisible}
      onRequestClose={closeSaveModal}
      style={{ height: "30%" }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView behavior="padding" style={styles.modal}>

        <View style={styles.container}>
        <TouchableOpacity  onPress={closeSaveModal}>
            <Text >X</Text>
          </TouchableOpacity>
          <Text>SaveNameWindow</Text>
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
    backgroundColor: "pink",
    borderRadius: 10,
  },
  modal: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: width,
    height: height,
    paddingTop: 50,
  }
});

export default SaveNameWindow;
