import React from "react";
import {
  View,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Colors from "../../assets/Shared/Colors";

const SocialModel = ({ visible, onClose }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 20,
            }}
          >
            <Text style={styles.modalHeading}></Text>
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.closeButton}>X</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.bottomContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Continue with Apple</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Continue with Apple</Text>
            </TouchableOpacity>

            
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontFamily: "appfont-medium",
  },
  modalContent: {
    backgroundColor: Colors.white,
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalHeading: {
    fontSize: 24,
    marginBottom: 10,
    color: Colors.black,
    fontFamily: "appfont-medium",
  },
  closeButton: {
    fontSize: 18,
    color: Colors.SplashButton,
    textAlign: "center",
  },
  inputBox: {
    width: "100%",
  },
  input: {
    height: 50,
    marginVertical: 5,
    borderWidth: 1,
    padding: 15,
    borderColor: Colors.MAIN,
    borderRadius: 10,
    color: Colors.MAIN,
    backgroundColor: Colors.white,
  },
  bottomContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 20,
  },
  notADoctorText: {
    marginTop: 8,
    fontSize: 16,
    fontFamily: "appfont-medium",
    textDecorationLine: "underline",
  },
  mainText: {
    fontSize: 24,
    marginBottom: 20,
    color: Colors.white,
    fontFamily: "appfont-bold",
  },
  button: {
    width: "100%",
    backgroundColor: "transparent",
    borderColor: "#E1E4EE",
    borderWidth: 2,
    paddingVertical: 12,
    paddingHorizontal: 60,
    borderRadius: 8,
    marginVertical: 10,
  },
  
  buttonText: {
    fontSize: 20,
    textAlign: "center",
    fontFamily: "appfont-medium",
  },
  buttonTextMain: {
    color: Colors.SplashButton,
    fontSize: 20,
    textAlign: "center",
    fontFamily: "appfont-medium",
  },
});

export default SocialModel;
