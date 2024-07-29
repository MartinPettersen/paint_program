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
  TextInput,
} from "react-native";

const { width, height } = Dimensions.get("window");

type Props = {
  saveModalVisible: boolean;
  setSaveModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  action: () => void;
};

const SaveNameWindow = ({
  saveModalVisible,
  setSaveModalVisible,
  action,
}: Props) => {
  const [fileName, setFileName] = useState("");

  const closeSaveModal = () => {
    setSaveModalVisible(false);
  };

  const handleSave = () => {
    action();
    closeSaveModal();
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
            <TouchableOpacity
              style={styles.closeButton}
              onPress={closeSaveModal}
            >
              <Text style={styles.closeText}>X</Text>
            </TouchableOpacity>
            <Text style={styles.text}>Save As:</Text>
            <TextInput
              placeholder="filename"
              onChangeText={(text: string) => setFileName(text)}
              value={fileName}
              multiline={false}
              style={styles.input}
            />
            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
              <Text style={styles.text}>Save</Text>
            </TouchableOpacity>
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
    borderRadius: 5,
  },
  modal: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: width,
    height: height,
    paddingTop: 50,
  },
  text: {
    color: "white",
    fontSize: 25,
    padding: 10,
    alignContent: "center",
    justifyContent: "center",
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
  input: {
    width: "80%",
    marginVertical: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#a8a29e",
    color: "#292524",
    fontSize: 25,
    backgroundColor: "#d6d3d1",
  },
  saveButton: {
    backgroundColor: "black",
    paddingHorizontal: 8,
    margin: 4,
    borderWidth: 1,
    borderColor: "#a8a29e",
    borderRadius: 5,
    alignContent: "center",
    justifyContent: "center",
  },
  closeText: {
    color: "white",
    fontSize: 25,
    fontWeight: "semibold",
  },
});

export default SaveNameWindow;
